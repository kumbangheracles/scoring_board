const p1skor = document.querySelector('#p1skor')
const p2skor = document.querySelector('#p2skor')

const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')

const resetbutton = document.querySelector('#Reset')
const cabor = document.querySelector('#cabor')

let skor = 0
let skor2 = 0
let winpoin = 5
let winner = true

p1button.addEventListener('click', () => {
    if(skor !== winpoin && winner) {
        skor += 1
        p1skor.textContent = skor

        if(skor === winpoin || skor2 === winpoin) {
            winner = false
        }
    }

    due()
})

p2button.addEventListener('click', () => {
    if(skor2 !== winpoin && winner) {
        skor2 += 1
        p2skor.textContent = skor2

        if(skor === winpoin || skor2 === winpoin) {
            winner = false
        }
    }

    due()
})

resetbutton.addEventListener('click', reset)

function due() {
    if(skor === winpoin-1 && skor2 === winpoin-1) {
        winpoin += 1

        const duece = document.querySelector('#duece')
        duece.style.display = 'inline'
    } else {
        duece.style.display = 'none'
    }
}

function reset() {
    skor = 0
    skor2 = 0
    winpoin = parseInt(cabor.value)

    winner = true
    p1skor.textContent = 0
    p2skor.textContent = 0
    
    duece.style.display = 'none'
}

cabor.addEventListener('change', () => {
    winpoin = parseInt(cabor.value)

    reset()
})