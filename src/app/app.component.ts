import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicConceptsAngular11';
  name:string = 'Kim Asiao';
  myName:string = 'Onika Kim Asiao Dumbrique';
  public titleStyles = {};
  public counter = 0;

  onSayHello(message:string){
    console.log(message);
    this.counter++;
    this.updateTitleStyles();
  }

  updateNameClasses(name:string){
    return {
      'error': name.length <=3,
      'warning': name.length > 3 && name.length <=6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }

  updateTitleStyles(){
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.counter < 3 ? 'green' : 'goldenrod'
    }
  }
}

