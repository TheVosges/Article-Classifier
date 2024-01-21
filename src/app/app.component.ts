import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docu';
  public inputType: string = 'text';
  public result: string[] = [];
  booleanSwitchValue: boolean = false;
  public textInputValue: string = '';

  textToPredict: string = '';
  prediction: any;
  constructor(private predictionService: PredictionService) { }

  onSubmit(form: any) {
    // Handle text input submission logic
    console.log('Text Input Value:', this.textInputValue);
  }

  onSwitchChange() {
    // Handle logic when the switch changes
    console.log('Boolean Switch Value:', this.booleanSwitchValue);
  }

  onFileChange(event: any) {
    // Handle file input change logic
    const file = event.target.files[0];
    console.log('Selected File:', file);
  }

  public toggleInputType(): void {
    console.log("test")
  }

  public predictCategory(): void {
    console.log(this.booleanSwitchValue)
    if (this.booleanSwitchValue){
      this.predictionService.predict("test").subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    }
  }
}

