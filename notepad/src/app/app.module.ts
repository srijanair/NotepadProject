import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './src/app/userlist/userlist.component';
import { AddeditusersComponent } from './components/addeditusers/addeditusers.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AddeditusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
