//VARIABLES
let nombre = "Cliente";
let numeroCursos = 0;
let total = 0;
//Nombres Cursos
let cursos = "";
let tituloCurso1 = "HTML";
let tituloCurso2 = "CSS";
let tituloCurso3 = "SaSS, Bootstrap, librerías y frameworks";
let tituloCurso4 = "Javascript";
let tituloCurso5 = "React";
let tituloCurso6 = "Node";
//Precio cursos
let precio1 = 150;
let precio2 = 150;
let precio3 = 100;
let precio4 = 250;
let precio5 = 200;
let precio6 = 400;

//FUNCIÓN DE SALUDO Y CONFIRMACIÓN DE NOMBRE
function saludar() {
    nombre = prompt("Bienvenido  a nuestra web de cursos.\n¿Cómo te llamas?");
    if (nombre == null) {
            nombre = "Cliente";
    }else {
        while (nombre == "") {
            let confirmacion = confirm("No ha indicado su nombre. ¿Prefiere seguir en el anonimato?");
    
            if (confirmacion) {
                nombre = "Cliente";
            } else {
                nombre = prompt("¿Cómo te llamas?")
            }
        }
    }
}

//FUNCION PARA MOSTRAR LOS CURSOS DISPONIBLES
function mostrarCursos() {
    alert("Nuestros cursos son los siguientes: \n\t" + tituloCurso1 + ". Precio: " + precio1 + " €.\n\t" + tituloCurso2 + ". Precio: " + precio2 + " €.\n\t" + tituloCurso3 + ". Precio: " + precio3 + " €.\n\t" + tituloCurso4 + ". Precio: " + precio4 + " €.\n\t" + tituloCurso5 + ". Precio: " + precio5 + " €.\n\t" + tituloCurso6 + ". Precio: " + precio6 + " €.\n\t");
}

//FUNCIÓN PARA EFECTUAR LA COMPRA DE LOS CURSOS
function comprar() {
    //VARIABLES
    let repetir = true;

    //Repeticiones
    let curso1 = false;
    let curso2 = false;
    let curso3 = false;
    let curso4 = false;
    let curso5 = false;
    let curso6 = false;

    //Total
    let curso = parseInt(prompt("Añada un curso a la cesta o pulse 0 para finalizar la compra (Pulse el número correspondiente)\n\t1. " +  tituloCurso1 + "\n\t2. " +  tituloCurso2 + "\n\t3. " +  tituloCurso3 + "\n\t4. " +  tituloCurso4 + "\n\t5. " +  tituloCurso5 + "\n\t6. " +  tituloCurso6 + "\n\t0. Finalizar\n\n"));

    //Bucle
    while(repetir) {
        if (curso >= 0 && curso <=6) {
            console.log("curso entre 0 y 6");
            
            //Salir del programa si se pulsa 0
            if (curso != 0) {
                //Swich para la realización de las operaciones
                switch(curso) {
                    case 1:
                        if (curso1 === false) {
                            cursos += "\t" + tituloCurso1 + "\n";
                            total += precio1;
                            numeroCursos++;
                            curso1 = true;
                            alert("Ha añadido el curso " + tituloCurso1 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso1 + " ya se encuentra en su cesta");
                        }
                        break;
                    case 2:
                        if (curso2 === false) {
                            cursos += "\t" + tituloCurso2 + "\n";
                            total += precio2;
                            numeroCursos++;
                            curso2 = true;
                            alert("Ha añadido el curso " + tituloCurso2 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso2 + " ya se encuentra en su cesta");
                        }
                        break;
                    case 3:
                        if (curso3 === false) {
                            cursos += "\t" + tituloCurso3 + "\n";
                            total += precio3;
                            numeroCursos++;
                            curso3 = true;
                            alert("Ha añadido el curso " + tituloCurso3 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso3 + " ya se encuentra en su cesta");
                        }
                        break;
                    case 4:
                        if (curso4 === false) {
                            cursos += "\t" + tituloCurso4 + "\n";
                            total += precio4;
                            numeroCursos++;
                            curso4 = true;
                            alert("Ha añadido el curso " + tituloCurso4 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso4 + " ya se encuentra en su cesta");
                        }
                        break;
                    case 5:
                        if (curso5 === false) {
                            cursos += "\t" + tituloCurso5 + "\n";
                            total += precio5;
                            numeroCursos++;
                            curso5 = true;
                            alert("Ha añadido el curso " + tituloCurso5 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso5 + " ya se encuentra en su cesta");
                        }
                        break;
                    case 6:
                        if (curso6 === false) {
                            cursos += "\t" +tituloCurso6 + "\n";
                            total += precio6;
                            numeroCursos++;
                            curso6 = true;
                            alert("Ha añadido el curso " + tituloCurso6 + " a la cesta");
                        } else {
                            alert("El curso de " + tituloCurso6 + " ya se encuentra en su cesta");
                        }
                        break;   
                    default:
                        alert("Ha ocurrido un error");
                        break;
                }

                curso = parseInt(prompt("Seleccione una opción si quiere añadir a su carrito otro curso o pulse 0 para finalizar la compra\n\t1. " +  tituloCurso1 + "\n\t2. " +  tituloCurso2 + "\n\t3. " +  tituloCurso3 + "\n\t4. " +  tituloCurso4 + "\n\t5. " +  tituloCurso5 + "\n\t6. " +  tituloCurso6 + "\n\t0. Finalizar\n\n"));

            } else {
            //Salir del programa si la opción seleccionada es 0
            alert("Has seleccionado finalizar compra");
            if(cursos != "") {
                alert ("En tu cesta hay " + numeroCursos + " cursos:\n" + cursos);
            } else {
                alert("No ha seleccionado ningún curso");
            }
            repetir = false;
            }
        } else {
            //Se vuelve a pedir una opción si no se ha insertado una opción válida
            alert("No ha insertado una opción válida");
            curso = parseInt(prompt("Añada un curso a la cesta o pulse 0 para finalizar la compra\n\t1. " +  tituloCurso1 + "\n\t2. " +  tituloCurso2 + "\n\t3. " +  tituloCurso3 + "\n\t4. " +  tituloCurso4 + "\n\t5. " +  tituloCurso5 + "\n\t6. " +  tituloCurso6 + "\n\t0. Finalizar\n\n"));
        }
    }
}

function finalizarCompra(total, nombre) {
    if (total != 0) {
        let confirmacion = confirm("El total a pagar es: " + total + " €. ¿Desea confirmar la compra? ");
        if (confirmacion) {
            alert("Pago efectuado\nHasta la próxima " + nombre);
        } else {
            alert("Se ha cancelado la compra\nHasta la próxima " + nombre);
        }
    } else {
        alert("Hasta la próxima " + nombre);
    }

}


//Desarrollo del código

//Variables
let opcion;
let repetir = true;

//CÓDIGO
saludar();
opcion = parseInt(prompt("¿Qué desea hacer? \n1. Conocer nuestros cursos \n2. Comprar un curso \n3. Salir del programa"));

while(repetir) {
    if (opcion >= 1 && opcion <= 3) {
        if (opcion === 1) {
            console.log("Llamada a mostrar cursos")
            mostrarCursos();
            opcion = parseInt(prompt("¿Qué desea hacer? \n1. Conocer nuestros cursos \n2. Comprar un curso \n3. Salir del programa"));
        } else if  (opcion === 2){
            comprar();
            finalizarCompra(total, nombre);
            repetir = false;
        } else {
            alert(nombre + ", esperamos que hayas disfrutado de nuestra web. ¡Hasta la próxima!");
            repetir = false;
        }


    } else {
        alert("Su opción no es válida");
        opcion = parseInt(prompt("¿Qué desea hacer? \n1. Conocer nuestros cursos \n2. Comprar un curso \n3. Salir del programa"));
    }
}


//finalizarCompra(comprar(), saludar());


