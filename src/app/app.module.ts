import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  FooterComponent,
  SliderComponent,
  CustomPackageComponent
} from './components/index';
import { PlansComponent, OpenAccountComponent } from './pages/index';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlansComponent,
    OpenAccountComponent,
    SliderComponent,
    CustomPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
