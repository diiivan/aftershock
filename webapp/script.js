'use strict'
const app = document.getElementById('app')
const character = document.getElementById('character')
const enemy = document.getElementById('enemy')
const enemyWidth = parseInt(getComputedStyle(enemy).getPropertyValue('width'))
const characterMinHeigth = parseInt(getComputedStyle(app).getPropertyValue('height')) -
    parseInt(getComputedStyle(character).getPropertyValue('height')) -
    parseInt(getComputedStyle(enemy).getPropertyValue('height'))
const characterFace = document.getElementById('face-character')
const enemyFace = document.getElementById('face-enemy')

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const randomizeFaces = () => {
    let arr = ['😎', '😀', '😴', '😇', '😏', '😁', '😂', '😉', '😜', '😤', '😷']
    shuffle(arr)
    characterFace.innerText = arr[0]
    if (arr[0] === '😷') {
        enemyFace.innerText = '☣️'
    } else {
        let arr2 = ['🥴', '😡', '😠', '🤬', '😈', '👿', '💩', '👹', '🤡', '👺', '👽']
        shuffle(arr2)
        enemyFace.innerText = arr2[0]
    }
}

const randomizeEnemy = () => {
    let arr = ['🥴', '😡', '😠', '🤬', '😈', '👿', '💩', '👹', '🤡', '👺', '👽']
    shuffle(arr)
    enemyFace.innerText = arr[0]
}

randomizeFaces()

const jump = event => {
    if (event.isComposing || event.keyCode === 32) {
        if (character.classList != 'jumps')
            character.classList.add('jumps')
        setTimeout(() => {
            character.classList.remove('jumps')
        }, 500)
    }
}

const chickenDinner = setInterval(() => {
    const characterTop =
    parseInt(window.
        getComputedStyle(character).
        getPropertyValue('top'))
    const enemyLeft =
    parseInt(window.
        getComputedStyle(enemy).
        getPropertyValue('left'))
    if (enemyLeft < enemyWidth && enemyLeft > 0 &&
        characterTop >= characterMinHeigth) {
            enemy.style.animation = 'none'
            enemy.style.display = 'none'
            removeEventListener('keydown', jump)
            if (characterFace.innerText === '😷')
                alert('HA! ur sick now!')
            else
                alert('HA! ur loser!')
            if (enemyFace.innerText === '💩')
                characterFace.innerText = '🤢'
            else if (characterFace.innerText === '😷')
                characterFace.innerText = '🤧'
            else
                characterFace.innerText = '💀'
    }
    if (characterFace.innerText !== '😷' && enemyLeft < -enemyWidth * 0.8)
        randomizeEnemy()
}, 10)

addEventListener('keydown', jump)