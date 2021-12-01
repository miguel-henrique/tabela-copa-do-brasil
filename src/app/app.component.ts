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



      //Função que itera sobre Time.ultimos_jogos
      
    let ultimosJogos = this.Time.ultimos_jogos;
function ultimas([]){ 
  for (let i = 0; i < ultimas.length; i++) {
  if (ultimas[i] = "v") 
  {
console.log('vitória');
       } 
if (ultimas[i] = "e") 
  {
console.log('empate');
       }

if (ultimas[i] = "d")
  {
console.log('derrota'); 
       }  
   }

}

ultimas(ultimosJogos);
    })

}
}


