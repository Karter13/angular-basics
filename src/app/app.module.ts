import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { ChildExampleComponent } from './example/child-example/child-example.component';
import { ParentExampleComponent } from './example/prent-example/parent-example.component';
import { LodashComponent } from './lodash/lodash.component';
import { CastomDerectiveDirective } from './castom-derective.directive';
import { CutPipe } from './cut.pipe';
import { ElementRefDemoComponent } from './element-ref-demo/element-ref-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentExampleComponent,
    ChildExampleComponent,
    LodashComponent,
    CastomDerectiveDirective,
    CutPipe,
    ElementRefDemoComponent
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
