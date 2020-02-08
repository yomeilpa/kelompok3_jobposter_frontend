import { Component, OnInit } from '@angular/core';
import { ChangePassword } from 'src/app/model/change-password';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/service/report.service';


@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css'],
})
export class DashboardadminComponent implements OnInit {
    settings: boolean;
    password:any = new ChangePassword(null,null,null);
    user:any;
    imageData:any;
    candidate:any;

    showSettings(){
        this.settings = true;
    }
    year:any;
    getReport(){
      this.report.getreportbyyear(this.year)
    }

    getReportID(){
      this.report.getmyreport(this.user.candidate.id);
    }

    oks:any;
    resetPassword(){
      this.login.resetPassword(this.user.id,this.password);
      this.login.user.subscribe(res =>{
        this.oks= res;
        if(this.login.data1 =="gagal"){
          alert(this.oks.error);
                }
        if(this.login.data1=="suc"){
          location.href ="admin/dashboard";
        }
      })
    }


    data: any;
   

    constructor( private login:RegisterService,private route:Router, private report:ReportService) {

    }

    ngOnInit() {

      this.user = this.login.store.get("user").subscribe( res => {
        this.user=res;
        if(res == null){
          this.route.navigateByUrl("/admin");
        }
        else{
          if(this.user.role != "HR"){
            alert("You are not logged as admin")
            this.destroySession();
          }
          this.candidate = this.user.candidate;
          if(this.user.candidate.pic == null){
            this.imageData ="assets/img/team/1.jpg";
          }
          else{
          this.imageData = 'data:'+this.candidate.type+';base64,'+this.candidate.pic;   }
          }
        });
    }

    

  destroySession(){
    this.login.store.delete('user').subscribe((res) => {
      this.login.store.delete("key").subscribe(res => {})
      this.route.navigateByUrl("/admin")});
  }
  

}
