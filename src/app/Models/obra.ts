import { Cliente } from "./client";
import { Servicio } from "./service";



export interface Obra {
    codObra: string;
    abreviatura: string;
    nombreProyecto: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
    montoContratado: number;
    adicionales: string;
    urlImage?: string | null;
    cliente: Cliente;
    servicio: Servicio;
}
