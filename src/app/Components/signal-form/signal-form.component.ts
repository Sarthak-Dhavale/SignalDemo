import { Component, signal, computed } from '@angular/core';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [],
  templateUrl: './signal-form.component.html',
  styleUrl: './signal-form.component.css'
})
export class SignalFormComponent {

  email = signal('');
  password = signal('');

  isEmailValid = computed(() =>
    this.email().includes('@')
  );

  isPasswordValid = computed(() =>
    this.password().length >= 6
  );

  isFormValid = computed(() =>
    this.isEmailValid() && this.isPasswordValid()
  );

  submit() {
    console.log({
      email: this.email(),
      password: this.password()
    });
  }

}
