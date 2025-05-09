import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Service/storage.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-storage',
  imports: [RouterModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent implements OnInit {
  imagenes: string[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    console.log("tratando de obtener las imagene1");

    this.getAllImagenes();
    console.log("tratando de obtener las imagene2");

  }

  getAllImagenes() {
    console.log("aqui1");
    this.storageService.getAllImages().subscribe({
      next: (data) => {
        this.imagenes = data;
        console.log(this.imagenes[0]);
        console.log("siu");
      },
      error: (err) => {
        console.error('Error al obtener las imágenes:', err);
      }

    });
  }

  encodeUrl(url: string): string {
    return encodeURIComponent(url);
  }


}
