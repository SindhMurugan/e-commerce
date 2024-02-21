import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(form:any){
    console.log("oooooooooo" , form)
    this.router.navigate(['/sucessfull'])
  }

  goBack(){
    this.router.navigate(['/sale'])
  }

}
