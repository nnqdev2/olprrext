import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormArray, FormBuilder, Validators} from '@angular/forms';
import { TestValidators } from './test.validtors';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent implements OnInit {

  user;
  form;

  ngOnInit() {
  }



  constructor(private fb: FormBuilder) {

    this.user = {
      skills: [
        { name: 'Heating Oil',  selected: false, id: 'heatingOil' },
        { name: 'Unleaded Gasoline',  selected: false, id: 'unleadedGas' },
        // { name: 'Leaded Gasoline',  selected: 0, id: 12 },
        // { name: 'Misc. Gasoline',  selected: 0, id: 2 },
        // { name: 'Diesel (Motor Fuel)',  selected: 0, id: 12 },
        // { name: 'Waste Oil',  selected: 0, id: 2 },
        // { name: 'Lubricant',  selected: 0, id: 12 },
        // { name: 'Solvent',  selected: 0, id: 2 },
        // { name: 'Other Pet. Dist.',  selected: 0, id: 12 },
        // { name: 'Chemical',  selected: 0, id: 2 },
        // { name: 'MTBE',  selected: 0, id: 12 },
        // { name: 'Unknown Contaminant',  selected: 0, id: 2 },
      ]
    };



    // groundWater: number;
    // surfaceWater: number;
    // drinkingWater: number;
    // soil: number;
    // vapor: number;
    // freeProduct: number;
    // unleadedGas: number;
    // leadedGas: number;
    // misGas: number;
    // diesel: number;
    // wasteOil: number;
    // heatingOil: number;
    // Lubricant: number;
    // Solvent: number;
    // otherPet: number;
    // chemical: number;
    // unknown: number;
    // mtbe: number;


   
    console.clear();

    this.form = this.fb.group({
      skills: this.buildSkills()
    });

    console.log(this.form.get('skills'));
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }


  buildSkills() {
    const arr = this.user.skills.map(s => {
      console.log('**s===>');
      console.log(s);
      console.log('**s.selected===>');
      console.log(s.selected);
      console.log('**this.fb.control==>');
      console.log(this.fb.control);
      return this.fb.control(s);
      // return this.fb.group({
      //   selected: [s.selected],
      //   id: [s.id]
      // }
    });
    console.log('**arr===>');
    console.log(arr);

    // https://stackoverflow.com/questions/42184800/how-to-validate-formarray-length-in-angular2


    return this.fb.array(arr, TestValidators.selectOneOrMoreContaminants);
  }

  submit(value) {

    const f = Object.assign({}, value, {
      skills: value.skills.map((s, i) => {
      return {
        id: this.user.skills[i].id,
        selected: s
      };
    })
    });

     console.log(f);
  }



}
