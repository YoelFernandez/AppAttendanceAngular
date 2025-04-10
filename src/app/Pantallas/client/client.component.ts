import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Models/client';
import { ClientService } from '../../Service/client.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [ButtonModule, CardModule, RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.clientService.getClients().subscribe((data) => {
      this.clientes = data;
    });
  }

  logURL(codCliente: string) {
    const url = `/client/${codCliente}`;
    console.log('Navegando a:', url);
  }


}
