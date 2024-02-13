class NoticiaPodcast extends HTMLElement {
    constructor() {
        super()



        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());




    }

    build() {
        const componentRoot = document.createElement("section");
        componentRoot.setAttribute("class", "noticias-podcast");

            const maisNoticias = document.createElement("div");
            maisNoticias.setAttribute("class","mais-noticias");

                const h1MaisNoticias = document.createElement("h1");
                h1MaisNoticias.setAttribute("class", "titulo-mais-noticias");
                h1MaisNoticias.textContent = this.getAttribute("titulo-mais-noticias") || "Mais Notícias";;


                //Card Noticias 1
                const cardMaisNoticias = document.createElement("div");
                cardMaisNoticias.setAttribute("class", "card-mais-noticias");

                    const linkImg = document.createElement("a");
                    linkImg.href = this.getAttribute("link-img") || "#";

                        const imagemNoticia = document.createElement("img");
                        imagemNoticia.src = this.getAttribute("url-imagem-noticia") || "./assets/img/zelda.jpg";
                        imagemNoticia.alt = this.getAttribute("alt-imagem-noticia");

                    linkImg.appendChild(imagemNoticia);

                    const descricaoMaisNoticias = document.createElement("div");
                    descricaoMaisNoticias.setAttribute("class", "descricao-mais-noticias")

                        const assunto = document.createElement("h1");
                        assunto.textContent = this.getAttribute("assunto-noticia");

                        const tagSpan = document.createElement("span");
                        tagSpan.textContent = this.getAttribute("tag-span");

                        const tituloNoticia = document.createElement("a");
                        tituloNoticia.href = this.getAttribute("url-noticia") || "#";
                        tituloNoticia.textContent = this.getAttribute("titulo-noticia") || "Titulo";

                        const descricao = document.createElement("p");
                        descricao.textContent = this.getAttribute("descricao-noticia") || "Descrição Notícia";

                    descricaoMaisNoticias.appendChild(assunto);
                    descricaoMaisNoticias.appendChild(tagSpan);
                    descricaoMaisNoticias.appendChild(tituloNoticia);
                    descricaoMaisNoticias.appendChild(descricao);


                cardMaisNoticias.appendChild(linkImg)
                cardMaisNoticias.appendChild(descricaoMaisNoticias)




                //Card Noticias 2
                const cardMaisNoticias2 = document.createElement("div");
                cardMaisNoticias2.setAttribute("class", "card-mais-noticias");

                    const linkImg2 = document.createElement("a");
                    linkImg2.href = this.getAttribute("link-img2") || "#";

                        const imagemNoticia2 = document.createElement("img");
                        imagemNoticia2.src = this.getAttribute("url-imagem-noticia2") || "./assets/img/zelda.jpg";
                        imagemNoticia2.alt = this.getAttribute("alt-imagem-notici2");

                    linkImg2.appendChild(imagemNoticia2);

                    const descricaoMaisNoticias2 = document.createElement("div");
                    descricaoMaisNoticias2.setAttribute("class", "descricao-mais-noticias")

                        const assunto2 = document.createElement("h1");
                        assunto2.textContent = this.getAttribute("assunto-noticia2");

                        const tagSpan2 = document.createElement("span");
                        tagSpan2.textContent = this.getAttribute("tag-span2");

                        const tituloNoticia2 = document.createElement("a");
                        tituloNoticia2.href = this.getAttribute("url-noticia2") || "#";
                        tituloNoticia2.textContent = this.getAttribute("titulo-noticia2") || "Titulo";

                        const descricao2 = document.createElement("p");
                        descricao2.textContent = this.getAttribute("descricao-noticia2") || "Descrição Notícia";

                    descricaoMaisNoticias2.appendChild(assunto2);
                    descricaoMaisNoticias2.appendChild(tagSpan2);
                    descricaoMaisNoticias2.appendChild(tituloNoticia2);
                    descricaoMaisNoticias2.appendChild(descricao2);


                cardMaisNoticias2.appendChild(linkImg2)
                cardMaisNoticias2.appendChild(descricaoMaisNoticias2)




        //Card Noticias 3
        const cardMaisNoticias3 = document.createElement("div");
        cardMaisNoticias3.setAttribute("class", "card-mais-noticias");

        const linkImg3 = document.createElement("a");
        linkImg3.href = this.getAttribute("link-img3") || "#";

        const imagemNoticia3 = document.createElement("img");
        imagemNoticia3.src = this.getAttribute("url-imagem-noticia3") || "./assets/img/zelda.jpg";
        imagemNoticia3.alt = this.getAttribute("alt-imagem-notici3");

        linkImg3.appendChild(imagemNoticia3);

        const descricaoMaisNoticias3 = document.createElement("div");
        descricaoMaisNoticias3.setAttribute("class", "descricao-mais-noticias")

        const assunto3 = document.createElement("h1");
        assunto3.textContent = this.getAttribute("assunto-noticia3");

        const tagSpan3 = document.createElement("span");
        tagSpan3.textContent = this.getAttribute("tag-span3");

        const tituloNoticia3 = document.createElement("a");
        tituloNoticia3.href = this.getAttribute("url-noticia3") || "#";
        tituloNoticia3.textContent = this.getAttribute("titulo-noticia3") || "Titulo";

        const descricao3 = document.createElement("p");
        descricao3.textContent = this.getAttribute("descricao-noticia3") || "Descrição Notícia";

        descricaoMaisNoticias3.appendChild(assunto3);
        descricaoMaisNoticias3.appendChild(tagSpan3);
        descricaoMaisNoticias3.appendChild(tituloNoticia3);
        descricaoMaisNoticias3.appendChild(descricao3);


        cardMaisNoticias3.appendChild(linkImg3)
        cardMaisNoticias3.appendChild(descricaoMaisNoticias3)


        //Card Noticias 4
        const cardMaisNoticias4 = document.createElement("div");
        cardMaisNoticias4.setAttribute("class", "card-mais-noticias");

        const linkImg4 = document.createElement("a");
        linkImg4.href = this.getAttribute("link-img4") || "#";

        const imagemNoticia4 = document.createElement("img");
        imagemNoticia4.src = this.getAttribute("url-imagem-noticia4") || "./assets/img/zelda.jpg";
        imagemNoticia4.alt = this.getAttribute("alt-imagem-notici4");

        linkImg4.appendChild(imagemNoticia4);

        const descricaoMaisNoticias4 = document.createElement("div");
        descricaoMaisNoticias4.setAttribute("class", "descricao-mais-noticias")

        const assunto4 = document.createElement("h1");
        assunto4.textContent = this.getAttribute("assunto-noticia4");

        const tagSpan4 = document.createElement("span");
        tagSpan4.textContent = this.getAttribute("tag-span4");

        const tituloNoticia4 = document.createElement("a");
        tituloNoticia4.href = this.getAttribute("url-noticia4") || "#";
        tituloNoticia4.textContent = this.getAttribute("titulo-noticia4") || "Titulo";

        const descricao4 = document.createElement("p");
        descricao4.textContent = this.getAttribute("descricao-noticia4") || "Descrição Notícia";

        descricaoMaisNoticias4.appendChild(assunto4);
        descricaoMaisNoticias4.appendChild(tagSpan4);
        descricaoMaisNoticias4.appendChild(tituloNoticia4);
        descricaoMaisNoticias4.appendChild(descricao4);


        cardMaisNoticias4.appendChild(linkImg4)
        cardMaisNoticias4.appendChild(descricaoMaisNoticias4)

        //Card Noticias 5
        const cardMaisNoticias5 = document.createElement("div");
        cardMaisNoticias5.setAttribute("class", "card-mais-noticias");

        const linkImg5 = document.createElement("a");
        linkImg5.href = this.getAttribute("link-img5") || "#";

        const imagemNoticia5 = document.createElement("img");
        imagemNoticia5.src = this.getAttribute("url-imagem-noticia5") || "./assets/img/zelda.jpg";
        imagemNoticia5.alt = this.getAttribute("alt-imagem-notici5");

        linkImg5.appendChild(imagemNoticia5);

        const descricaoMaisNoticias5 = document.createElement("div");
        descricaoMaisNoticias5.setAttribute("class", "descricao-mais-noticias")

        const assunto5 = document.createElement("h1");
        assunto5.textContent = this.getAttribute("assunto-noticia5");

        const tagSpan5 = document.createElement("span");
        tagSpan5.textContent = this.getAttribute("tag-span5");

        const tituloNoticia5 = document.createElement("a");
        tituloNoticia5.href = this.getAttribute("url-noticia5") || "#";
        tituloNoticia5.textContent = this.getAttribute("titulo-noticia5") || "Titulo";

        const descricao5 = document.createElement("p");
        descricao5.textContent = this.getAttribute("descricao-noticia5") || "Descrição Notícia";

        descricaoMaisNoticias5.appendChild(assunto5);
        descricaoMaisNoticias5.appendChild(tagSpan5);
        descricaoMaisNoticias5.appendChild(tituloNoticia5);
        descricaoMaisNoticias5.appendChild(descricao5);


        cardMaisNoticias5.appendChild(linkImg5)
        cardMaisNoticias5.appendChild(descricaoMaisNoticias5)

        maisNoticias.appendChild(h1MaisNoticias);
        maisNoticias.appendChild(cardMaisNoticias);
        maisNoticias.appendChild(cardMaisNoticias2);
        maisNoticias.appendChild(cardMaisNoticias3);
        maisNoticias.appendChild(cardMaisNoticias4);
        maisNoticias.appendChild(cardMaisNoticias5);

        //PODCAST
        const podcast = document.createElement("div");
        podcast.setAttribute("class", "podcast");

            const tituloPodcast = document.createElement("h1");
            tituloPodcast.setAttribute("class","titulo-podcast")
            tituloPodcast.textContent = this.getAttribute("titulo-podcast") || "Podcast";


            //card podcast 1
            const cardPodcast = document.createElement("div");
            cardPodcast.setAttribute("class","card-podcast");

                const linkImgPodcast = document.createElement("a");
                linkImgPodcast.href = this.getAttribute("url-link-img-podcast") || "#";

                    const imgPodcast = document.createElement("img");
                    imgPodcast.src = this.getAttribute("url-img-podcast") || "./assets/img/default-podcast.jpg";
                    imgPodcast.alt = this.getAttribute("alt-img-podcast") || "Imagem aqui";
                linkImgPodcast.appendChild(imgPodcast);

                const h1Podcast = document.createElement("h1");
                h1Podcast.textContent = this.getAttribute("assunto-podcast") || "Assunto Vazio";

                const descricaoPodcast = document.createElement("a");
                descricaoPodcast.href = this.getAttribute("url-descricao-podcast") || "#";
                descricaoPodcast.textContent = this.getAttribute("descricao-podcast") || "Descrição do Podcast"

            cardPodcast.appendChild(linkImgPodcast);
            cardPodcast.appendChild(h1Podcast);
            cardPodcast.appendChild(descricaoPodcast);


            //card podcast 2
            const cardPodcast2 = document.createElement("div");
            cardPodcast2.setAttribute("class", "card-podcast");

            const linkImgPodcast2 = document.createElement("a");
            linkImgPodcast2.href = this.getAttribute("url-link-img-podcast2") || "#";

            const imgPodcast2 = document.createElement("img");
            imgPodcast2.src = this.getAttribute("url-img-podcast2") || "./assets/img/default-podcast.jpg";
            imgPodcast2.alt = this.getAttribute("alt-img-podcast2") || "Imagem aqui";
            linkImgPodcast2.appendChild(imgPodcast2);

            const h1Podcast2 = document.createElement("h1");
            h1Podcast2.textContent = this.getAttribute("assunto-podcast2") || "Assunto Vazio";

            const descricaoPodcast2 = document.createElement("a");
            descricaoPodcast2.href = this.getAttribute("url-descricao-podcast2") || "#";
            descricaoPodcast2.textContent = this.getAttribute("descricao-podcast2") || "Descrição do Podcast"

            cardPodcast2.appendChild(linkImgPodcast2);
            cardPodcast2.appendChild(h1Podcast2);
            cardPodcast2.appendChild(descricaoPodcast2);


            //card podcast 3
            const cardPodcast3 = document.createElement("div");
            cardPodcast3.setAttribute("class", "card-podcast");

            const linkImgPodcast3 = document.createElement("a");
            linkImgPodcast3.href = this.getAttribute("url-link-img-podcast3") || "#";

            const imgPodcast3 = document.createElement("img");
            imgPodcast3.src = this.getAttribute("url-img-podcast3") || "./assets/img/default-podcast.jpg";
            imgPodcast3.alt = this.getAttribute("alt-img-podcast3") || "Imagem aqui";
            linkImgPodcast3.appendChild(imgPodcast3);

            const h1Podcast3 = document.createElement("h1");
            h1Podcast3.textContent = this.getAttribute("assunto-podcast3") || "Assunto Vazio";

            const descricaoPodcast3 = document.createElement("a");
            descricaoPodcast3.href = this.getAttribute("url-descricao-podcast3") || "#";
            descricaoPodcast3.textContent = this.getAttribute("descricao-podcast3") || "Descrição do Podcast"

            cardPodcast3.appendChild(linkImgPodcast3);
            cardPodcast3.appendChild(h1Podcast3);
            cardPodcast3.appendChild(descricaoPodcast3);

        podcast.appendChild(tituloPodcast);
        podcast.appendChild(cardPodcast);
        podcast.appendChild(cardPodcast2);
        podcast.appendChild(cardPodcast3);


        componentRoot.appendChild(maisNoticias);
        componentRoot.appendChild(podcast);


        //ALTERANDO A COR DO ASSUNTO DINAMICAMENTE
        const objTituloNoticia1 = assunto;
        const objTituloNoticia2 = assunto2;
        const objTituloNoticia3 = assunto3;
        const objTituloNoticia4 = assunto4;
        const objTituloNoticia5 = assunto5;

        objTituloNoticia1.classList.add(`${tagSpan.textContent}`)
        objTituloNoticia2.classList.add(`${tagSpan2.textContent}`)
        objTituloNoticia3.classList.add(`${tagSpan3.textContent}`)
        objTituloNoticia4.classList.add(`${tagSpan4.textContent}`)
        objTituloNoticia5.classList.add(`${tagSpan5.textContent}`)


        return componentRoot
    }
    styles() {
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

        
*{
    
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "inter", sans-serif;
}
/*Section mais noticias*/

.noticias-podcast{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
}

.mais-noticias{
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    text-align: left;
    width: 100%;
}

.titulo-mais-noticias{
    text-transform: uppercase;
    position: relative;
    font-size: 1.6em;
    font-weight: bold;
    color: var(--filme);
}

.titulo-mais-noticias::after {
    content: "";
        position: absolute;
        bottom: 40%;
        width: 50%;
        height: 2px;
        margin-left: 6px;
        background: var(--filme);
}


.card-mais-noticias{
    display: flex;
    flex-direction: row;
    width: 100%;
    min-width: 300px;
    padding-top: 20px;
    
}

.card-mais-noticias img{
    width: 280px;
    min-width: 280px;
    height: 190px;
    border-radius: 10px;
    object-fit: cover;

}



.descricao-mais-noticias{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px;
    

}
.descricao-mais-noticias h1{
    text-transform: capitalize;

}

.descricao-mais-noticias span{
    display: none;

}


.descricao-mais-noticias a{
    font-size: 1.2em;
    color: var(--filme);

}

.descricao-mais-noticias a{
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.4em;
}

.descricao-mais-noticias p{
    color: darkgray;
}

/*Section mais noticias fim*/

/*Section Podcast*/

.podcast{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

}

.titulo-podcast{
    position: relative;
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5em;
    color: var(--serietv);
    padding: 5px 20px;
}


.titulo-podcast::after {
    content: "";
    position: absolute;
    bottom: 40%;
    width: 50%;
    height: 2px;
    margin-left: 6px;
    background: var(--serietv);
}

.card-podcast{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px;
    gap: 10px

}

.card-podcast img{
    width: 80%;
    min-width: 180px;
    border-radius: 10px;
}


.card-podcast h1 {
    color: var(--serietv);
    font-size: 1.3em;
    font-weight: bold;
    text-transform: capitalize;

}

.card-podcast a {
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    color: black;

}

/*Section Podcast Fim*/


@media screen and (max-width: 750px) {
    



        .mais-noticias {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                padding: 20px 10px;
                text-align: left;
                width: 100%;
            }

        .card-mais-noticias {
            display: flex;
            flex-direction: column;
            width: 100%;
            object-fit: cover;
            padding-top: 20px;

        }

        .card-mais-noticias img {
            width: 100%;
            min-width: 320px;
            height: 280px;
            border-radius: 10px;
            object-fit: cover;

        }

        .descricao-mais-noticias {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-left: 0px;


        }
        
            .podcast {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding: 20px;

            }

        .card-podcast img {
            width: 100%;
            min-width: 180px;
            border-radius: 10px;
            height: 180px;
            border-radius: 10px;
            object-fit: cover;
        }

    
}



@media screen and (min-width: 1150px) {


    .mais-noticias {
        display: flex;
        padding: 20px 10px;
        text-align: left;
        width: 50%;
    }

    .podcast {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 20px;

    }

    .card-podcast img {
        width: 100%;
        min-width: 180px;
        height: 304px;
        border-radius: 10px;
        object-fit: cover;
    }
    
}
        `
        return style
    }
}

customElements.define("noticias-podcast", NoticiaPodcast);