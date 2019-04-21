import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'switchbutton';
  leftBtn: boolean = true;
  showText: string = 'Group Info';
  showData: Object = {name:'',group:'',color:''};
  showDataFromIds: string = '';
  showDataKeys:string[] = Object.keys(this.showData);

  dropDownForm: FormGroup;

  ngOnInit() {
    this.dropDownForm = new FormGroup({
      'name':new FormControl(null),
      'group':new FormControl(null),
      'color':new FormControl(null),
      'multi':new FormControl(null),
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

  showSelected(data:{id:string,name:string}) {
    if(data.id!=''){
      this.showData[data.id] = data.name;
    } else {
      this.showDataFromIds = data.name;
    }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.dropDownForm.value);
  }
}
