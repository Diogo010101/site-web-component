class Cardprincipal extends HTMLElement{
    constructor(){
        super()



        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());




    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card-principal")

            const cardDestaque1 = document.createElement("div");
            cardDestaque1.setAttribute("class","card-destaque");
                const imagemCardDestaque1 = document.createElement("img");
                imagemCardDestaque1.src = this.getAttribute("src-img-card-destaque1");
                imagemCardDestaque1.alt = this.getAttribute("alt-card-destaque1");

                const tituloCardDestaque1 = document.createElement("h1");
                tituloCardDestaque1.textContent = this.getAttribute("title1") || "Titulo";

                const descricaoCardDestaque1 = document.createElement("p");
                descricaoCardDestaque1.textContent = this.getAttribute("description1") || "Descrição...";

                const tagCardDestaque1 = document.createElement("span");
                tagCardDestaque1.textContent = this.getAttribute("tagCard1")





            cardDestaque1.appendChild(imagemCardDestaque1);
            cardDestaque1.appendChild(tituloCardDestaque1);
            cardDestaque1.appendChild(descricaoCardDestaque1);
            cardDestaque1.appendChild(tagCardDestaque1);



            const cardDestaque2 = document.createElement("div");
            cardDestaque2.setAttribute("class", "card-destaque");
                const imagemCardDestaque2 = document.createElement("img");
                imagemCardDestaque2.src = this.getAttribute("src-img-card-destaque2");
                imagemCardDestaque2.alt = this.getAttribute("alt-card-destaque2");

                const tituloCardDestaque2 = document.createElement("h1");
                tituloCardDestaque2.textContent = this.getAttribute("title2") || "Titulo";

                const descricaoCardDestaque2 = document.createElement("p");
                descricaoCardDestaque2.textContent = this.getAttribute("description2") || "Descrição...";

                const tagCardDestaque2 = document.createElement("span");
                tagCardDestaque2.textContent = this.getAttribute("tagCard2")





            cardDestaque2.appendChild(imagemCardDestaque2);
            cardDestaque2.appendChild(tituloCardDestaque2);
            cardDestaque2.appendChild(descricaoCardDestaque2);
            cardDestaque2.appendChild(tagCardDestaque2);


        componentRoot.appendChild(cardDestaque1);
        componentRoot.appendChild(cardDestaque2);

        
        const objTitulo1 = tituloCardDestaque1
        console.log(objTitulo1)
        objTitulo1.classList.add(`${tagCardDestaque1.textContent}`);

        const objTitulo2 = tituloCardDestaque2
        console.log(objTitulo2)
        objTitulo2.classList.add(`${tagCardDestaque2.textContent}`);

        return componentRoot
    }
    styles(){
        const style = document.createElement("style");
        style.textContent = `

        :root{
        --filme: #d72337;
        --serietv: #915faf;
        --games: #82af69;
        --hq-livros: #f59b37;
        --animemanga: #D241A5;
        --ciencia-tecnologia: #286ED2;
        --outros: #3BB4B4;
        --fundoescuro: #464646;
        }

        .filmes{
        color:var(--filme)
        }
        .serietv{
        color: var(--serietv)
        }
        .games{
        color: var(--games)
        }
        .hqlivros{
        color: var(--hq-livros)
        }
        .animemanga{
        color: var(--animemanga)
        }
        .cienciatecnologia{
        color: var(--ciencia-tecnologia)
        }
        .outros{
        color: var(--outros)
        }

            .card-principal{
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: flex-start;
                text-align: left;
                margin-top: 25px;
                gap: 30px;
            }
            .card-destaque{
                width: 100%;
                max-width: 600px;
        
            }

            .card-destaque img{
                width: 100%;
                max-width: 600px;
                border-radius: 10px;
            }

            .card-destaque h1{
                text-align: left;
                padding:  10px 0px;
                font-size: 1.2em;
                text-transform: uppercase;


            }

            .card-destaque p{
                text-align: left;
                padding: 5px 0px;
                font-size: 1.5em;
                font-weight: bold;
            }

            .card-destaque span{
                display: none;
            }
        `
        return style
    }
}

customElements.define("card-principal", Cardprincipal);