import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-autocomplete';
  formControl = new FormControl();
  autoFilter: Observable<string[]>;
  Items: string[] = ['Japan', 'Germany', 'Switzerland', 'Australia', 'Austria', 'Norway', 'Finland'];

  ngOnInit(): void { 
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this.mat_filter(value))
    );    
  }

  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Items.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
