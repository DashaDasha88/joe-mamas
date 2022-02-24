import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public foodData: any;

  constructor(private service: OrderDetailsService) {}

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
