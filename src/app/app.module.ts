import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import { HeaderComponent } from './header/header.component';
import { AppToDoListComponent } from './app-to-do-list/app-to-do-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TtaskInputComponent } from './ttask-input/ttask-input.component';
import { MainComponent } from './main/main.component';
import {doApi} from './apiService/doApi'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppToDoListComponent,
    TaskListComponent,
    TtaskInputComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [doApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
