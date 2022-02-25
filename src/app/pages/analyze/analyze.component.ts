import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnalyzeService } from 'src/app/service/analyze.service';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {
  @ViewChild('foodItem') foodItem!: ElementRef;

  calories: any;
  servingWeightGrams: any;
  foodItemValue: any;

  constructor(private _analyze: AnalyzeService) { }

  ngOnInit(): void {
    //this.getInformation();
  }

  getInformation(){
    if(this.foodItemValue !== null && this.foodItemValue != "") {
      this._analyze.getAnalysis(this.foodItemValue).subscribe((data : any) => {
        console.log(data);
        for (var i = 0; i < data.hits.length; i++) {
          this.calories =  data.hits[i].fields.nf_calories;
          this.servingWeightGrams = data.hits[i].fields.nf_serving_weight_grams
        }
      },
      error => {
        console.log(error);
      }
    )};  
  }

  rest(){
    this.calories = '';
    this.servingWeightGrams = '';
    this.foodItemValue = '';
  }
}
