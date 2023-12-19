class AnalogClock extends HTMLElement{
constructor(){
    super()

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(
        `
        div{
            width:100%;
            height:100%;
            background-position: center center;
            background-size: cover;           
        }
        .wrapper{            
            position: relative;
            overflow:hidden
        }
        .wrapper>div{
            position: absolute;
        }
        .szamlap{   background-image: url('./img/szamlap.webp');}
        .mp{   background-image: url('./img/mpm.webp');}
        .perc{   background-image: url('./img/pm.webp');}
        .ora{   background-image: url('./img/oram.webp');}          
        `
    )


    let ido=new Date()
    let second = ido.getSeconds()

    let mp= document.createElement('div')
    mp.className="mp"
    mp.style="transform:rotate("+second*6+"deg)"

    let perc = document.createElement('div')
    perc.className="perc"
    let minute = ido.getMinutes()
    perc.style="transform:rotate("+(minute*6+second*0.1)+"deg)"

    
    let ora = document.createElement('div')
    ora.className="ora"
    let hour = ido.getHours()
    ora.style="transform:rotate("+(hour*30+minute/2)+"deg)"

    let szamlap = document.createElement('div')
    szamlap.className="szamlap"
    
    let wrapper = document.createElement('div')
    wrapper.className="wrapper"
    wrapper.appendChild(szamlap)
    wrapper.appendChild(mp)
    wrapper.appendChild(perc)
    wrapper.appendChild(ora)

    const shadow= this.attachShadow({mode:'open'})
    shadow.adoptedStyleSheets=[sheet]
    shadow.appendChild(wrapper)

    setInterval(function(){
        //let ido=new Date()
        ido.setSeconds(ido.getSeconds()+1) // teszt mód
        let second = ido.getSeconds()
        mp.style="transform:rotate("+second*6+"deg)"
        
        let minute = ido.getMinutes()
        perc.style="transform:rotate("+(minute*6+second*0.1)+"deg)"
        
        let hour = ido.getHours()
        ora.style="transform:rotate("+(hour*30+minute/2)+"deg)"
    },10)
    }
}

customElements.define('analog-clock',AnalogClock)