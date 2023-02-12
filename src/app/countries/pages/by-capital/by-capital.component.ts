import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  public showError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(textToSearch: string) {

    this.showError = false;

    this.countryService.searchCountryByCapital(textToSearch)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          console.log(countries);
        },
        error: (error) => {
          this.showError = true
          this.countries = [];
        },
      });
  }

  suggestions(textToSearch: string) {
    console.log(textToSearch);

  }

}
