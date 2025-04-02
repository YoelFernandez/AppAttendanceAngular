import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:8080"; // URL base

  constructor(private http: HttpClient) {}

  // Método genérico para obtener una lista de elementos
  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`);
  }

  // Método genérico para obtener un elemento por ID
  getById<T>(endpoint: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }

  // Método genérico para crear un elemento
  create<T>(endpoint: string, item: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, item);
  }

  // Método genérico para actualizar un elemento
  update<T>(endpoint: string, id:string, item: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, item);
  }

  // Método genérico para eliminar un elemento
  delete<T>(endpoint: string, id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
