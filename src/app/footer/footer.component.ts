import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
data1 ="http://www.linkedin.com/in/syshellechantilou"
data2= "http://www.github.com/chantist"
  data3 ="http://www.twitter.com/chantist1"
  constructor() { }

  ngOnInit() {
  }

}
