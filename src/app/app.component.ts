import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'switchbutton';
  leftBtn: boolean = true;
  showText: string = 'Group Info';
  showData: Object = {name:'',group:'',color:''};
  showDataFromIds: string = '';
  showDataKeys:string[] = Object.keys(this.showData);
  nameOptions:string[] = [];
  groupOptions:string[] = [];
  colorOptions:string[] = [];
  multiOptions:string[] = [];
  dropDownForm: FormGroup = this.fb.group({
    name:[null],
    group:[null],
    color:[null],
    multi:[null],
    date:[null]
  })


  constructor(private fb: FormBuilder, private dataService:DataService){}

  ngOnInit() {
    this.dataService.getData('name').then(datas => {
      this.nameOptions = datas;
      this.multiOptions = this.multiOptions.concat(datas);
    })
    this.dataService.getData('group').then(datas => {
      this.groupOptions = datas;
      this.multiOptions = this.multiOptions.concat(datas);
    })
    this.dataService.getData('color').then(datas => {
      this.colorOptions = datas;
      this.multiOptions = this.multiOptions.concat(datas);
    })
  }

  switchButton(event:Event) {
    if((<HTMLElement>event.target).textContent == ' Group Info ') {
      this.leftBtn = true;
      this.showText = 'Group Info';
    } else {
      this.leftBtn = false;
      this.showText = 'Member Info';
    }
  }

  showSelected(data:{id:string,value:string}) {
    if(data.id!=''){
      this.showData[data.id] = data.value;
    } else {
      this.showDataFromIds = data.value;
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.dropDownForm.value);
    this.dropDownForm.reset();
  }

  date:string;
  fetchDate(value) {
    this.date = value;
  }

  val='';
  onInput(event) {
    //this.val = 1+(<HTMLInputElement>event.target).value;
    this.val = 1+event;
    console.log(this.val);
  }
}
