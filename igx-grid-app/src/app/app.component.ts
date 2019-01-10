import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'igx-grid-app';
  localData: any = [];

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.localData.push({ id: i, name: `name ${i}`, location: 'Osaka' });
    }
  }
}
