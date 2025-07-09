import { Component } from '@angular/core';
import { Layout } from './layout/layout/layout';

@Component({
  selector: 'shop-root',
  imports: [Layout],
  template: `<shop-layout/>`,
})
export class Root {
  protected title = 'my-amz-ecom';
}
