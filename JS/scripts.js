//Vlidación de formulario

//Variables
const nombreInput = document.querySelector('#nombre');//Siempre que uso querySelector tengo a disposición addEventListener
const emailInput = document.querySelector('#email');//Siempre que uso querySelector tengo a disposición addEventListener
const mensajeInput = document.querySelector('#mensaje');//Siempre que uso querySelector tengo a disposición addEventListener
const formulario = document.querySelector('.formulario'); //El "submit" debe estar asociado a un formulario, no al boton u otra cosa
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};
//Funciones
nombreInput.addEventListener('input', leerTexto)  //Con value, podemos recibir en la consola lo que el usuario escribe
emailInput.addEventListener('input', leerTexto)  //Con value, podemos recibir en la consola lo que el usuario escribe
mensajeInput.addEventListener('input', leerTexto)  //Con value, podemos recibir en la consola lo que el usuario escribe

    //El evento submit:
formulario.addEventListener('submit', (e) => {
    //En un formulario usamos submit. 
    e.preventDefault(); //Para que no se recarge la página
    
    //Validar el formulario: (Avisar si faltó llenar algo, etc) (Usando destructuring)
    const { nombre, email, mensaje } = datos;
    
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Corta la ejecución del código para que no envíe el formulario
    }

    mostrarAlerta('Mensaje enviado correctamente');
    // console.log(`Nombre: ${nombre}`);
    // console.log(`E-mail: ${email}`);
    // console.log(`Mensaje: ${mensaje}`);
    //Enviar el formulario:
    console.log('Enviando formulario');
});

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    formulario.appendChild(alerta);
    if (error) {
        alerta.classList.add('error');
        alerta.classList.add('cartel');
    } else {
        alerta.classList.add('exito');
        alerta.classList.add('cartel');
    }
        //Queremos que desaparezca despues de 5s
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value; //Con esto guardo el valor del campo dentro de los elementos del objeto seegún corresponda
    
    console.log(e.target);

    console.log(datos);
}
