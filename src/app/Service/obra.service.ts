import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obra } from '../Models/obra';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  private endpoint = "obra";

  constructor(private apiService: ApiService) {}

  getObras():Observable<Obra[]>{
    return this.apiService.getAll<Obra>(`${this.endpoint}/listarDTO`);
  }

  getObraById(codObra: string): Observable<Obra> {
    return this.apiService.getById<Obra>(this.endpoint, codObra);
  }

  createObra(obra: Obra): Observable<Obra> {
    return this.apiService.create(this.endpoint, obra);
  }

  updateObra(obra: Obra, id:string): Observable<Obra> {
    return this.apiService.update(this.endpoint, id, obra);
  }

  deleteObra(codObra: string): Observable<Obra> {
    return this.apiService.delete(this.endpoint, codObra);
  }


}
