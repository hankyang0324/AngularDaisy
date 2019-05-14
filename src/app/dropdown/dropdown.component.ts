import { Component, Output, Input, forwardRef, OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-dropdown',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('divState',[
      state('expanded',style({
          height: AUTO_STYLE
      })),
      state('collapsed',style({
          height: 0,
          display: 'none'
       })),
       transition('collapsed => expanded',animate('150ms ease-out'))
    ]),
  ]
})

export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input('id')id = ''; //通过parent componet给这个dropdown命名
  @Input('options')options = [];
  @Input('ids')ids = [];
  @Input('placeholder')placeholder = '';
  @Input('disabled') disabled: boolean = false;
  @Input('width') width: string;
  @Input('max-height') maxHeight: string;
  @Output() selected = new EventEmitter<{id:string,value:string}>(); //把id和从dropdown中选中的值传给parent component。
  search:string='';
  showDropdown:string = 'collapsed';
  dropdownWidth:string;

  ngOnInit() {
    this.dropdownWidth = parseInt(this.width)+6+'px';
    this.width+='px';
    this.maxHeight+='px';
  }

  show() {
    this.showDropdown = 'expanded';
  }

  hide() {
    this.onTouched();
    setTimeout(()=>this.showDropdown = 'collapsed', 150);
  }

  detectInput(event:Event) {
    this.search = (<HTMLInputElement>event.target).value;
    for(let option of this.options) {
      let splited = option.split(' ');
      for(let str of splited) {
        if(str.indexOf(this.search)===0 || option.indexOf(this.search)===0) {
          this.showDropdown = 'expanded';
          return;
        } 
      }
    }
    this.showDropdown = 'collapsed'; //遍历完datas，不包括输入，不显示dropdown
  }

  select(option:string) {
    this.search = option; //把选中的值送回输入框
    this.selected.emit({id:this.id,value:option}); //选中的值传给parennt component
    this.showDropdown = 'collapsed'; //关闭dropdown
    this.onChange(this.search); //给reactive form传值
  }

  /* --------------  form control ---------------*/

  onChange = (value) => {}

  onTouched = () => {};

  registerOnChange(fn) {
    this.onChange = fn; 
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.search = value ? value : ''; //reactive form 给search设初值
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }
}

