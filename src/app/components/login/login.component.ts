import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor() {
    // inicializacion del formulario
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))]),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
}
