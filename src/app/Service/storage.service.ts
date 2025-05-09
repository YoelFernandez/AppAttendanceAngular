import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  private endpoint = "storage";
  
  constructor(private apiService: ApiService) { }
  
  getAllImages():Observable<string[]>{
    return this.apiService.getAll<string>(`${this.endpoint}/listar`);
  }
}
