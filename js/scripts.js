const title = document.getElementById("title")
const principal = document.getElementById("principal")

title.addEventListener("click", function(){
    principal.style.display = 'block'
    title.style.display = 'none'
})

// Guardar el estado (columna active)

let articleActive = 1

// Seleccionar las columnas

const articles = document.querySelectorAll(".article")

// Escuchar los 'clicks' en cada una de ellas

articles.forEach((article, indice) => {
    article.addEventListener("click", function(){
        cambiarArticle(indice)
    })
})

// Cambiar el estado de las columnas

function cambiarArticle(indice) {
    articles[articleActive].classList.remove("article-active")
    articles[indice].classList.add("article-active")
    articleActive = indice
}