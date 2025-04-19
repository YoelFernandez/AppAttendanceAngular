import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private endpoint = "storage"
  constructor(private apiService:ApiService) { }

  createStorage(formData: FormData): Observable<any> {
    return this.apiService.create<any>(`${this.endpoint}/upload`, formData);
  }

  
}
