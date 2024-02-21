import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successfull',
  templateUrl: './successfull.component.html',
  styleUrls: ['./successfull.component.css']
})
export class SuccessfullComponent implements OnInit {

   randomNumber = Math.floor(Math.random() * 99999)
   date = new Date().toDateString()

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToHome(){
    this.router.navigate(['/'])
  }

}
