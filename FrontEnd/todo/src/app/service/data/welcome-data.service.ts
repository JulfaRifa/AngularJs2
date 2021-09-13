import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class HelloWorldBean{
  constructor(public message : string){}

}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorlBeanService()
  {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
    // console.log("Execute Helo World Bean Service")
    
  }

  executeHelloWorlServiceWithPathVariable(name:any)
  {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
    // console.log("Execute Helo World Bean Service")
    
  }
}
