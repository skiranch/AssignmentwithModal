import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  providers: [Modal],

})
export class LeftComponent {
@Output()
 showbody:EventEmitter<boolean> =new EventEmitter<boolean>();
constructor (public modal: Modal){}
 displayBody()
 {
   this.showbody.emit(true);
   
 }

onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('PROFILE')
        .body(`
           <button><input type="button">LOGOUT</button>`)
        .open();
  }
  
 }

