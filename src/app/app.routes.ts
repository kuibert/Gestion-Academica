import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AgregarEstudianteComponent } from './estudiantes/agregar-estudiante/agregar-estudiante.component';
import { CarrerasComponent } from './carreras/carreras.component'; // Importar el nuevo componente
import { GruposComponent } from './grupos/grupos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';

export const routes: Routes = [
    { path: '', component: EstudiantesComponent, pathMatch: 'full' }, // Ruta por defecto
    { path:'agregarEstudiante', component: AgregarEstudianteComponent}, 
    { path:'agregarEstudiante/:idEstudiante', component: AgregarEstudianteComponent}, 

    { path: 'Carreras', component: CarrerasComponent }, // Nueva ruta para Carreras
    { path: 'Grupos', component: GruposComponent },
    { path: 'Materias', component: MateriasComponent },
    { path: 'Profesores', component: ProfesoresComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Rutas no existentes

];
