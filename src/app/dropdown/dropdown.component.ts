import { Component, OnInit, Output, Input, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit,OnChanges {
  @Input('id')id = ''; //通过parent componet给这个dropdown命名，告诉这个dropdown取serviec里的哪个数组
  @Input('ids')ids = [];
  @Output() selected = new EventEmitter<{id:string,name:string}>(); //把id和从dropdown中选中的值传给parent component。
  search:string='';
  datas:string[]=[];
  showDropdown:boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    if(this.id!='') {
      this.dataService.getData(this.id).then(
        data => {
          this.datas=data;
        }
      );
    }
    if(this.ids.length) {
      for(let item of this.ids) {
        this.dataService.getData(item).then(
          data => {
            this.datas=this.datas.concat(data);
            console.log(this.datas);
          }
        );
      }
    }
  }

  ngOnChanges() {
  }

  detectInput(event:Event) {
    this.search = (<HTMLInputElement>event.target).value;
    if(this.search === '') { 
      this.showDropdown = false;
      return;
    } //没有输入，不显示dropdown
    for(let data of this.datas) {
      let splited = data.split(' ');
      for(let str of splited) {
        if(str.indexOf(this.search)===0) {
          this.showDropdown = true;
          return;
        } 
      }
      // if(data.indexOf(this.search)===0) {
      //   this.showDropdown = true;
      //   return; //datas里的某一个data包括输入，显示dropdown
      // }
    }
    this.showDropdown = false; //遍历完datas，不包括输入，不显示dropdown
  }

  select(data:string) {
    this.search = data; //把选中的值送回输入框
    this.selected.emit({id:this.id,name:data}); //选中的值传给parennt component
    this.showDropdown = false; //关闭dropdown
  }

}
