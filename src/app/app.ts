import { Component } from '@angular/core';
import { Calculadora } from "./calculadora/calculadora";

@Component({
  selector: 'app-root',
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calculadora-app';
}
