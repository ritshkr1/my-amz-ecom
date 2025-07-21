import { Component } from '@angular/core';

@Component({
  selector: 'shop-loader',
  imports: [],
  template: `
  <div class="absolute inset-0 z-50 flex items-center justify-center bg-white/80">
  <div class="h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-500 border-t-transparent"></div>
</div>
  `,
})
export class Loader {

}
