import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  searchOpen: boolean = false;
  searchIcon : string = "search";
  
  openSearch(){
    if(this.searchOpen == false){
      this.searchOpen = true;
      this.searchIcon = "times"
    }
    else{
      this.searchOpen = false;
      this.searchIcon = "search"
    }
    
  }

}
