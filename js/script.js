const passo = document.getElementById('passo')
const btnMais = document.getElementById('incremento')
const btnMenos = document.getElementById('decremento')
const resultado = document.getElementById('resultado')

const miniatura = document.getElementById('miniatura')
const imgPrincipal = document.getElementById('principal')

const carImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80"
];

let contador = 0

function incremento (){
    contador++
    resultado.textContent = contador
}
function decremento (){
    contador--
    resultado.textContent = contador
}
btnMais.addEventListener('click', incremento)
btnMenos.addEventListener('click', decremento)
function carregarImagens() {


    for (let i = 0; i < carImages.length; i++) {
        const min = document.createElement('img')
        min.src = carImages[i]
        min.alt = "carro"

        min.addEventListener('click', function (){
            imgPrincipal.src = min.src
            min.style.border = "1px solid green"
        })

        miniaturas.appendChild(min)
    }
}

carregarImagens()