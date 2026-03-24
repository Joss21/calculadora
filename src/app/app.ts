import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from "./calculadora/calculadora";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calculadora-app';
}
