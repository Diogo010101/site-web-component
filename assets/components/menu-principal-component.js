class MenuPrincipal extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

        
    }


    build(){
        const componentRoot = document.createElement("header");
        componentRoot.setAttribute("class","cabecalho");

            const logo = document.createElement("img");
            logo.setAttribute("class", "logo");
            logo.src = this.getAttribute("src-logo") || "#";
            logo.alt = this.getAttribute("alt-logo") || "logo site";

            const menu = document.createElement("div");
            menu.setAttribute("class","menu");
            menu.textContent = "Menu";
                const materialSymbolsOutlined = document.createElement("span");
                materialSymbolsOutlined.setAttribute("class", "material-symbols-outlined");
                materialSymbolsOutlined.textContent = this.getAttribute("text-symbols");
                menu.appendChild(materialSymbolsOutlined);

            const menuPrincipal = document.createElement("nav");
            menuPrincipal.setAttribute("class","menu-principal");

                const navegacao = document.createElement("ul");
                navegacao.setAttribute("class","navegacao")


                //li
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = this.getAttribute("href-a") || "#";
                    a.textContent = "Podcast";

                    li.appendChild(a);
                    navegacao.appendChild(li);


                //li1
                    const li1 = document.createElement("li");
                    const a1 = document.createElement("a");
                    a1.href = this.getAttribute("href-a1") || "#";
                    a1.textContent = "Artigos";

                    li1.appendChild(a1);
                    navegacao.appendChild(li1);


                //li2
                const li2 = document.createElement("li");
                const a2 = document.createElement("a");
                a2.href = this.getAttribute("href-a2") || "#";
                a2.textContent = "Games";

                li2.appendChild(a2);
                navegacao.appendChild(li2);

                //li3
                const li3 = document.createElement("li");
                const a3 = document.createElement("a");
                a3.href = this.getAttribute("href-a3") || "#";
                a3.textContent = "Quem somos";

                li3.appendChild(a3);
                navegacao.appendChild(li3);


                //li4
                const li4 = document.createElement("li");
                const a4 = document.createElement("a");
                a4.href = this.getAttribute("href-a4") || "#";
                a4.textContent = "Fale Conosco";

                li4.appendChild(a4);
                navegacao.appendChild(li4);



                menuPrincipal.appendChild(navegacao)

            componentRoot.appendChild(logo);
            componentRoot.appendChild(menu);
            componentRoot.appendChild(menuPrincipal);

        
        
        const objMenu  = menu;
        
        const objMenuPrincipal = menuPrincipal;

        objMenu.addEventListener("click", () => {
            objMenuPrincipal.classList.toggle("menu-show");
            menu.classList.toggle("margin-container");

        })


        return componentRoot;
    };

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .cabecalho{
            background-color: rgb(70, 70, 70);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0;
        }

        .menu-principal{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0;
        }


        .cabecalho img{
            width: 250px;
        }

        .menu{
            display: none;
            font-size: 1.2em;
            font-weight: bolder;
            text-transform: uppercase;
            color: white;
            cursor: pointer;
        }
        .navegacao{
            display: block;
        }

        .navegacao li{
            list-style: none;
            display: inline;
            padding: 10px;
        }

        .navegacao li a{
            text-decoration: none;
            color: white;
        }

        .navegacao li a:hover{
            text-decoration: underline;
            color: lightgray;
        }
        /*Header fim*/



/*Media Query para celular */

@media screen and (max-width: 750px) {
    body {
        background-image: url("../assets/img/background_pupli-final.jpg");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        background-attachment: fixed;
    }

        .cabecalho {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 20px;
 
        }

    .menu {
        display: block;
        font-size: 1.2em;
        font-weight: bolder;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        padding: 20px 0px;
    }
    .menu-principal{
        position: absolute;
        top: 15%;
        left: 0%;
        width: 100%;
        display: none;
        padding: 0px 0px;
    }

    .menu-show {
        display: flex;
        flex-direction: column;

    }

    .navegacao {
        margin: 0px 4px;
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        background-color: rgb(55, 59, 80);
        font-size: 1.5em;
        padding: 0px;
    }
    .navegacao li:hover{
        transition: 1s;
        background-color: rgb(81, 87, 119);
        

    }

    /*Cria um espassamento quando o menu está aberto*/
    .margin-container{
    height: 400px;
    justify-content: flex-start;

    }

        `

        return style
    };




}

customElements.define("menu-principal", MenuPrincipal);

