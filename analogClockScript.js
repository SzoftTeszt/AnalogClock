let ido=new Date()
let second = ido.getSeconds()
document.getElementsByClassName('mp')[0].style="transform:rotate("+second*6+"deg)"

let minute = ido.getMinutes()
document.getElementsByClassName('perc')[0].style="transform:rotate("+(minute*6+second*0.1)+"deg)"

let hour = ido.getHours()
document.getElementsByClassName('ora')[0].style="transform:rotate("+(hour*30+minute/2)+"deg)"



setInterval(function(){
    //let ido=new Date()
    ido.setSeconds(ido.getSeconds()+1) // teszt mód
    let second = ido.getSeconds()
    document.getElementsByClassName('mp')[0].style="transform:rotate("+second*6+"deg)"
    
    let minute = ido.getMinutes()
    document.getElementsByClassName('perc')[0].style="transform:rotate("+(minute*6+second*0.1)+"deg)"
    
    let hour = ido.getHours()
    document.getElementsByClassName('ora')[0].style="transform:rotate("+(hour*30+minute/2)+"deg)"
},10)