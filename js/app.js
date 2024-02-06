
// console.log(document.title);
// document.title='INSISTO EN EL COLOR';
// console.log(document.title);
// console.log(document.head);
// console.log(document.all[11]);
// console.log(document.forms[0]);

/*const btn =  document.getElementById("agregar")
  const container = document.getElementById("container")
  
  btn.addEventListener("click", ()=>{
  
      let nombre = prompt("Escribe tu nombre")
      let tarea = prompt("Tu actividad")
  
  
  const newCard =  document.createElement("div")
  newCard.innerHTML= `
  <h2>Hola ${nombre}</h2>
  <p>${tarea}</p>
  `
  container.appendChild(newCard)
  })*/
    
   // Obtener el formulario y el campo de texto
   let formulario = document.getElementById('miFormulario');
   let campoDeTexto = document.getElementById('miCampoDeTexto');
   let campoDeTexto2 = document.getElementById('miCampoDeTexto2');
   let contenedorDatos = document.getElementById('datosDelFormulario');

   // Agregar un evento de escucha al envío del formulario
   formulario.addEventListener('submit', function(event) {
       // Prevenir el comportamiento por defecto del formulario (enviar a una página diferente)
       event.preventDefault();

       // Obtener el valor del campo de texto
       let valor1 = campoDeTexto.value;
       let valor2 = campoDeTexto2.value;
       
       // Guardar el nombre y actividad en localStorage
    localStorage.setItem("nombre", valor1);
    localStorage.setItem("actividad", valor2);
       
    // HTML 
       let parrafo1 = document.createElement('p');
       parrafo1.textContent = 'Nombre: ' + valor1;

       let parrafo2 = document.createElement('p');
       parrafo2.textContent = 'Actividad: ' + valor2;

       // Limpiar el contenido anterior del contenedor
       contenedorDatos.innerHTML = '';
       
       

        // Agregar los elementos al contenedor
        contenedorDatos.appendChild(parrafo1);
        contenedorDatos.appendChild(parrafo2);

        campoDeTexto.value = '';
       campoDeTexto2.value = '';
   });





       

       

//getElementById()
console.log(document.getElementById('header-title'))
let headerTitle = document.getElementById('header-title')

headerTitle.textContent='Insistir en el color';
console.log(headerTitle)
//let items = document.getElementsByClassName('list-group-item')
//mainTitle = 'Agregar color';
let items = document.getElementsByTagName('li')
console.log(items[0]);
// items[0].textContent='Amarillo';
// items[1].textContent='rojo';

//querySelector
let bajo = document.querySelector('#main-header')
bajo.style.borderBottom= 'solid 4px #ccc'

// let input = document.querySelector('input')
// input.value = 'Agrega Colores o lo que quieras...'

let submit = document.querySelector('input[type ="submit"]')
submit.value='Subir'

// let item = document.querySelectorAll('.list-group-item')
// item[1].style.color='red'
// console.log(items[3])

 var itemList = document.querySelector('#items')
 var main = itemList.parentNode;
main.style.backgroundColor = 'white'

let titulos = document.querySelectorAll('.title')
titulos[0].textContent='Agrega Colores o lo que quieras...'

/*let boton = document.getElementById("agregar");   //crear un boton en html
boton.addEventListener("click", function() {
    console.log("¡Hiciste clic en el botón!");
    alert("evento detectado, mira la consola")
  });*/

//agregar colores o elementos a la lista

    let form2 = document.getElementById('formAgregar')
    let lista = document.getElementById('items')
  
    main.addEventListener('submit', agregarItem);
  //evento click de la lista
  lista.addEventListener('click', eliminarItem)

    function agregarItem(e) {
      e.preventDefault();
      let newItem = document.getElementById('item').value;
      
      if (newItem.trim()!=''){
      let li = document.createElement('li');
      li.className = 'list-group-item';
      li.appendChild(document.createTextNode(newItem)); 
      lista.appendChild(li);

      // Verifica si el valor es "azul" y agrega el complementario
    if (newItem.toLowerCase() === 'azul') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es anaranjado'));
    }else if (newItem.toLowerCase() === 'rojo') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es verde'));
    } else if (newItem.toLowerCase() === 'amarillo') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es violeta'));
    }else if (newItem.toLowerCase() === 'anaranjado') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es azul'));
    } else if (newItem.toLowerCase() === 'verde') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es rojo'));
    }else if (newItem.toLowerCase() === 'violeta') {
      li.appendChild(document.createElement('br')); // Agrega un salto de línea
      li.appendChild(document.createTextNode('su complementario es amarillo'));
    }   
    else {
      // Manejar el caso donde newItem está vacío
      alert('Sugerencia: Ingresa un color primario o secundario.');
    }

      let boton = document.createElement('button')
      boton.className= 'btn btn-danger btn-sm float-right eliminar'
      boton.appendChild(document.createTextNode('x'))
      li.appendChild(boton)

      

       // Limpiar el campo de búsqueda después de agregar un elemento (puedes ajustar según tus necesidades)
      document.getElementById('item').value = '';
    }else {
      alert('Ingresa un elemento válido.');
    }
 
    }

    function eliminarItem(e){
        
        if(e.target.classList.contains('eliminar')){
            let li = e.target.parentElement;
            lista.removeChild(li);

        }
        

    }

    
    

    




