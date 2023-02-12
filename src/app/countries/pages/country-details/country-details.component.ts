import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,) {

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countryService.getCountryByCode(id)),
        //tap(console.log)
      )
      .subscribe(country => {
        this.country = country[0];
        console.log(this.country);
        

      }

      )
    // this.activatedRoute.params
    //   .subscribe( ( {id} ) => {
    //     this.countryService.getCountryByCode(id) 
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   });

  }

}
