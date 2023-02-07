window.document.head.innerHTML=`<link rel="stylesheet" href="css/styles.css">`;
// Ciação de uma referencia do corpo da pagina(body) como constate para não ficar utilizando o comando completo "window.document.body" varias vezes.
const body = window.document.body;

// A função pagina filmes exibi todos os filmes que estão na coleção listaFilmes. Para cada filme será criado um elemento HTML via JavaScript para exibi-lo.
function paginaFilmes(){
    // Para cada filme será criado um grupo de TAGs HTML que irá exibir as informações dos filmes. Estas TAGs serão criadads usando o comando createElement e assim poderemos add informações a elas. A baixo foi criado TAGs header e depois h1. 
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Lista de Filmes';
    header.appendChild(h1);
    
    const main = document.createElement('main');


    var pos = 0; //auxilia na contagem da estrtura de repetição.
    while (pos < listaFilmes.length){
    var divFilme = document.createElement('div');
    var imgFilme = document.createElement('img');
    var h2Titulo = document.createElement('h2');
    var pLancamento = document.createElement('p');
    
    divFilme.setAttribute('class','divFilme');
    imgFilme.setAttribute('src',`${caminho}${listaFilmes[pos].poster_path}`);
    imgFilme.setAttribute('class','imgFilme');
    h2Titulo.innerHTML = listaFilmes[pos].title;
    pLancamento.setAttribute('class', 'plancamento');
    pLancamento.innerHTML = listaFilmes[pos].release_date;
    
    divFilme.appendChild(imgFilme);
    divFilme.appendChild(h2Titulo);
    divFilme.appendChild(pLancamento);
    main.appendChild(divFilme);
    pos++; 
}
    

    body.appendChild(header);
    body.appendChild(main);
}
body.addEventListener("load",paginaFilmes());