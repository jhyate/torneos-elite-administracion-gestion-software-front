import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VisibilityComponentsService} from "../../services/visibility.components.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../app.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;

  constructor(private visibilityComponentsService: VisibilityComponentsService) {
    // se oculta nav y footer
    this.visibilityComponentsService.toggleNavVisibility(false);
    this.visibilityComponentsService.toggleFooterVisibility(false);

    // inicializacion del formulario
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // destroy de nav y footer
    this.visibilityComponentsService.toggleFooterVisibility(true);
    this.visibilityComponentsService.toggleNavVisibility(true);
  }

  get emailField() {
    return this.formLogin.get('email');
  }

  get passwordField() {
    return this.formLogin.get('password');
  }
}
