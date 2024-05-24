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
        environment.serverURL.concat('/api/EstudianteControlador/consultarEstudiantes'),

    // *** Carreras *** 
    agregarCarrera:
        environment.serverURL.concat('/api/carreras/agregarCarrera'),
    actualizarCarrera:
        environment.serverURL.concat('/api/carreras/actualizarCarrera/:idCarrera'),
    eliminarCarrera:
        environment.serverURL.concat('/api/carreras/eliminarCarrera/:idCarrera'),
    obtenerCarreraPorID:
        environment.serverURL.concat('/api/carreras/Carreras/:idCarrera'),
    obtenerCarreras:
        environment.serverURL.concat('/api/carreras/consultarCarreras'),
    // *********************** 

    // *** Grupos *** 
    agregarGrupo:
        environment.serverURL.concat('/api/grupos/agregarGrupo'),
    actualizarGrupo:
        environment.serverURL.concat('/api/grupos/actualizarGrupo/:idGrupo'),
    eliminarGrupo:
        environment.serverURL.concat('/api/grupos/eliminarGrupo/:idGrupo'),
    consultarGrupos:
        environment.serverURL.concat('/api/grupos/consultarGrupos'),
    consultarGrupoPorID:
        environment.serverURL.concat('/api/grupos/consultarGrupoPorID/:idGrupos'),
    // *********************** 

    // *** Materias *** 
    agregarMateria:
        environment.serverURL.concat('/api/materias/agregarMateria'),
    actualizarMateria:
        environment.serverURL.concat('/api/materias/actualizarMateria/:idMateria'),
    eliminarMateria:
        environment.serverURL.concat('/api/materias/eliminarMateria/:idMateria'),
    consultarMaterias:
        environment.serverURL.concat('/api/materias/consultarMaterias'),
    consultarMateriaPorID:
        environment.serverURL.concat('/api/materias/consultarMateriaPorID/:idMateria'),

    // *** Profesores *** 
    agregarProfesor:
        environment.serverURL.concat('/api/profesores/agregarProfesor'),
    actualizarProfesor:
        environment.serverURL.concat('/api/profesores/actualizarProfesor/:idProfesor'),
    eliminarProfesor:
        environment.serverURL.concat('/api/profesores/eliminarProfesor/:idProfesor'),
    consultarProfesores:
        environment.serverURL.concat('/api/profesores/consultarProfesores'),
    consultarProfesorPorID:
        environment.serverURL.concat('/api/profesores/consultarProfesorPorID/:idProfesor'),
};
