import { Component, OnInit,EventEmitter,Output,ViewContainerRef,ViewEncapsulation,ViewChild} from '@angular/core';
import{ NgFor} from '@angular/common';
import{ Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
   templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../../assets/sass/panel.scss']
})
export class HeaderComponent{
  name: string = "FILTER BY STATUS";
  names: string[] = ["PUBLISHED", "NOT PUBLISHED", "PENDING", "FILTER BY STATUS"];

  storeName: string = "FILTER BY STORE";
  stores: string[] = ["Conberro", "Eastland", "Grand Central", "Robina","FILTER BY STORE"];

  value:number;

 @Output()
 fileterBody:EventEmitter<any>=new EventEmitter<any>();
 
 constructor (private router:Router){}

  myfilter(myOption:string,myOption2:string)
  {
    this.fileterBody.emit({opt1:myOption,opt2:myOption2});
    
  }

  OnClick(){
    this.value=1;
    this.router.navigate(['/HeaderComponent',{ outlet:{'Edit':[]}}]);
  }

}
