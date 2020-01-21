import {Component, OnInit,AfterViewInit,ViewChild, Input} from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  data:any;
  constructor(private login:LoginService) {
  
  }

  ngOnInit() {
    this.login.store.get("user").subscribe(res => {this.data = res});
  }

}
