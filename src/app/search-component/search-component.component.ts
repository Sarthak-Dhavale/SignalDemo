import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent implements OnInit {

  cityList = signal<string[]>(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]);
  searchTerm =  signal('')
  filteredCities = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.cityList().filter(city => city.toLowerCase().includes(search));

  })

  searchForm = new FormGroup({
    search: new FormControl('')
  })

  ngOnInit(){

    this.searchForm.get('search')?.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      this.searchTerm.set(value ?? '');
    })
  }

}
