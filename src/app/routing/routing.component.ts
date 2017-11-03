import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import {ActivatedRoute} from '@angular/router';

@Component({

selector:'routing',
templateUrl:'./routing.component.html',
styleUrls:['./routing.component.scss'],

})

export class RoutingComponent implements OnInit{

userForm :FormGroup;
constructor(private _formbuilder:FormBuilder, private route:ActivatedRoute){}

ngOnInit()
{

    this.route.params.subscribe() 
  /*  this.userForm= this._formbuilder.group({

        GalleryName:["Gallery Name", [Validators.required,Validators.minLength(3), Validators.maxLength(15)]],
        Status:[],
        Color:[],
        NoOfProducts:[],
        Publish:[]
    })
}*/
}
}