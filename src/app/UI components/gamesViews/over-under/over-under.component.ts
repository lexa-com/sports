import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../gamesService/games.service';
import { SharedServiceService } from '../../../shared-service.service';

@Component({
  selector: 'app-over-under',
  templateUrl: './over-under.component.html',
  styleUrl: './over-under.component.css'
})
export class OverUnderComponent implements OnInit {

fixtures: any = [];
pickedDate: any;
  overGames: any[] = [];
  data: any[]=[];

constructor(
  private dataService: GamesService,
  private router: Router,
  private sharedService: SharedServiceService
  ) { }

ngOnInit(): void {
  this.setTodayDate()
  this.fetchGames()
}


fetchGames(){
this.sharedService.currentArray.subscribe((res)=>{
  this.data = res
this.overGames = res.filter(item => item.category === "3" && item.date == this.pickedDate)
this.fixtures = this.overGames
console.log(this.overGames)
})

}

onDateChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  const selectedDate = new Date(input.value);
  
  const formattedDate = this.formatDate(selectedDate);
  this.pickedDate = formattedDate
  this.fixtures = this.data.filter(item => item.date == formattedDate && item.category ==="3")
  console.log('Formatted date:', formattedDate);
}

formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

setTodayDate(): void {
  const today = new Date(); // Get today's date
  this.pickedDate = this.formatDate(today); // Format and set pickedDate
  console.log('Today\'s date formatted:', this.pickedDate); // Log today's date
}

getVerdictEmoji(verdict: string): string {
  switch (verdict) {
    case 'win':
      return '✅✅✅'; // Trophy emoji
    case 'lost':
      return '❌'; // Cross mark emoji
    case 'post':
      return 'postponed'; // Handshake emoji
    default:
      return '-'; // Scales emoji for unknown verdict
  }
}

}
