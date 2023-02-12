import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {
  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:  EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = 'Escriba aquí';
  
  debouncer: Subject<string> = new Subject();
  
  public textToSearch: string = '';
  
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(700))
      .subscribe(value => {
        this.onDebounce.emit( value );
      });
  }

  keyPressed(){
    this.debouncer.next(this.textToSearch);
  }

  search(){
    this.onEnter.emit(this.textToSearch);
  }


}
