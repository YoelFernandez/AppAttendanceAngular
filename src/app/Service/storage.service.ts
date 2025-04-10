import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private endpoint = "storage";
  
  constructor(private apiService: ApiService) { }
  
  getAllImages():Observable<String[]>{
    console.log("aqui en el storage.service.ts")
    return this.apiService.getAll<String>(`${this.endpoint}/listar`);
  }
}
