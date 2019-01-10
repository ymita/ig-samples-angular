import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IgxGridModule } from 'igniteui-angular'; // 追加
import 'hammerjs'; // 追加

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IgxGridModule // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
