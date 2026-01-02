import { Component, signal } from '@angular/core';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [Field],
  templateUrl: './signal-form.component.html',
  styleUrl: './signal-form.component.css'
})
export class SignalFormComponent {

  loginModel  = signal<LoginData>({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel)

}
