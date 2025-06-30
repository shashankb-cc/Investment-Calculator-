import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  calculate = output<InvestmentInput>();
  initialInvestment = signal("0");
  annualInvestment = signal("0");
  expectedReturn = signal("5");
  investmentDuration = signal("10");

  onSubmit() {
    // Handle form submission logic here
   this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.investmentDuration()
    });

    this.initialInvestment.set("0");
    this.annualInvestment.set("0");
    this.expectedReturn.set("5"); // Reset to default value
    this.investmentDuration.set("10"); // Reset to default value    
  }

}
