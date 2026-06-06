const btnFormulario = document.getElementById("btn-formulario");
const formulario = document.getElementById("formulario");
const btnAgregar = document.getElementById("btn-agregar");
const inputNombre = document.getElementById("nombre");
const inputUrl = document.getElementById("url");
const inputDescripcion = document.getElementById("descripcion");
const container = document.getElementById("container");

//aprecer y desaparecer el formulario
btnFormulario.addEventListener("click", function(){
    if(formulario.style.display === "none"){
        formulario.style.display ="block"
    } else {
        formulario.style.display = "none"
    }
})

//para crear una tarjeta
function crearTrajeta(nombre, url, descripcion){
    const article = document.createElement("article")
    article.className = "card-article"

    article.innerHTML = `
    <img class="img" src="${url}" alt="${nombre}">
    <div class = "content">
    <h2>${nombre}</h2>
    <p>${descripcion}</p>
    </div>
    `
    container.appendChild(article);
}

//evento agregar
btnAgregar.addEventListener("click", function(){
    const nombre = inputNombre.value 
    const url = inputUrl.value 
    const descripcion = inputDescripcion.value 

    if (nombre !== "" && url !=="" && descripcion !== ""){
        crearTrajeta(nombre, url, descripcion)
        inputNombre.value =""
        inputUrl.value = ""
        inputDescripcion.value = ""
        }
})