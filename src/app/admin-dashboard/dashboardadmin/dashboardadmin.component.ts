import { Component, OnInit } from '@angular/core';
import { ChangePassword } from 'src/app/model/change-password';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';


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
    oks:any;
    resetPassword(){
      this.login.resetPassword(this.user.id,this.password);
      this.login.user.subscribe(res =>{
        this.oks= res;
        if(this.login.data1 =="gagal"){
          alert(this.oks.error);
                }
        if(this.login.data1=="suc"){
          this.route.navigateByUrl("candidate/dashboard");
        }
      })
    }


    data: any;

    constructor( private login:RegisterService,private route:Router) {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Candidate Register',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Candidate Invited',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'Candidate Approved',
                    backgroundColor: '#CCCCCC',
                    borderColor: '#7CB342',
                    data: [18, 28, 20, 9, 46, 17, 60]
                }
            ]
        }
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
    this.login.store.delete('user').subscribe((res) => {this.route.navigateByUrl("/admin")});
  }

}
