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
    win()
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
    win()
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

    p1button.textContent = '+1'
    p2button.textContent = '+1'

    p1button.classList.remove('win')
    p2button.classList.remove('win')

    for (i = 0; i <= document.querySelectorAll('input').length; i++) {
        document.querySelector('input').remove()
    }

    duece.style.display = 'none'
}

function win() {
    if(skor === winpoin) {
        p1button.textContent = 'Winner!🎉'
        p1button.classList.add('win')

    } else if (skor2 === winpoin) {
        p2button.textContent = 'Winner!🎉'
        p2button.classList.add('win')
    }
}

cabor.addEventListener('change', () => {
    winpoin = parseInt(cabor.value)

    reset()
})

const buttons = document.querySelectorAll('#buton')
const forms = document.querySelectorAll('#form')
const names = document.querySelectorAll('#nama')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const form = forms[i]
        const nama = names[i]
        let input = form.querySelector('input')
        
        if (input === null) {
            input = document.createElement('input')
            input.placeholder = 'Player name'
            
            input.addEventListener('input', () => {
                nama.innerText = input.value
            })

            form.appendChild(input)
            
        } else if (input.value === '') {
            if (nama === names[0]) {
                nama.innerText = 'Player 1'

            } else if (nama === names[1]) {
                nama.innerText = 'Player 2'
            }
            
            input.remove()
            
        } else {
            nama.innerText = input.value
            input.remove()
        }
    })
}