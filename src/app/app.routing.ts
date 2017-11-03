import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{LeftComponent} from './left/left.component';
import{HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import{AppComponent} from './app.component';
import{RoutingComponent} from './routing/routing.component';
const routes: Routes=[
{path:'',redirectTo:'app.comonent.html',pathMatch:'full'},
{path:'HeaderComponent',component:HeaderComponent, children:[
    {path:'Edit',component:RoutingComponent,outlet:'Edit'}]
}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[]
})

export class RoutingModule{}
