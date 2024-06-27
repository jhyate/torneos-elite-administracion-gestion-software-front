import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeDocumentModel} from "../../models/typeDocument.model";
import {EpsModel} from "../../models/eps.model";
import {PlayerModel} from "../../models/player.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css', './../../app.component.css']
})
export class TeamComponent {

  statusSwitch: string;
  formPlayer: FormGroup;
  typesDocument: TypeDocumentModel[];
  eps: EpsModel[];
  size: string[];
  players: PlayerModel[];
  team: string;

  constructor() {
    this.team = 'Realeza FC';
    this.statusSwitch = 'create';

    this.typesDocument = [
      {
        id: 1,
        abbreviation: 'CC',
        description: 'Cédula de ciudadanía'
      },
      {
        id: 2,
        abbreviation: 'TI',
        description: 'Tarjeta de identidad'
      }
    ];

    this.eps = [
      {
        id: 1,
        name: 'COOSALUD EPS-S'
      },
      {
        id: 2,
        name: 'NUEVA EPS'
      },
      {
        id: 3,
        name: 'MUTUAL SER'
      },
      {
        id: 4,
        name: 'ALIANSALUD EPS'
      },
      {
        id: 5,
        name: 'EPS SANITAS'
      }
    ];

    this.size = [
      'S',
      'M',
      'L',
      'XL'
    ];

    this.players = [{
      id: 0,
      name: "Jose",
      lastName: "Yate",
      date: "1997-06-22",
      typeDocument: 1,
      document: 1012444080,
      eps: 4,
      size: "L",
      number: 23
    }, {
      id: 1,
      name: "Camilo",
      lastName: "Martinez",
      date: "1996-12-30",
      typeDocument: 1,
      document: 1012456798,
      eps: 5,
      size: "M",
      number: 10
    }];

    // inicializacion del formulario
    this.formPlayer = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      typeDocument: new FormControl('0', [Validators.required, Validators.min(1)]),
      document: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[0-9]+$')), Validators.minLength(8)]),
      date: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^\\d{4}-\\d{2}-\\d{2}$'))]),
      eps: new FormControl('0', [Validators.required, Validators.min(1)]),
      size: new FormControl('0', [Validators.required, Validators.min(1)]),
      number: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[0-9]+$')), Validators.minLength(1), Validators.maxLength(2)]),
    });
  }

  setStatusSwitch(status: string): void {
    this.statusSwitch = status;
  }

  savePlayer(): void {
    let player: PlayerModel = {
      id: this.players.length,
      name: this.nameField?.value,
      lastName: this.lastNameField?.value,
      date: this.dateField?.value,
      typeDocument: this.typeDocumentField?.value,
      document: this.documentField?.value,
      eps: this.epsField?.value,
      size: this.sizeField?.value,
      number: this.numberField?.value
    };

    this.players.push(player);
    this.formPlayer.reset();
    this.typeDocumentField?.setValue('0');
    this.epsField?.setValue('0');
    this.sizeField?.setValue('0');
    console.log(this.players);
  }

  getNameEps(idEps: number): string {
    let eps: EpsModel | undefined = this.eps.find(item => item.id == idEps);
    return eps !== undefined ? eps.name : ' ';
  }

  getTypeDocument(typeDocument: number): string {
    let type: TypeDocumentModel | undefined = this.typesDocument.find(item => item.id == typeDocument);
    return type !== undefined ? type.abbreviation : ' ';
  }

  get nameField() {
    return this.formPlayer.get('name');
  }

  get lastNameField() {
    return this.formPlayer.get('lastName');
  }

  get typeDocumentField() {
    return this.formPlayer.get('typeDocument');
  }

  get documentField() {
    return this.formPlayer.get('document');
  }

  get dateField() {
    return this.formPlayer.get('date');
  }

  get epsField() {
    return this.formPlayer.get('eps');
  }

  get sizeField() {
    return this.formPlayer.get('size');
  }

  get numberField() {
    return this.formPlayer.get('number');
  }
}
