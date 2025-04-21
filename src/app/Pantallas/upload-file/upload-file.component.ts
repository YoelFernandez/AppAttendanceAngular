import { Component } from '@angular/core';
import { StorageServiceService } from '../../Service/storage.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-file',
  imports: [CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  selectedFiles: FileList | null = null;
  previewUrls: string[] = [];

  constructor(private storageService: StorageServiceService) {}

  // Seleccionar múltiples archivos
  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = input.files;
      this.previewUrls = [];

      // Leer los archivos seleccionados para mostrar una vista previa
      Array.from(this.selectedFiles).forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            this.previewUrls.push(reader.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  onUpload(): void {
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      Array.from(this.selectedFiles).forEach((file) => {
        const formData = new FormData();
        formData.append('file', file);
  
        this.storageService.createStorage(formData).subscribe({
          next: (res) => console.log(`Imagen ${file.name} subida con éxito`, res),
          error: (err) => console.error(`Error al subir la imagen ${file.name}`, err)
        });
      });
    }
  }
  
}