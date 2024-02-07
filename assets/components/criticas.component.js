class Criticas extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement("section");
        componentRoot.setAttribute("class","criticas");


        //CARD1
            const cardCriticas = document.createElement("div");
            cardCriticas.setAttribute("class","card-criticas");

                const linkImagem = document.createElement("a");
                linkImagem.href = this.getAttribute("link-imagem") || "#";

                    const imgCritica = document.createElement("img");
                    imgCritica.src = this.getAttribute("url-imagem-card");
                    imgCritica.alt = this.getAttribute("alt-imagem") || "capa critica";

                linkImagem.appendChild(imgCritica);

                const tagP = document.createElement("P");
                tagP.textContent = this.getAttribute("tag-P") || "outros";


                const tagSpanOculta = document.createElement("span");
                tagSpanOculta.setAttribute("class","span-oculta");
                tagSpanOculta.textContent = this.getAttribute("tag-oculta") || "outros";




                const linkCritica = document.createElement("a");
                linkCritica.href = this.getAttribute("link-critica") || "#";
                linkCritica.textContent = this.getAttribute("texto-link") || "Texto vazio..."




            cardCriticas.appendChild(linkImagem);
            cardCriticas.appendChild(tagP);
            cardCriticas.appendChild(tagSpanOculta);
            cardCriticas.appendChild(linkCritica);

            //CARD2
            const cardCriticas2 = document.createElement("div");
            cardCriticas2.setAttribute("class", "card-criticas");

                const linkImagem2 = document.createElement("a");
                linkImagem2.href = this.getAttribute("link-imagem2") || "#";

                    const imgCritica2 = document.createElement("img");
                    imgCritica2.src = this.getAttribute("url-imagem-card2");
                    imgCritica2.alt = this.getAttribute("alt-imagem2") || "capa critica";

                linkImagem2.appendChild(imgCritica2);

                const tagP2 = document.createElement("p");
                tagP2.textContent = this.getAttribute("tag-p2") || "outros";

                const tagSpanOculta2 = document.createElement("span");
                tagSpanOculta2.setAttribute("class", "span-oculta");
                tagSpanOculta2.textContent = this.getAttribute("tag-oculta2") || "outros";

                const linkCritica2 = document.createElement("a");
                linkCritica2.href = this.getAttribute("link-critica2") || "#";
                linkCritica2.textContent = this.getAttribute("texto-link2") || "Texto vazio..."




            cardCriticas2.appendChild(linkImagem2);
            cardCriticas2.appendChild(tagP2);
            cardCriticas2.appendChild(tagSpanOculta2);
            cardCriticas2.appendChild(linkCritica2);


            //CARD3
            const cardCriticas3 = document.createElement("div");
            cardCriticas3.setAttribute("class", "card-criticas");

                const linkImagem3 = document.createElement("a");
                linkImagem3.href = this.getAttribute("link-imagem3") || "#";

                    const imgCritica3 = document.createElement("img");
                    imgCritica3.src = this.getAttribute("url-imagem-card3");
                    imgCritica3.alt = this.getAttribute("alt-imagem3") || "capa critica";

                linkImagem3.appendChild(imgCritica3);

                const tagP3 = document.createElement("p");
                tagP3.textContent = this.getAttribute("tag-p3") || "outros";

                const tagSpanOculta3 = document.createElement("span");
                tagSpanOculta3.setAttribute("class", "span-oculta");
                tagSpanOculta3.textContent = this.getAttribute("tag-oculta3") || "outros";

                const linkCritica3 = document.createElement("a");
                linkCritica3.href = this.getAttribute("link-critica3") || "#";
                linkCritica3.textContent = this.getAttribute("texto-link3") || "Texto vazio..."




            cardCriticas3.appendChild(linkImagem3);
            cardCriticas3.appendChild(tagP3);
            cardCriticas3.appendChild(tagSpanOculta3);
            cardCriticas3.appendChild(linkCritica3);



            //CARD4
            const cardCriticas4 = document.createElement("div");
            cardCriticas4.setAttribute("class", "card-criticas");

                const linkImagem4 = document.createElement("a");
                linkImagem4.href = this.getAttribute("link-imagem4") || "#";

                    const imgCritica4 = document.createElement("img");
                    imgCritica4.src = this.getAttribute("url-imagem-card4");
                    imgCritica4.alt = this.getAttribute("alt-imagem4") || "capa critica";

                linkImagem4.appendChild(imgCritica4);

                const tagP4 = document.createElement("p");
                tagP4.textContent = this.getAttribute("tag-p4") || "outros";

                const tagSpanOculta4 = document.createElement("span");
                tagSpanOculta4.setAttribute("class", "span-oculta");
                tagSpanOculta4.textContent = this.getAttribute("tag-oculta4") || "outros";

                const linkCritica4 = document.createElement("a");
                linkCritica4.href = this.getAttribute("link-critica4") || "#";
                linkCritica4.textContent = this.getAttribute("texto-link4") || "Texto vazio..."




            cardCriticas4.appendChild(linkImagem4);
            cardCriticas4.appendChild(tagP4);
            cardCriticas4.appendChild(tagSpanOculta4);
            cardCriticas4.appendChild(linkCritica4);




            //CARD5
            const cardCriticas5 = document.createElement("div");
            cardCriticas5.setAttribute("class", "card-criticas");

                const linkImagem5 = document.createElement("a");
                linkImagem5.href = this.getAttribute("link-imagem5") || "#";

                    const imgCritica5 = document.createElement("img");
                    imgCritica5.src = this.getAttribute("url-imagem-card5");
                    imgCritica5.alt = this.getAttribute("alt-imagem5") || "capa critica";

                linkImagem5.appendChild(imgCritica5);

                const tagP5 = document.createElement("p");
                tagP5.textContent = this.getAttribute("tag-p5") || "outros";

                const tagSpanOculta5 = document.createElement("span");
                tagSpanOculta5.setAttribute("class", "span-oculta");
                tagSpanOculta5.textContent = this.getAttribute("tag-oculta5") || "outros";

                const linkCritica5 = document.createElement("a");
                linkCritica5.href = this.getAttribute("link-critica5") || "#";
                linkCritica5.textContent = this.getAttribute("texto-link5") || "Texto vazio..."




            cardCriticas5.appendChild(linkImagem5);
            cardCriticas5.appendChild(tagP5);
            cardCriticas5.appendChild(tagSpanOculta5);
            cardCriticas5.appendChild(linkCritica5);




        componentRoot.appendChild(cardCriticas)
        componentRoot.appendChild(cardCriticas2)
        componentRoot.appendChild(cardCriticas3)
        componentRoot.appendChild(cardCriticas4)
        componentRoot.appendChild(cardCriticas5)

        const objTitulo1 = tagP;
        const objTitulo2 = tagP2;
        const objTitulo3 = tagP3;
        const objTitulo4 = tagP4;
        const objTitulo5 = tagP5;
 


        objTitulo1.classList.add(`${tagSpanOculta.textContent}`);
        objTitulo2.classList.add(`${tagSpanOculta2.textContent}`);
        objTitulo3.classList.add(`${tagSpanOculta3.textContent}`);
        objTitulo4.classList.add(`${tagSpanOculta4.textContent}`);
        objTitulo5.classList.add(`${tagSpanOculta5.textContent}`);
  




        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "inter", sans-serif;
}    
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

        /*Section Criticas*/
.criticas{
    display: flex;
    flex-flow: row nowrap;
    overflow: scroll;
    overflow-y: hidden;
    background-color: rgb(70, 70, 70);
    color: white;

}

.card-criticas{
    width: 300px;
    gap: 10px;
    padding: 20px 10px;
    text-align: left;
}

.card-criticas img{
    border-radius: 10px;
    width: 100%;
    min-width: 150px;
}

.card-criticas p{
    text-transform: capitalize;
    display: block;
    font-weight: bold;
    font-size: 1.2em;
    
}

.span-oculta {
    display: none;
}

.card-criticas a{
    text-decoration: none;
    color: white;
    font-size: 1.3em;
}
/*Section criticas fim*/
        `

        return style;
    }
}

customElements.define("criticas-section", Criticas);