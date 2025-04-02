import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObraFormComponent } from './obra-form/obra-form.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client-form/client-form.component';

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
        path:'**',
        redirectTo:'',
       pathMatch:'full'
    }
];

