import { Component } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'switchbutton';
  leftBtn: boolean = true;
  showText: string = 'Group Info'
  datas:string[] = this.dataService.data;
  showData: Object = {};
  showDataKeys:string[] = Object.keys(this.showData);

  constructor(private dataService:DataService){}

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
    this.showData[data.id] = data.name;
    this.showDataKeys = Object.keys(this.showData);
  }
}
