import { HttpClient } from '@angular/common/http'; 
import { Injectable, inject } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { endpoints } from '../utils/endpoints'; 
@Injectable({ 
providedIn: 'root' 
}) 
export class MateriasService { 
private readonly http = inject(HttpClient); 
constructor() { } 
obtenerMaterias(): Observable<any>{ 
return this.http.get(endpoints.consultarMaterias); 
} 
}