import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css'],
  styles:[`
        .box,
        .sample-layout > div {
            background-color: #FAF9F9;
            text-align: center;
            padding-top: 1em;
            padding-bottom: 1em;
            border-radius: 6px;
        }

        .box-stretched {
            height: 100%;
        }

        .sample-layout {
            margin: 0;
        }

        .sample-layout > div {
            border: 3px solid #ffffff;
        }

        .vertical-container {
            margin: 0;
            height: 200px;
            background: #efefef;
            border-radius: 6px;
        }

        .nested-grid .p-col-6 {
            padding-bottom: 1em;
        }
    `],
    animations: [
        trigger('animation', [
            state('visible', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('void => *', [
                style({transform: 'translateX(50%)', opacity: 0}),
                animate('300ms ease-out')
            ]),
            transition('* => void', [
                animate(('250ms ease-in'), style({
                    height: 0,
                    opacity: 0,
                    transform: 'translateX(50%)'
                }))
            ])
        ])
    ],
    encapsulation: ViewEncapsulation.None
})
export class JoblistComponent implements OnInit {

  addjob: boolean;  detailjob: boolean;  updatejob: boolean;  detailcandidate: boolean;
  addcategory: boolean;  updatecategory: boolean;
  addposition: boolean;  updateposition: boolean;
  settings: boolean;
  req = [];
  ireq: any = 0;
  item =[];
  itemList = [];
  i:any = 0;

  confirmasi(){
    for(let i in this.columns){
      this.itemList.push(this.item[i]);
    }
    console.log(this.itemList);
  }

  showSettings(){
    this.settings = true;
  }
  
  showDetailCandidate(){
    this.detailcandidate = true;
  }

  showAddJob() {
    this.addjob = true;
  }

  showDetailJob() {
    this.detailjob = true;
  }

  showUpdateJob() {
    this.updatejob = true;
  }

  showAddCategory(){
    this.addcategory = true;
  }

  showUpdateCategory(){
    this.updatecategory = true;
  }

  showAddPosition(){
    this.addposition = true;
  }

  showUpdatePosition(){
    this.updateposition = true;
  }

  constructor() { }

  columns: number[];
  columndescription : number[];

    ngOnInit() {
        this.columns = [];
        this.columndescription = [];
        this.upcolumns = [];
        this.upcolumndescription = [];
    }

    addColumn() {
      this.columns.push(this.columns.length);
    }

    addColumnDes(){
      this.columndescription.push(this.columndescription.length);
    }

    removeColumn() {
      this.columns.splice(-1, 1);
    }

    removeColumnDes(){
      this.columndescription.splice(-1, 1);
    }

    upcolumns: number[];
    upcolumndescription : number[];
  
      upaddColumn() {
        this.upcolumns.push(this.upcolumns.length);
      }
  
      upaddColumnDes(){
        this.upcolumndescription.push(this.upcolumndescription.length);
      }
  
      upremoveColumn() {
        this.upcolumns.splice(-1, 1);
      }
  
      upremoveColumnDes(){
        this.upcolumndescription.splice(-1, 1);
      }

    

}
