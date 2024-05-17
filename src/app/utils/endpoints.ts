import { environment } from "../../environments/environment.development"; 
export const endpoints = { 
// *** Estudiantes *** 
agregarEstudiante: 
environment.serverURL.concat('/api/EstudianteControlador/agregarEstudiante'), 
actualizarEstudiante: 
environment.serverURL.concat('/api/EstudianteControlador/actualizarEstudiante/:idEstudiante'), 
eliminarEstudiante: 
environment.serverURL.concat('/api/EstudianteControlador/eliminarEstudiante/:idEstudiante'), 
obtenerEstudiantePorID: 
environment.serverURL.concat('/api/EstudianteControlador/Estudiantes/:idEstudiante'), 
obtenerEstudiantes: 
environment.serverURL.concat('/api/EstudianteControlador/consultarEstudiantes') 
// *********************** 
}; 