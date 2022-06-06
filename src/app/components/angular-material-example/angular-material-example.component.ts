import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-angular-material-example',
  templateUrl: './angular-material-example.component.html',
  styleUrls: ['./angular-material-example.component.scss']
})
export class AngularMaterialExampleComponent implements OnInit {

  inputValue: string = "";
  inputValue2: string = "";
  // arrs: Array<string> = ["a_1","b_2", "c_3"];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  food!: string

  // onValueChange($event: any) {
  //   this.inputValue = $event.target.value;
  //   this.inputValue2 = $event.target.value;

  // }

  constructor() { }

  ngOnInit(): void {
  }

  // addText() {
  //   this.inputValue = this.food;
  // }

}
