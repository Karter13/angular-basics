import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { ChildExampleComponent } from './example/child-example/child-example.component';
import { ParentExampleComponent } from './example/prent-example/parent-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentExampleComponent,
    ChildExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
