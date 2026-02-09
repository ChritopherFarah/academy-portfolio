import {Component} from '@angular/core';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [NavbarComponent]
})
export class App {
  intro: string = "Chris Farah's portfolio";
}