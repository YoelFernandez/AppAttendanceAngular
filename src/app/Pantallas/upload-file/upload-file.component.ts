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
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private storageService: StorageServiceService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.storageService.createStorage(formData).subscribe({
        next: (res) => console.log('Imagen subida con éxito', res),
        error: (err) => console.error('Error al subir la imagen', err)
      });
    }
  }
}