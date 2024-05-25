import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
import { Profesores } from '../Interfaces/Profesores.interface'; 

@Injectable({
    providedIn: 'root'
})

export class ProfesoresService {
    private readonly http = inject(HttpClient);

    constructor() { }

    obtenerProfesores() {
        return this.http.get<Profesores[]>(endpoints.consultarProfesores);
    }
}