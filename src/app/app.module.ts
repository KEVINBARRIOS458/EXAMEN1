import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { SIDEBARComponent } from './sidebar/sidebar.component';
import { ImagencentralComponent } from './imagencentral/imagencentral.component';

@NgModule({
  declarations: [
    AppComponent,
    SIDEBARComponent,
    ImagencentralComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
