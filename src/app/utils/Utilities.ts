/* Este funcion recibe como parametro la respuesta error del backend */ 
/* Y evalua el estado y los errores */ 
export function parsearErroresAPI(response: any): string[] { 
    const resultado: string[] = []; 
   
    if (!response) {
        resultado.push('No se recibió respuesta del servidor');
        return resultado;
      }

    if (response.status === 500){ // En caso de que el servidor este dando problemas. 
      resultado.push('Ha ocurrido un error en el servidor. Favor intentar más tarde'); 
      return resultado; 
    } 
   
    
  if (response.error) {
    if (typeof response.error === 'string') {
      resultado.push(response.error);
    } else if (response.error.errors) {
      const mapaErrores = response.error.errors;
      const entradas = Object.entries(mapaErrores);
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0]; // nombre del campo
        arreglo[1].forEach((mensajeError: any) => {
          resultado.push(`${campo}: ${mensajeError}`);
        });
      });
    } else {
      resultado.push('Error desconocido en la respuesta del servidor');
    }
  } else {
    resultado.push('Respuesta del servidor sin error pero no contiene detalles');
  }

  return resultado;
}