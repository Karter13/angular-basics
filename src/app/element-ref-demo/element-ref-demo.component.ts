import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-element-ref-demo',
  template: `
      <ng-template #tpl>
          <h1>TemplateRef demo</h1>
      </ng-template>
  `,
})
export class ElementRefDemoComponent implements AfterViewInit {

  @ViewChild('tpl') tpl!: TemplateRef<any>;

  ngAfterViewInit(): void {
       console.log(this.tpl.elementRef);
    }
}
