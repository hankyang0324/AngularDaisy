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
  showText: string = 'Group Info';
  showData: Object = {name:'',group:'',color:''};
  showDataKeys:string[] = Object.keys(this.showData);

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
  }
}
