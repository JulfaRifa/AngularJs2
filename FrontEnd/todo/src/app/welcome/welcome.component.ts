import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Some Welcome Message"
  name=""
  welcomeMessageFromService=""
  constructor(private route : ActivatedRoute, private welcomeDataService:WelcomeDataService) { }

  ngOnInit(){
    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    // console.log(this.welcomeDataService.executeHelloWorlBeanService())
    // console.log("Welcome Message")
    this.welcomeDataService.executeHelloWorlBeanService().subscribe(
          response => this.handleSuccessfulResponse(response),
          error => this.handleErrorResponse(error)
          

    )
    // console.log("last line of getWelcomeMessage")
  }

  getWelcomeMessageWithParameter()
  {
    // console.log(this.welcomeDataService.executeHelloWorlBeanService())
    // console.log("Welcome Message")
    this.welcomeDataService.executeHelloWorlServiceWithPathVariable(this.name).subscribe(
          response => this.handleSuccessfulResponse(response),
          error => this.handleErrorResponse(error)
          

    )
    // console.log("last line of getWelcomeMessage")
  }
  
  handleSuccessfulResponse(response :any)
  {
    this.welcomeMessageFromService=response.message
    // console.log(response.message)
  }

  handleErrorResponse(error :any)
  {
    this.welcomeMessageFromService=error.error.message

  }

}
