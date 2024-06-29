import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryModel} from "../../models/category.model";
import {TournamentModel} from "../../models/tournament.model";
import {TeamModel} from "../../models/team.model";

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css', './../../app.component.css']
})
export class DelegateComponent {
  statusSwitch: string;
  formTeam: FormGroup;
  category: CategoryModel[];
  tournaments: TournamentModel[];
  teams: TeamModel[];

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

    this.teams = [
      {
        id: 1,
        name: 'Dreamers FC',
        categoryId: 1,
        tournamentId: 1,
        abbreviation: 'DF'
      },
      {
        id: 2,
        name: 'Realeza Soacha',
        abbreviation: 'RS',
        tournamentId: 3,
        categoryId: 2
      }
    ];

    // inicializacion del formulario
    this.formTeam = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      abbreviation: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
      category: new FormControl('0', [Validators.required, Validators.min(1)]),
      tournament: new FormControl('0', [Validators.required, Validators.min(1)])
    });
  }

  saveTeam(): void {
    let team: TeamModel = {
      id: this.teams.length,
      name: this.nameField?.value,
      abbreviation: this.abbreviationField?.value,
      categoryId: this.categoryField?.value,
      tournamentId: this.tournamentField?.value
    }

    this.teams.push(team);
    this.formTeam.reset();
    this.categoryField?.setValue('0');
    this.tournamentField?.setValue('0');
    console.log(this.teams);
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
