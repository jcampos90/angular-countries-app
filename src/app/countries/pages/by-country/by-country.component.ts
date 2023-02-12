import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  public showError: boolean = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  public search(textToSearch: string) {

    this.showError = false;
    this.suggestedCountries=[];

    this.countryService.searchCountryByName(textToSearch)
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

  public suggestions(textToSearch: string) {
    this.showError = false;

    this.countryService.searchCountryByName(textToSearch)
      .subscribe({
        next:countries => this.suggestedCountries=countries.splice(0,5),
        error: err => this.suggestedCountries=[]
      })
  }



}
