import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypesDocumentModel} from "../../models/typesDocument.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../app.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  typesDocument: TypesDocumentModel[];

  constructor() {
    // inicializacion del formulario
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      typeDocument: new FormControl('0', [Validators.required, Validators.min(1)]),
      document: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[0-9]+$')), Validators.minLength(8)]),
      phone: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[0-9]+$')), Validators.minLength(7)]),
      email: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

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
    ]
  }

  ngOnInit(): void {
  }
}
