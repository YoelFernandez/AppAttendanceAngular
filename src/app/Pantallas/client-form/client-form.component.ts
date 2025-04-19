import { Component, OnInit } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientService } from '../../Service/client.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-client-form',
  imports: [ToastModule, CardModule, InputTextModule, InputNumberModule, ReactiveFormsModule, FormsModule, ButtonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit{
  formClient!: FormGroup;
  isSaveInProgress:boolean= false;
  edit:boolean = false;

   constructor(
    private fc: FormBuilder,
    private clientService: ClientService,
    private activateRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router
   ){
    this.formClient = this.fc.group({
      codClient:[null],
      nombreCliente: ['', Validators.required],
      correoCliente: ['', Validators.required],
      telefonoCliente: ['', Validators.required],
    });

   }
  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    console.log("ID obtenido:", id); // Verificar qué ID se recibe

    if (id !== "new") {
      this.edit = true;
      this.getClientById(id!);
    }
  }

  getClientById(id: string) {
    this.clientService.getClientById(id).subscribe({
      next: (client) => {
        this.formClient.patchValue(client);
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cliente no encontrado' });
        this.router.navigateByUrl('/');
      }
    });
  }

  createClient(){
    if(this.formClient.invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No creado 1, Revise los campos e intente nuevamente' });
      return;
    }
    this.clientService.createClient(this.formClient.value).subscribe({
      next:()=>{
        this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Cliente creado con exito' });
        //this.router.navigateByUrl('/');

      },
      error:(error)=>{
        console.log('Error detectado:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No creado 2, Revise los cambios e intentelo nuevamente' });
      }
    });
  }


  updateClient(){
    if(this.formClient.invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No actualizado1, Revise los campos e intente nuevamente' });
      return;
    }
    this.clientService.updateClient(this.formClient.value, "1" ).subscribe({
      next:()=>{
        this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Cliente actualizado con exito' });
        this.router.navigateByUrl('/');

      },
      error:(error)=>{
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No actualizado 2, Revise los cambios e intentelo nuevamente' });
      }
    });
  }

}
