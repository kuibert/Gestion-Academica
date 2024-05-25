import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//import { Observable } from 'rxjs';
import { Carrera } from '../Interfaces/carrera.interface';
import { endpoints } from '../utils/endpoints';

@Injectable({
    providedIn: 'root'
})

export class CarrerasService {

    private readonly http = inject(HttpClient);

    constructor() { }

    obtenerCarreras() {

        return this.http.get<Carrera[]>(endpoints.obtenerCarreras);
    }
} 