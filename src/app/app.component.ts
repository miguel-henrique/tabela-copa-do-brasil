import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';
import { Time } from './models/Time';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Time = {} as Time;
  Times: Time[];
  

  constructor(private TimeService: TimeService) {}
  
  
  ngOnInit() {
    this.getTimes();
  }

  // Chama o serviço que obtém todos os Times
  getTimes() {
    this.TimeService.getTimes().subscribe((Times: Time[]) => {
      this.Times = Times;

    })

}


}
