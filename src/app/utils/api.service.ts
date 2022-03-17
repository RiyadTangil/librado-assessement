import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { urls } from "./urls";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) { }
  apiroot = urls.baseUrl;

  async GET_UNIVERSAL(endpoint: string) {
    return await this.http.get(endpoint).toPromise();
  }

  async GET(endpoint: string) {
    return await this.http.get(this.apiroot.concat(endpoint)).toPromise();
  }

  async PUT(endpoint: string, obj: any) {
    return await this.http
      .put(this.apiroot.concat(endpoint), obj, {
        observe: "events",
      })
      .toPromise();
  }

  async DELETE(endpoint: string, id: number) {
    return await this.http
      .delete(this.apiroot.concat(endpoint, "/", id + ''))
      .toPromise();
  }

  async POST(endpoint: string, obj: any) {
    return await this.http
      .post(this.apiroot.concat(endpoint), obj, {
        observe: "events",
      })
      .toPromise();
  }
}
