import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { PhonesComponent } from './phones/phones.component';
import { LoginComponent } from '@mdv-nineteen/ui-lib';
import { WildCardComponent } from '@mdv-nineteen/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'phones', children: [
    { path: '', component: PhonesComponent },
    { path: ':id', component: PhonesItemComponent }
  ] },
  { path: '404', component: WildCardComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
