
var botones =["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/"]

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

    for(let i=0; i<botones.length; i++)
    {
        //crear fila
        if (i%4==0)
        {
            const divFila = document.createElement("div");
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);
        }

        let boton =document.createElement("button");
        boton.setAttribute("id","boton"+botones[i]);
        boton.setAttribute("class","btn btn-primary col-3 border-white");
        boton.innerHTML=botones[i];

        //Agregar un "escuchador de eventos"
        boton.addEventListener("click", function(){
            procesarEvento(boton);
        })

        divBotones.lastChild.appendChild(boton);

    }

}

function procesarEvento(boton){

    let miPantalla= document.getElementById("pantalla");
    if(miPantalla.value=="0")
    {
        miPantalla.value="";
    }
    if (boton.innerHTML != "=")
    {
        miPantalla.value+=boton.innerHTML;
    }else{
        //Evaluar la expresion con Math.js
        let resultado = math.evaluate(miPantalla.value);
        miPantalla.value=resultado;
    }
    //console.log(boton.innerHTML);
}

renderizarGUI();