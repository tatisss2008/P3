
function renderizarGUI()
{

    //Div Calculadora
    //1. Crear el elemento
    const divCalculadora = document.createElement("div");

    //2. Agregar atributos (opcional)
    divCalculadora.setAttribute("id", "calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin:0 auto");

    //3. Insertar el elemento en el DOM
    document.body.appendChild(divCalculadora);

    //Div Pantalla
    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "divpantalla");
    divCalculadora.appendChild(divPantalla);

    //Pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pantalla");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled", "true");
    pantalla.setAttribute("class","form-control text-right");
    divPantalla.appendChild(pantalla);

    //Div botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalculadora.appendChild(divBotones);


}

renderizarGUI();