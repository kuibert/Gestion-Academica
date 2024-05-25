import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
import { Materia } from '../Interfaces/materia.interface';

@Injectable({
    providedIn: 'root'
})

export class MateriasService {
    private readonly http = inject(HttpClient);

    constructor() { }

    obtenerMaterias() {
        return this.http.get<Materia[]>(endpoints.consultarMaterias);
    }
}