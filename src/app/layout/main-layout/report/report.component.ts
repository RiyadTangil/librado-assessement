import { ExportPdfService } from './../../../utils/processes/export-pdf.service';
import { ApiService } from './../../../utils/api.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GlobalDataService } from 'src/app/utils/data/global-data.service';
import { values } from '../../../utils/data';
import * as echarts from 'echarts';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  allTargetSubmissions: any;
  allCurrentSubmissions: any;
  allValues = values;
  currentFrequencyTable: Array<any> = []
  TargetFrequencyTable: Array<any> = []
  isChartRender: boolean = false;

  questionData: any = {}
  showData: Array<any> = [];
  tableData: Array<any> = [];
  hapinessFactor: number = 0;
  showModal: boolean = false;

  tabs = ['CULTURAL FIT', 'COMPETANCY DEVELOPMENT', 'PROCESS STANDARIZATION'];
  // 'CUSTOMER ENGAGEMENT', 'MANAGEMENT CAPACITY', 'PROFITABILITY', 'POST COVID'
  currentTab = this.tabs[0];

  culturalFitData: any;
  processStandardizationData: any;
  compentancyDevelopmentData: any;

  chartData = {
    titles: <Array<string>>[],
    current: <Array<number>>[],
    target: <Array<number>>[]
  }


  constructor(
    private _api: ApiService,
    private _globalData: GlobalDataService,
    private _pdfExport: ExportPdfService
  ) {
    this.chartData.titles = this.allValues.map((item: any) => item['value'])
  }

  targetChartOption: EChartsOption = {};
  ngOnInit(): void {

    this.allTargetSubmissions = JSON.parse(
      localStorage.getItem('allTargetSubmissions') || '[]'
    );
    this.allCurrentSubmissions = JSON.parse(
      localStorage.getItem('allCurrentSubmissions') || '[]'
    );

    console.log(this.allCurrentSubmissions, this.allTargetSubmissions, this.allValues)

    this.calculateData(this.allTargetSubmissions, 'target');
    this.calculateData(this.allCurrentSubmissions, 'current');

    console.log(this.chartData, 'CHART DATA')
    this.targetChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true
          }
        }
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: false, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: false },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      legend: {
        data: ['Current', 'Target'],
        itemGap: 5
      },
      grid: {
        top: '10%',
        left: '1%',
        right: '10%',
        containLabel: true
      },

      xAxis: [
        {
          type: 'category',
          data: this.chartData.titles,
          axisLabel: {
            interval: 0,
            rotate: 60,
            width: 100, //fixed number of pixels
          }

        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Value',
          axisLabel: {
            formatter: function (a: number) {
              a = +a;
              return isFinite(a) ? echarts.format.addCommas(+a) : '';
            }
          }
        }
      ],
      dataZoom: [
        {
          show: true,
          start: 0,
          end: 100
        },
        {
          type: 'inside',
          start: 0,
          end: 100
        },
        {
          show: true,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 30,
          height: '80%',
          showDataShadow: false,
          left: '93%'
        }
      ],
      series: [
        {
          name: 'Current',
          type: 'bar',
          data: this.chartData.current
        },
        {
          name: 'Target',
          type: 'bar',
          data: this.chartData.target
        }
      ]
    };

    this.isChartRender = true;

    this.calculateQuestionData();

    this.hapinessFactor = +(localStorage.getItem('happinessScore') || 0);

  }
  calculateData(allSubmissions: any, tableType: string) {
    let total_submissions = allSubmissions.length;
    let totalValues = this.allValues.length
    let valueRankArr = new Array(total_submissions);
    let valueLength = this.allValues.length
    for (let i = 0; i < total_submissions; i++) {
      valueRankArr[i] = [];
      for (let j = 0; j < totalValues; j++) {
        let index = allSubmissions[i]['valueRanking'].findIndex((item: any) => { return item.id == this.allValues[j]['id'] })
        valueRankArr[i].push(index + 1);
      }
  }

    // valueRankArr -> [[ranking],[ranking]]
    console.log(valueRankArr, '--', tableType);
    console.log(valueRankArr.length, '--', tableType);
    let dataArr = new Array(valueLength);

    console.log(dataArr);
    for (let i = 0; i < this.allValues.length; i++) {
      let sum = 0;
      for (let j = 0; j < valueRankArr.length; j++) {
        sum = sum + valueRankArr?.[j]?.[i];
      }
      dataArr[i] = sum;
    }
    console.log(dataArr, 'DATA ARR');

    tableType == 'current' && (this.chartData.current = dataArr);
    tableType == 'target' && (this.chartData.target = dataArr);




  }

  changeTab(tab: string) {
    this.currentTab = tab;
    this.calculateQuestionData();

  }



  calculateQuestionData() {
    this.questionData = JSON.parse(localStorage.getItem('operationDiagnosis') || '[]');
    this.culturalFitData = this.questionData.filter((item: any) => item.question === "culturalFit");
    this.compentancyDevelopmentData = this.questionData.filter((item: any) => item.question === "compentancyDevelopment");
    this.processStandardizationData = this.questionData.filter((item: any) => item.question === "processStandardization");

    console.log('QUESTION DATA \n', this.questionData, this.culturalFitData, this.processStandardizationData, this.compentancyDevelopmentData);

    this.calculateShowData();




    let important = this.showData.filter((item) => item.status === "Important")
    let Critical = this.showData.filter((item) => item.status === "Critical")
    let Meaningful = this.showData.filter((item) => item.status === "Meaningful")
    let Urgent = this.showData.filter((item) => item.status === "Urgent")

    important = this.sortByKey(important, 'percentage')
    Critical = this.sortByKey(Critical, 'percentage')
    Meaningful = this.sortByKey(Meaningful, 'percentage')
    Urgent = this.sortByKey(Urgent, 'percentage')

    this.tableData.push({
      type: this.currentTab,
      Meaningful: Meaningful[0],
      important: important[0],
      critical: Critical[0],
      Urgent: Urgent[0]
    })

    console.log(this.tableData, '====')

  }
  handleModalHide(){
    this.showModal= true;
  }

  calculateShowData() {
    this.showData = [];
    let computeData: Array<any> = [];
    switch (this.currentTab) {
      case 'CULTURAL FIT':
        computeData = this.culturalFitData;
        break;
      case 'COMPETANCY DEVELOPMENT':
        computeData = this.compentancyDevelopmentData;
        break;
      case 'PROCESS STANDARIZATION':
        computeData = this.processStandardizationData;
        break;
    }

    let arr: Array<any> = [];
    computeData.forEach(item => arr.push(item.data))
    for (let i = 0; i < arr?.[0].length; i++) {

      let currentQuestion = '';
      let selections = [];
      let options = [];
      let status = '';


      for (let j = 0; j < arr.length; j++) {
        const element = arr[j][i];
        console.log(element);
        currentQuestion = element['question'];
        options = element['options'];
        selections.push(element['selected']);
        status = element['priority']
      }

      let obj = this.getPercentage(selections);

      this.showData.push({
        question: currentQuestion,
        selection: obj.value,
        option: options.filter((option: any) => option.value === obj.value)[0]['option'],
        percentage: obj.percentage,
        status: status
      })

    }
  }

  sortByKey(array: Array<any>, key: string) {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  getPercentage(arr: Array<string>) {
    const selections = arr
    const totalItems = selections.length
    const uniqueItems = [...new Set(selections)]
    let higestPercentage = {
      value: '',
      percentage: 0
    }
    uniqueItems.forEach(current => {
      const numItems = selections.filter((item: any) => item === current)
      const percentage = numItems.length * 100 / totalItems;
      (higestPercentage.percentage < percentage) && (higestPercentage.percentage = percentage) && (higestPercentage.value = current)
    })

    console.log(higestPercentage);
    return higestPercentage;
  }

}
