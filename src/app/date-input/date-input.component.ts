import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ],
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit, ControlValueAccessor {

  date:string;
  invalid:boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('width') width: string;

  constructor() { }

  ngOnInit() {
    this.width+='px';
  }

  detectChange(event:Event) {
    this.invalid = false;
    this.onChange((<HTMLInputElement>event.target).value);
  }

  onClick(){
    this.invalid = false;
  }

  onBlur(event:Event){
    let val = (<HTMLInputElement>event.target).value;
    let arr = val.split('/');
    for(let str of arr){
      for(let item of str){
        if(item<'0'||item>'9') return this.invalid = true;
      }
    }
    this.invalid = false;
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
    this.date = value ? value : ''; //reactive form 给search设初值
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }
}
