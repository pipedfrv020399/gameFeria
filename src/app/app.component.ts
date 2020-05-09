import { Component } from '@angular/core';
import { cuestions } from './cuestions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public objcuestions: any[] = cuestions;
       
  public itemshow;
  public start = false;
  public points  = 0;
  public tried  = 0;

  getItems() {
    return this.objcuestions.filter((item) => item.id === this.itemshow);
  }

  startGame(){
    this.start = true;
    this.points = 0;
    this.itemshow = 1;
    this.tried += 1;
  }

  validateAnswer(awnser: any){
    if (awnser) {
      this.points += 10;
    }
    if (this.itemshow == 10){
      this.start = false;
    }
    this.itemshow +=1;      
  }
}
