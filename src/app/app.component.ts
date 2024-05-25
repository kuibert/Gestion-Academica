import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudiantesService } from './services/estudiantes.service';
import { CarrerasService } from './services/carreras.service'; // Importa el servicio de carreras
import { GruposService } from './services/grupos.service';
import { MateriasService } from './services/materias.service';
import { ProfesoresService } from './services/profesores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestionAcademica';

  // Haciendo inyeccion de dependencia 
  private readonly estudiantesServices = inject(EstudiantesService);

  // Creando observable 
  estudiantes$ = this.estudiantesServices.obtenerEstudiantes();

  // Inyección de dependencia para CarrerasService
  private readonly carrerasServices = inject(CarrerasService);

  // Creación de observable para carreras
  carreras$ = this.carrerasServices.obtenerCarreras();

  // Inyección de dependencia para CarrerasService
  private readonly gruposService = inject(GruposService);

  // Creación de observable para carreras
  grupos$ = this.gruposService.obtenerGrupos();

  private readonly materiasService = inject(MateriasService);

  // Creación de observable para carreras
  materias$ = this.materiasService.obtenerMaterias();

  private readonly profesoresService = inject(ProfesoresService);

  // Creación de observable para carreras
  profesores$ = this.profesoresService.obtenerProfesores();

}
