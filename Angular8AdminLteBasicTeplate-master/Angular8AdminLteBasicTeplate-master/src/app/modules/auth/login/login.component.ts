import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  data:any;
  us:Login =  new Login("","");
  constructor(private logs:LoginService,private route:Router) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  loginuser(data:any){
    this.logs.LoginUser(this.us);
    this.logs.user.subscribe(res =>{
      this.data= res;
      if(this.logs.data1 =="gagal"){
        alert(this.data.error);
      }
      if(this.logs.data1=="suc"){
        this.route.navigateByUrl("/members");
      }
    })
  }
}
