class Noticias extends HTMLElement{
    constructor(){
        super()


        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){

        const componentRoot = document.createElement("section");
        componentRoot.setAttribute("class","noticias-container")

        //noticias
            const noticias = document.createElement("section");
            noticias.setAttribute("class","noticias");

                //Card Noticia 1


                const cardNoticias1 = document.createElement("div");
                cardNoticias1.setAttribute("class","card-noticia");

                
                    const linkImg1 = document.createElement("a");
                    linkImg1.href = this.getAttribute("link-post-img1");

                        const img1 = document.createElement("img");
                        img1.src = this.getAttribute("src-img1");
                        img1.alt = this.getAttribute("alt-img1");



                        linkImg1.appendChild(img1);

                    const titulo1 = document.createElement("h1");

                        const linkTitulo1 = document.createElement("a");
                        linkTitulo1.href = this.getAttribute("href-titulo1");
                        linkTitulo1.textContent = this.getAttribute("texto-titulo1");

                        titulo1.appendChild(linkTitulo1);

                    const descricao1 = document.createElement("p");

                        const linkDescricao1 = document.createElement("a");
                        linkDescricao1.href = this.getAttribute("href-descricao1");
                        linkDescricao1.textContent = this.getAttribute("texto-descricao1");

                        descricao1.appendChild(linkDescricao1);

                    const tagNoticia1 = document.createElement("span");
                    tagNoticia1.textContent = this.getAttribute("tag-noticia1")


                    cardNoticias1.appendChild(linkImg1);
                    cardNoticias1.appendChild(titulo1);
                    cardNoticias1.appendChild(descricao1);
                    cardNoticias1.appendChild(tagNoticia1);

                //Card Noticia 2

                const cardNoticias2 = document.createElement("div");
                cardNoticias2.setAttribute("class", "card-noticia");

                    const linkImg2 = document.createElement("a");
                    linkImg2.href = this.getAttribute("link-post-img2");

                    const img2 = document.createElement("img");
                    img2.src = this.getAttribute("src-img2");
                    img2.alt = this.getAttribute("alt-img2");



                    linkImg2.appendChild(img2);

                    const titulo2 = document.createElement("h1");

                    const linkTitulo2 = document.createElement("a");
                    linkTitulo2.href = this.getAttribute("href-titulo2");
                    linkTitulo2.textContent = this.getAttribute("texto-titulo2");

                    titulo2.appendChild(linkTitulo2);

                    const descricao2 = document.createElement("p");

                    const linkDescricao2 = document.createElement("a");
                    linkDescricao2.href = this.getAttribute("href-descricao2");
                    linkDescricao2.textContent = this.getAttribute("texto-descricao2");

                    descricao2.appendChild(linkDescricao2);


                const tagNoticia2 = document.createElement("span");
                tagNoticia2.textContent = this.getAttribute("tag-noticia2")


                cardNoticias2.appendChild(linkImg2);
                cardNoticias2.appendChild(titulo2);
                cardNoticias2.appendChild(descricao2);
                cardNoticias2.appendChild(tagNoticia2);

            //Card Noticia 3

            const cardNoticias3 = document.createElement("div");
            cardNoticias3.setAttribute("class", "card-noticia");

            const linkImg3 = document.createElement("a");
            linkImg3.href = this.getAttribute("link-post-img3");

            const img3 = document.createElement("img");
            img3.src = this.getAttribute("src-img3");
            img3.alt = this.getAttribute("alt-img3");

            linkImg3.appendChild(img3);

            const titulo3 = document.createElement("h1");

            const linkTitulo3 = document.createElement("a");
            linkTitulo3.href = this.getAttribute("href-titulo3");
            linkTitulo3.textContent = this.getAttribute("texto-titulo3");

            titulo3.appendChild(linkTitulo3);

            const descricao3 = document.createElement("p");

            const linkDescricao3 = document.createElement("a");
            linkDescricao3.href = this.getAttribute("href-descricao3");
            linkDescricao3.textContent = this.getAttribute("texto-descricao3");

            descricao3.appendChild(linkDescricao3);

            const tagNoticia3 = document.createElement("span");
            tagNoticia3.textContent = this.getAttribute("tag-noticia3")


            cardNoticias3.appendChild(linkImg3);
            cardNoticias3.appendChild(titulo3);
            cardNoticias3.appendChild(descricao3);
            cardNoticias3.appendChild(tagNoticia3);



            //Card Noticia 4

            const cardNoticias4 = document.createElement("div");
            cardNoticias4.setAttribute("class", "card-noticia");

                const linkImg4 = document.createElement("a");
                linkImg4.href = this.getAttribute("link-post-img4");

                    const img4 = document.createElement("img");
                    img4.src = this.getAttribute("src-img4");
                    img4.alt = this.getAttribute("alt-img4");

                linkImg4.appendChild(img4);

                const titulo4 = document.createElement("h1");

                    const linkTitulo4 = document.createElement("a");
                    linkTitulo4.href = this.getAttribute("href-titulo4");
                    linkTitulo4.textContent = this.getAttribute("texto-titulo4");

                titulo4.appendChild(linkTitulo4);

                const descricao4 = document.createElement("p");

                    const linkDescricao4 = document.createElement("a");
                    linkDescricao4.href = this.getAttribute("href-descricao4");
                    linkDescricao4.textContent = this.getAttribute("texto-descricao4");

                descricao4.appendChild(linkDescricao4);

                const tagNoticia4 = document.createElement("span");
                tagNoticia4.textContent = this.getAttribute("tag-noticia4")

            const objTitulo1 = linkTitulo1;
            const objTitulo2 = linkTitulo2;
            const objTitulo3 = linkTitulo3;
            const objTitulo4 = linkTitulo4;

            objTitulo1.classList.add(`${tagNoticia1.textContent}`);
            objTitulo2.classList.add(`${tagNoticia2.textContent}`);
            objTitulo3.classList.add(`${tagNoticia3.textContent}`);
            objTitulo4.classList.add(`${tagNoticia4.textContent}`);


            cardNoticias4.appendChild(linkImg4);
            cardNoticias4.appendChild(titulo4);
            cardNoticias4.appendChild(descricao4);
            cardNoticias4.appendChild(tagNoticia4);


            noticias.appendChild(cardNoticias1);
            noticias.appendChild(cardNoticias2);
            noticias.appendChild(cardNoticias3);
            noticias.appendChild(cardNoticias4);
        //noticiasFIM

        //Aside Mais vistas

        const maisVistas = document.createElement("aside");
        maisVistas.setAttribute("class", "mais-vistas");

        const tituloAside = document.createElement("h1");
        tituloAside.textContent = this.getAttribute("titulo-aside");
        const spanTituloAside = document.createElement("span");

        tituloAside.appendChild(spanTituloAside);

        const olAside = document.createElement("ol");

        const liAside1 = document.createElement("li");
        const spanLi1 = document.createElement("span");
        spanLi1.textContent = this.getAttribute("ranking-id1");

        const linkAside1 = document.createElement("a");
        linkAside1.href = this.getAttribute("src-link1");
        linkAside1.textContent = this.getAttribute("titulo-link1");



        liAside1.appendChild(spanLi1);
        liAside1.appendChild(linkAside1);


        const liAside2 = document.createElement("li");
        const spanLi2 = document.createElement("span");
        spanLi2.textContent = this.getAttribute("ranking-id2");

        const linkAside2 = document.createElement("a");
        linkAside2.href = this.getAttribute("src-link2");
        linkAside2.textContent = this.getAttribute("titulo-link2");



        liAside2.appendChild(spanLi2);
        liAside2.appendChild(linkAside2);


        const liAside3 = document.createElement("li");
        const spanLi3 = document.createElement("span");
        spanLi3.textContent = this.getAttribute("ranking-id3");

        const linkAside3 = document.createElement("a");
        linkAside3.href = this.getAttribute("src-link3");
        linkAside3.textContent = this.getAttribute("titulo-link3");



        liAside3.appendChild(spanLi3);
        liAside3.appendChild(linkAside3);


        const liAside4 = document.createElement("li");
        const spanLi4 = document.createElement("span");
        spanLi4.textContent = this.getAttribute("ranking-id4");

        const linkAside4 = document.createElement("a");
        linkAside4.href = this.getAttribute("src-link4");
        linkAside4.textContent = this.getAttribute("titulo-link4");



        liAside4.appendChild(spanLi4);
        liAside4.appendChild(linkAside4);


        const liAside5 = document.createElement("li");
        const spanLi5 = document.createElement("span");
        spanLi5.textContent = this.getAttribute("ranking-id5");

        const linkAside5 = document.createElement("a");
        linkAside5.href = this.getAttribute("src-link5");
        linkAside5.textContent = this.getAttribute("titulo-link5");



        liAside5.appendChild(spanLi5);
        liAside5.appendChild(linkAside5);


        olAside.appendChild(liAside1);
        olAside.appendChild(liAside2);
        olAside.appendChild(liAside3);
        olAside.appendChild(liAside4);
        olAside.appendChild(liAside5);







        maisVistas.appendChild(tituloAside);
        maisVistas.appendChild(olAside);
        //Aside Mais vistas FIM
    




    componentRoot.appendChild(noticias);
    componentRoot.appendChild(maisVistas);
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





.noticias-container{
    margin: 50px 0;
    
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
    align-items: center

}

.noticias{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
}

.card-noticia{
    gap: 10px;
    width: 300px;
    min-width: 250px;
    padding: 10px;
    

}


.card-noticia img{
    width: 100%;
    min-width: 220px;
    height: 180px;
    border-radius: 10px;
    box-shadow: 3px 2px 3px rgba(0,0,0,0.5);
    object-fit: cover;

}

.card-noticia h1{
    text-transform: uppercase;
    font-weight: bolder;
    text-align: left;
    padding: 5px 0;
    font-size: 1em;
    color: var(--filme);
}

.card-noticia h1 a{
    text-decoration: none;
}

.card-noticia p {
    text-align: left;
    padding: 5px 0;
    font-size: 1.3em;
    font-weight: bold;
}

.card-noticia p a{
    text-decoration: none;
    color: black;
}

.card-noticia span{
    display: none;
}

/*Aside mais-vistas*/
.mais-vistas{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 50%;


}

.mais-vistas h1{
    position: relative;
    text-transform: capitalize;
    color: aquamarine;
    font-size: 2em;
    text-align: justify;
    padding:  20px;
}

.mais-vistas h1 span::after{
    content: "";
    position: absolute;
    bottom: 40%;
    width: 40%;
    height: 2px;
    margin-left: 6px;
    background: #3bb4b4;
}


.mais-vistas ol li{
    list-style: none;
    text-align: justify;
    padding: 5px 20px;
    
}

.mais-vistas ol li span{
    font-size: 2em;
    font-weight: bold;
    padding: 0px 5px;
}

.mais-vistas ol li a{
    text-decoration: none;
    line-height: 1em;
    font-size: 1em;
    padding: 20px;
}


/*Aside mais-vistas fim*/


@media screen and (max-width: 1350px) {
    .noticias{
    width: 100%;
    }
    .card-noticia{
    gap: 10px;
    width: 400px;
    min-width: 250px;
    padding: 10px;

}

    .mais-vistas{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        width: 100%;


}

}
        `
        return style;
    }
}

customElements.define("noticias-destaque", Noticias);