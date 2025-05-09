import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-obra-form',
  imports: [],
  templateUrl: './obra-form.component.html',
  styleUrl: './obra-form.component.css'
})
export class ObraFormComponent implements OnInit {
   decodedUrl: string = '';  // ✅ Ahora es accesible en el HTML

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const encoded = this.route.snapshot.paramMap.get('imagenUrl');
    this.decodedUrl = decodeURIComponent(encoded ?? '');
    console.log('URL decodificada:', this.decodedUrl);
  }
}
