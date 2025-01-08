function closePop(){
    let pop = document.querySelector('div#popup')
    let bd = document.getElementsByTagName('body')[0]
    let main = document.querySelector('div.main')

    main.style.filter = 'none'
    bd.style.overflowY = 'scroll'
    pop.style.display = 'none'
}