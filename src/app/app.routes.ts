import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObraFormComponent } from './Pantallas/obra-form/obra-form.component';
import { ClientComponent } from './Pantallas/client/client.component';
import { ClientFormComponent } from './Pantallas/client-form/client-form.component';
import { AuthFormComponent } from './Pantallas/auth-form/auth-form.component';
import { StorageComponent } from './Pantallas/storage/storage.component';
import { UploadFileComponent } from './Pantallas/upload-file/upload-file.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Pagina de inicio'
    },

    {
        path:'obras',
        component:ObraFormComponent,
        title:'ListaObras'
    },
    {
        path:'obra/:id',
        component:ObraFormComponent,
        title:'Forumlario de obras'
    },
    {   
        path:'client/:id',
        component:ClientFormComponent,
        title:'Forumlario de clientes'
    },

    {
        path:'client',
        component:ClientComponent,
        title:'Listado de clientes'
    },
    {   
        path:'auth',
        component:AuthFormComponent,
        title:'Forumlario inicio'
    },
    {   
        path:'storage',
        component:StorageComponent,
        title:'vista de imagenes'
    },
    {   
        path:'uploadStorage',
        component:UploadFileComponent,
        title:'subir imagen'
    },
    {
        path:'**',
        redirectTo:'',
       pathMatch:'full'
    }
];

