
window.addEventListener("load", () => {

    const botao = document.getElementById("botao");
    botao.addEventListener("click", ()=> {
    //temos que queremos no contador
    let sec=60;

    const contDiv = document.getElementById("timer");

    const secpass = ()=>{

        let min = Math.floor(sec/60);
        let segRestante = sec % 60;

        if(segRestante < 10 ){
            segRestante = "0" + segRestante;
        }
        if(min < 10 ){
        min = "0" + min;
        }

        contDiv.innerHTML = min + ":" + segRestante;
        
        if(sec > 0){

            sec = sec-1;
        }
        else{
            contDiv.innerHTML = "Acabou o tempo!";
        }
    };
    const countDown = setInterval(()=> secpass(), 1000);
    });
 })