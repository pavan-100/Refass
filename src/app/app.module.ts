import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { WorksComponent } from './components/works/works.component';
import { AssdoComponent } from './components/assdo/assdo.component';
import { AssnotdoComponent } from './components/assnotdo/assnotdo.component';
import { RightforuComponent } from './components/rightforu/rightforu.component';
import { AgentssayComponent } from './components/agentssay/agentssay.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    WorksComponent,
    AssdoComponent,
    AssnotdoComponent,
    RightforuComponent,
    AgentssayComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
