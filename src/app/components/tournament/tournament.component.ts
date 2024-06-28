import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryModel} from "../../models/category.model";
import {TypeTournamentModel} from "../../models/typeTournament.model";
import {TournamentModel} from "../../models/tournament.model";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css', './../../app.component.css']
})
export class TournamentComponent {

  formTournament: FormGroup;
  statusSwitch: string;
  category: CategoryModel[];
  typesTournament: TypeTournamentModel[];
  tournaments: TournamentModel[];

  constructor() {
    this.statusSwitch = 'create';

    this.category = [
      {
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

    this.typesTournament = [
      {
        id: 1,
        type: 11,
        description: 'Futbol 11'
      },
      {
        id: 2,
        type: 8,
        description: 'Futbol 8'
      },
      {
        id: 3,
        type: 5,
        description: 'Microfutbol'
      }
    ];

    this.tournaments = [
      {
        id: 1,
        name: 'Futbol 11',
        initialDate: '2024-06-10',
        endDate: '2024-08-20',
        categoryId: 1,
        typeId: 1,
        prize: 5500000,
        inscription: 550000,
        arbitration: 195000,
        firstPlacePercentage: 70,
        secondPlacePercentage: 20,
        thirdPlacePercentage: 10,
        fourthPlaceCent: true,
        numberOfParticipants: 32
      },
      {
        id: 2,
        name: 'Futbol 8',
        initialDate: '2024-08-01',
        endDate: '2024-11-01',
        categoryId: 2,
        typeId: 2,
        prize: 4000000,
        inscription: 485000,
        arbitration: 95000,
        firstPlacePercentage: 70,
        secondPlacePercentage: 30,
        thirdPlacePercentage: 0,
        fourthPlaceCent: false,
        numberOfParticipants: 24
      },
      {
        id: 3,
        name: 'Microfutbol',
        initialDate: '2024-08-01',
        endDate: '2024-11-01',
        categoryId: 3,
        typeId: 1,
        prize: 3500000,
        inscription: 120000,
        arbitration: 40000,
        firstPlacePercentage: 70,
        secondPlacePercentage: 25,
        thirdPlacePercentage: 5,
        fourthPlaceCent: true,
        numberOfParticipants: 24
      }
    ];

    // inicializacion del formulario
    this.formTournament = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl('0', [Validators.required, Validators.min(1)]),
      type: new FormControl('0', [Validators.required, Validators.min(1)]),
      prize: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('\\$?\\s?(\\d{1,3}(?:\\.\\d{3})*|\\d+)(,\\d{2})?')), Validators.minLength(6)]),
      initialDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      arbitration:  new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('\\$?\\s?(\\d{1,3}(?:\\.\\d{3})*|\\d+)(,\\d{2})?')), Validators.minLength(5)]),
      inscription: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('\\$?\\s?(\\d{1,3}(?:\\.\\d{3})*|\\d+)(,\\d{2})?')), Validators.minLength(6)]),
    });
  }

  setStatusSwitch(status: string): void {
    this.statusSwitch = status;
  }

  saveTournament(): void {

  }

  get nameField() {
    return this.formTournament.get('name');
  }

  get categoryField() {
    return this.formTournament.get('category');
  }

  get typeField() {
    return this.formTournament.get('type');
  }

  get prizeField() {
    return this.formTournament.get('prize');
  }

  get initialDateField() {
    return this.formTournament.get('initialDate');
  }

  get endDateField() {
    return this.formTournament.get('endDate');
  }

  get arbitrationField() {
    return this.formTournament.get('arbitration');
  }

  get inscriptionField() {
    return this.formTournament.get('inscription');
  }
}
