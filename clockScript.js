class Clock extends HTMLElement{
    constructor(){
        super()

        let ora = document.createElement("div")
        ora.innerHTML= new Date().toLocaleTimeString()

        setInterval(function(){
            let ido= new Date().toLocaleTimeString()
            ora.innerHTML=ido
            setTimeout(function(){
                ido= new Date().toLocaleTimeString().replaceAll(':',' ')
                ora.innerHTML=ido}
                ,500)
        },1000)

        // <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet">
        
        let link= document.createElement('link')
        link.rel="stylesheet"
        link.href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
        ora.style="font-family: 'Courier Prime', monospace;"
        const shadow= this.attachShadow({mode:'closed'})
        shadow.appendChild(ora)
        document.head.appendChild(link)
        // shadow.appendChild(link) Ez is müködik, meglepő!!!!
    }
}

customElements.define('my-clock', Clock)


// let ido= new Date().toLocaleTimeString()
// document.getElementsByClassName('ora')[0].innerHTML=ido

// setInterval(function(){
//     let ido= new Date().toLocaleTimeString()
//     document.getElementsByClassName('ora')[0].innerHTML=ido
// },1000)