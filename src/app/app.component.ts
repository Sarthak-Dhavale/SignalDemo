import { Component, computed, Signal, WritableSignal, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SignalFormComponent } from './Components/signal-form/signal-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchComponentComponent,SignalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    effect( () => {
      console.log(`Count value is: ${this.count()}`)
      console.log(`Double Count value is: ${this.doubleCount()}`)
    })
  }

  // count = signal(10);
  count : WritableSignal<number> = signal(10);
  doubleCount : Signal<number> = computed( () => this.count() * 2);

  updateCount(){
    this.count.update( (value) => value  + 1);
  }

 
  // increment(){
  //   this.count.set(this.count() + 1)
  // }

  // decrement(){
  //   this.count.set(this.count() -1 )
  // }

  // updateValue(){
  //   this.count.update( value => value + 1);
  // }
}
