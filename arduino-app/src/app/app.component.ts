import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface StatusLed {
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arduino-app';

  public statusLed: Boolean = false;

  constructor( private http: HttpClient ) { }

  todosLosLed(): void {
    this.http.get( 'http://localhost:3434/allled' ).subscribe(
      (response: StatusLed) => {
        console.log('Respone: ', response.status);
        this.statusLed = response.status;
      }, (error) => {
        console.error('Error: ', error);
      }, () => { }
    );
  }


  singleLedA(): void {
    this.http.get( 'http://localhost:3434/ledA' ).subscribe(
      (response: StatusLed) => {
        console.log('Respone: ', response.status);
        this.statusLed = response.status;
      }, (error) => {
        console.error('Error: ', error);
      }, () => { }
    );
  }

  singleLedB(): void {
    this.http.get( 'http://localhost:3434/ledB' ).subscribe(
      (response: StatusLed) => {
        console.log('Respone: ', response.status);
        this.statusLed = response.status;
      }, (error) => {
        console.error('Error: ', error);
      }, () => { }
    );
  }

  singleLedC(): void {
    this.http.get( 'http://localhost:3434/ledC' ).subscribe(
      (response: StatusLed) => {
        console.log('Respone: ', response.status);
        this.statusLed = response.status;
      }, (error) => {
        console.error('Error: ', error);
      }, () => { }
    );
  }

  singleLedD(): void {
    this.http.get( 'http://localhost:3434/ledD' ).subscribe(
      (response: StatusLed) => {
        console.log('Respone: ', response.status);
        this.statusLed = response.status;
      }, (error) => {
        console.error('Error: ', error);
      }, () => { }
    );
  }


sendLove(_love: string): void {
  this.http.get( 'http://localhost:3434/love?msg=' + _love ).subscribe(
    (response: StatusLed) => {
      console.log('Respone: ', response.status);
    }, (error) => {
      console.error('Error: ', error);
    }, () => { }
  );

}



}
