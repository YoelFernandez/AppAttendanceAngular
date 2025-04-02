import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Obra } from '../Models/obra';
import { ObraService } from '../Service/obra.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, CardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  obras: Obra[] = [];
  constructor(private obraService: ObraService){ }

  ngOnInit(): void {
      this.getAllObras();
  }

  getAllObras(){
    this.obraService.getObras().subscribe((data)=>{
      this.obras = data;
    });
  }
}
