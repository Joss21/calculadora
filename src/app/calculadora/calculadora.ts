import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})

export class Calculadora {
  display: string = '0';
  previousValue: number | null = null;
  operator: string | null = null;
  waitingForNewValue: boolean = false;
  expression: string = '';

  number(value: string) {

    if (this.waitingForNewValue) {
      this.display = value;
      this.waitingForNewValue = false;
    } else {
      this.display = this.display === '0' ? value : this.display + value;
    }
  }

  setOperator(op: string) {

    if (this.operator && !this.waitingForNewValue) {
      this.calculate();
    }

    this.previousValue = Number(this.display);
    this.operator = op;
    this.expression = `${this.display} ${op}`;

    this.waitingForNewValue = true;
  }

  calculate() {

    if (this.operator === null || this.previousValue === null) return;

    const current = Number(this.display);

    let result = 0;

    switch (this.operator) {
      case '+': result = this.previousValue + current; break;
      case '-': result = this.previousValue - current; break;
      case '*': result = this.previousValue * current; break;
      case '/': result = current !== 0 ? this.previousValue / current : 0; break;
    }

    this.expression = `${this.previousValue} ${this.operator} ${current} =`;

    this.display = result.toString();

    this.operator = null;
    this.previousValue = null;
    this.waitingForNewValue = true;
  }

  clear() {
    this.display = '0';
    this.previousValue = null;
    this.operator = null;
  }
}
