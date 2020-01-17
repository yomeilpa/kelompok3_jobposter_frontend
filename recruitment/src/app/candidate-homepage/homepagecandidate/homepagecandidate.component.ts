import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepagecandidate',
  templateUrl: './homepagecandidate.component.html',
  styleUrls: ['./homepagecandidate.component.css']
})
export class HomepagecandidateComponent implements OnInit {
    images: any[];
    displaysignup: boolean = false;
    displaysignin:boolean = false;
    msgs: any[];
    checked: boolean = false;

showDialogSignIn() {
  this.displaysignin = true; 
  }

showDialogSignUp() {
  this.displaysignup = true; 
}

showSuccess() {
  this.msgs = [];
  this.msgs.push({severity:'success', summary:'Success', detail:'Please Check your Email'});
}

  constructor() { }

  ngOnInit() {
      
  }

}