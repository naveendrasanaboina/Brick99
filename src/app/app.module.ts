import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
=======
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,

    IndexComponent,
    AboutComponent,
    ContactComponent
=======
    AboutComponent,

    UserPanelComponent,
    ServicesComponent
=======
    UserPanelComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
