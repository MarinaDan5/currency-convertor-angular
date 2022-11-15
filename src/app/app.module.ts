import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {BodyComponent} from "./components/body/body.component";
import {HeaderComponent} from "./components/header/header.component";
import {ContainerComponent} from "./components/container.component";



@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [
    ContainerComponent,
  ]
})
export class AppModule { }
