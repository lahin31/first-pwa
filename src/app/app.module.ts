import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellModule } from '@angular/app-shell';

import { StudentService } from './student.service';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';

import { AppRoutingModule } from './app-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    AppShellModule.runtime()
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
