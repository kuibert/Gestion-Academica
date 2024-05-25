import { Component, inject } from '@angular/core';
import { GruposService } from '../services/grupos.service'; // Cambiar el servicio
import { CommonModule } from '@angular/common';
import { Grupo } from '../Interfaces/grupo.interface'; // Cambiar la interfaz

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'] // Asegúrate de que este archivo exista
})
export class GruposComponent {

  // Inyección de dependencia
  private readonly gruposService = inject(GruposService);
  public lstGrupos: Grupo[];

  constructor() {
    this.lstGrupos = [];
    this.getAllGrupos();
  }

  getAllGrupos() {
    this.gruposService.obtenerGrupos().subscribe({
      // Se evalúa que la respuesta del endpoint sea exitosa
      next: (temp) => {
        // Se asigna la lista al arreglo anteriormente descrito
        this.lstGrupos = temp;
      },
      // En caso de error
      error: (err) => {
        console.log("No se pudo obtener información");
      }
    });
  }
}
