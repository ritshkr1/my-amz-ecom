import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'shop-layout',
  imports: [RouterOutlet,Header,Footer],
  templateUrl: './layout.html',
})
export class Layout {

}
