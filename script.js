const labels = document.querySelectorAll('.form-control label')
/*contante que llama a las clases from-control y a los label dentro
del mismo */

labels.forEach(label => {
    label.innerHTML = label.innerText
    /*reemplaza la sintaxis HTML del elemento por la nueva */
    /*establece o devuelve el contenido de texto del nodo especificado y todos sus descendientes. */

    /*remplazame loq ue tengo en el html por el dato que te proporciono aqui */
        .split('')
        /*divide un objeto de tipo String en un array  */
        /*el split va a tomar el texto email y va a separa sus letras */
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        /*se genera un retraso en la trasicion de cada letra
        cada 50mlisiegundos  se  ejecutan los estilos del span en cada una de las letras*/
        /*crea un nuevo array con los resultados de la llamada a la función indicada  */
        
        .join('')
        /*une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena
        y devuelve esta cadena.*/
})