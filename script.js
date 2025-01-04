function menuOn(){
    let menu = document.querySelector('div.menu')
    menu.style.display = 'block'
}

function menuOff(){
    let menu = document.querySelector('div.menu') 
    menu.style.display = 'none'
}

function closePop(){
    let pop = document.querySelector('div.popup')
    pop.style.display = 'none'
    let over = document.querySelector('div.popup-overlay')
    over.style.display = 'none'
}