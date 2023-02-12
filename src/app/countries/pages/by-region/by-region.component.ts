import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  public regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  public activeRegion: string = '';
  public countries: Country[] = [];
  public showError: boolean = false;


  constructor(private countryService: CountryService) { }

  setActiveRegion(region: string) {

    if(this.activeRegion===region) return;

    this.activeRegion = region;
    this.showError = false;
    this.countries = [];

    this.countryService.getCountriesByRegion(this.activeRegion)
      .subscribe({
        next: countries => {
          this.countries = countries;
        },
        error: error => {
          this.showError = true;
        }
      })
  }

}
