const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];

// Constantes de DOM 
const button = document.querySelector('#boton');
const total = document.querySelector('#total');
const dato = document.querySelector('.propiedades');

//Funcion que almacena informacion que se cambiara en HTML
function cardsHTML(atributo) {
    return (`              
        <div class="propiedad">  
        <div class="img" style="background-image: url(${atributo.src})"></div>
        <section>
            <h5>${atributo.name}</h5>
            <div class="d-flex justify-content-between">
                <p>Cuartos: ${atributo.rooms}</p>
                <p>Metros: ${atributo.m}</p>
            </div>
            <p class="my-3">${atributo.description}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
      </div>`);
};

// Funcion para pantalla principal
function principal() {
    let html = "";
    for (let propiedad of propiedadesJSON) {
        html += cardsHTML(propiedad);
    }
    dato.innerHTML = html;
    total.innerHTML = propiedadesJSON.length;
}

// Funciona para contador de cards
function contar(contador){
    total.innerHTML = contador;
}

// Funcion para filtro de usuario
function busqueda() {
    let cuartos = document.querySelector('#cuartos').value;
    let minMetros = document.querySelector('#minimo').value;
    let maxMetros = document.querySelector('#maximo').value;
    let contador = 0;
    let html = "";

    //aviso de error en datos
    if (cuartos == 0 || minMetros == 0 || maxMetros == 0) {
        alert("Favor revisar valores de los campos, es posible que falte un dato");
        return;
    }

    // Muestra filtro de usuario y recorre el arreglo
    for (const propiedad of propiedadesJSON) {
        if (propiedad.rooms >= cuartos && propiedad.m >= minMetros && propiedad.m <= maxMetros) {
            html += cardsHTML(propiedad);
            contador++;
        }
    }

    // Alerta de error al ingresar datos incorrectos
    if (contador == 0) {
        alert("No existe propiedad con tu busqueda, favor ingresa nuevamente los datos");
        return (principal());
    }

    dato.innerHTML = html;
    total.innerHTML = contador;
}

principal();
button.addEventListener('click', busqueda);




/*   for (let propiedad of propiedadesJSON){
      //if (propiedad.rooms == 3){
        console.log(propiedad.name);
        console.log(propiedad.description);
        console.log(propiedad.src);
        console.log(propiedad.rooms);
        console.log(propiedad.m);
        html += `  <div class="img" style="background-image: url(${propiedad.src})"></div>
                  <section>
                      <h5>${propiedad.name}</h5>
                      <div class="d-flex justify-content-between">
                          <p>Cuartos: ${propiedad.rooms}</p>
                          <p>Metros: ${propiedad.m}</p>
                      </div>
                      <p class="my-3">${propiedad.description}</p>
                      <button class="btn btn-info ">Ver más</button>
                  </section>
                `
    //}

  }
  
  dato.innerHTML = html;

  total.innerHTML = propiedadesJSON.length; */