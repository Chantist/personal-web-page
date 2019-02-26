import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = "schantillou@gmail.com"

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open("My email is copied to your clipboard",  ":)",
    {duration: 3000 , verticalPosition: 'top'});
  }


 copyToClipboard(){
      document.addEventListener('copy', (event: ClipboardEvent) => {
        event.preventDefault();
        let evt = event.clipboardData || window['clipboardData'];
        evt.setData('text/plain', (this.email));
        document.removeEventListener('copy', null);
      });
      document.execCommand('copy');

      this.openSnackBar();
    }
  
    ngOnInit() {
    }
}
