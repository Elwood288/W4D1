import { Component, OnInit } from '@angular/core';
import { Ibeer } from '../Ibeer';
import { BeerService } from '../beer.service';
import {MatTableModule} from "@angular/material/table";
import { AuthService } from '../services/auth.service';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beerList: Ibeer[]= [];
  displayedColumns: string[] = ["name", "tagline", "first_brewed"]
  constructor(private BeerService: BeerService, private authService: AuthService, private router: Router) {

   }

  ngOnInit() {
    this.BeerService.getAll().subscribe(data=> (this.beerList = data));
    console.log(this.beerList);

  }

  logOut(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }

}
