const passo = document.getElementById('passo')
const btnMais = document.getElementById('incremento')
const btnMenos = document.getElementById('decremento')
const resultado = document.getElementById('resultado')


const miniatura = document.getElementById('miniatura')
const imgPrincipal = document.getElementById('principal')

const carImages = [
  "https://loremflickr.com/800/600/car?lock=1",
  "https://loremflickr.com/800/600/car?lock=2",
  "https://loremflickr.com/800/600/car?lock=3",
  "https://loremflickr.com/800/600/car?lock=4",
  "https://loremflickr.com/800/600/car?lock=5",
  "https://loremflickr.com/800/600/car?lock=6",
  "https://loremflickr.com/800/600/car?lock=7",
  "https://loremflickr.com/800/600/car?lock=8",
  "https://loremflickr.com/800/600/car?lock=9",
  "https://loremflickr.com/800/600/car?lock=10"
];

// darkmode
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});





// contador
let contador = 0

function atualizarPasso() {
    return parseInt(passo.value) || 1;
}
function incremento (){
    contador += atualizarPasso();
    resultado.textContent = contador
}
function decremento (){
    contador -= atualizarPasso();
    resultado.textContent = contador;
}
btnMais.addEventListener('click', incremento)
btnMenos.addEventListener('click', decremento)




// imagens
function carregarImagens() {


    for (let i = 0; i < carImages.length; i++) {
        const min = document.createElement('img')
        min.src = carImages[i]
        min.alt = "carro"
        if (i === 0) {
            min.classList.add('ativa');
        }

        min.addEventListener('click', function (){
            const fotoAtiva = document.querySelector('.ativa');
            if (fotoAtiva) {
                fotoAtiva.classList.remove('ativa');
            }
            imgPrincipal.src = min.src
            min.classList.add('ativa');
        })

        miniaturas.appendChild(min)
    }
}

carregarImagens()