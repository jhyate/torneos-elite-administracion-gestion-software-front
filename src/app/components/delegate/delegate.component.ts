import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css', './../../app.component.css']
})
export class DelegateComponent {
  statusSwitch: string;
  formTeam: FormGroup;
  category: any[];
  tournaments: any[];

  constructor() {
    this.statusSwitch = 'create';
    this.category = [{
      id: 1,
      category: 'Unica'
    },
      {
        id: 2,
        category: 'Veteranos'
      },
      {
        id: 3,
        category: '2013 - 2014'
      },
      {
        id: 4,
        category: '2015 - 2016'
      },
      {
        id: 4,
        category: '2017 - 2018'
      }];

    this.tournaments = [{
      id: 1,
      tournament: 'Futbol 11'
    },{
      id: 2,
      tournament: 'Futbol 8'
    },{
      id: 3,
      tournament: 'Microfutbol'
    }];

    // inicializacion del formulario
    this.formTeam = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      abbreviation: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
      category: new FormControl('0', [Validators.required, Validators.min(1)]),
      tournament: new FormControl('0', [Validators.required, Validators.min(1)])
    });
  }

  setStatusSwitch(status: string): void {
    this.statusSwitch = status;
  }

  get nameField() {
    return this.formTeam.get('name');
  }

  get abbreviationField() {
    return this.formTeam.get('abbreviation');
  }

  get categoryField() {
    return this.formTeam.get('category');
  }

  get tournamentField() {
    return this.formTeam.get('tournament');
  }
}
