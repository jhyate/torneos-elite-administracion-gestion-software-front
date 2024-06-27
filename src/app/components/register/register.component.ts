import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeDocumentModel} from "../../models/typeDocument.model";
import {VisibilityComponentsService} from "../../services/visibility.components.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../app.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  formRegister: FormGroup;
  typesDocument: TypeDocumentModel[];

  constructor(private visibilityComponentsService: VisibilityComponentsService) {
    // se oculta nav y footer
    this.visibilityComponentsService.toggleNavVisibility(false);
    this.visibilityComponentsService.toggleFooterVisibility(false);

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
    ];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // destroy de nav y footer
    this.visibilityComponentsService.toggleFooterVisibility(true);
    this.visibilityComponentsService.toggleNavVisibility(true);
  }

  get nameField() {
    return this.formRegister.get('name');
  }

  get lastNameField() {
    return this.formRegister.get('lastName');
  }

  get typeDocumentField() {
    return this.formRegister.get('typeDocument');
  }

  get documentField() {
    return this.formRegister.get('document');
  }

  get phoneField() {
    return this.formRegister.get('phone');
  }

  get emailField() {
    return this.formRegister.get('email');
  }

  get passwordField() {
    return this.formRegister.get('password');
  }
}
