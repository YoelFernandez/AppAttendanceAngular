import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Cliente } from '../Models/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private endpoint = "client";

  constructor(private apiService: ApiService) { }
  
  
  getClients(): Observable<Cliente[]>{
  return this.apiService.getAll<Cliente>(`${this.endpoint}/listarDTO`);
  }

  getClientById(codClient: string): Observable<Cliente> {
    return this.apiService.getById<Cliente>(this.endpoint, codClient);
  }

  createClient(cliente: Cliente): Observable<Cliente> {
    return this.apiService.create(`${this.endpoint}/nuevoDTO`, cliente);
  }

  updateClient(cliente: Cliente, id:string): Observable<Cliente> {
    return this.apiService.update(`${this.endpoint}/actualizar`,id, cliente);
  }

  deleteClient(codCliente: string): Observable<Cliente> {
    return this.apiService.delete(this.endpoint, codCliente);
  }

}
  


