const adventBody = document.getElementById('advent')
const modal = document.getElementById('modal')
const title = document.getElementById('title')
const subTitle = document.getElementById('subtitle')
const date = new Date()
const source = [
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "ico-albero",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "ico-stella",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "ico-neve",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/dance.gif"
    }
];

function clickDay(){
    const days = document.querySelectorAll('.card')
    for (let j = 0; j < days.length; j++) {
        if(date.getMonth() === 11){
            if(j < date.getDate()){
                days[j].addEventListener('click', ()=>{
                    console.log(j)
                    // Apri card
                    days[j].classList.add('opened')
                    // Stampa della modale
                    modal.classList.remove('none')
                    if(source[j].type === 'text'){
                        modal.innerHTML = `
                        <h4>Buon ${j + 1} Dicembre</h4>
                        <p>${source[j].text}</p>
                            <span id="btn-close">Chiudi</span>
                        `
                    } else {
                        modal.innerHTML = `
                        <h4>Buon ${j + 1 === 25 ? 'NATALE' : j + 1 + ' Dicembre'} </h4>
                        <img class="thumb" src="${source[j].url}" alt="${source[j].icon}">
                        <span id="btn-close">Chiudi</span>`
                    }
                    const btnClose = document.getElementById('btn-close')
                        btnClose.addEventListener('click', ()=>{
                            console.log('clickk')
                            modal.classList.add('none')
                        })   
                })
            } else {
                days[j].addEventListener('click', ()=>{
                    console.log('click fuori giorno')
                    modal.classList.remove('none')
                    modal.innerHTML = `<h4>Troppo presto mancano: ${toChristmas()}</h4>
                    <span id="btn-close">Chiudi</span>`
                    const btnClose = document.getElementById('btn-close')
                    btnClose.addEventListener('click', ()=>{
                        console.log('clickk')
                        modal.classList.add('none')
                    })  
                })
            } 
        
        }

    }
}

function createCalendar(){
    title.innerText = `Advent Calendar ${date.getFullYear()}`
    if(!toChristmas()){
        subTitle.innerText = `BUON NATALE - FELIZ NAVIDAD - MERRY CHIRSTMAS`
    } else {
        subTitle.innerText = `Mancano: ${toChristmas()} giorni`
    }
    for (let i = 0; i < source.length; i++) {
            adventBody.innerHTML += `
                <div class="card">
                    <div class="wrap-content">
                        <img class="thumb" src="images/icons/${source[i].icon}.png" alt="">
                        <h5>${i + 1}</h5>
                    </div>
                </div>`        
    }
    clickDay()
}

function toChristmas(){
    const christmas = new Date(date.getFullYear(), 11, 25)
    daysLeft = Math.ceil((christmas - date) / (1000 * 60 * 60 * 24))
    return daysLeft
}
createCalendar()



