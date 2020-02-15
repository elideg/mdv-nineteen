import { UiLibModule } from '@mdv-nineteen/ui-lib';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { PhonesComponent } from './phones/phones.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-nineteen/core-data';
import { MaterialModule } from '@mdv-nineteen/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    PhonesItemComponent,
    PhonesListComponent,
    PhonesDetailsComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
