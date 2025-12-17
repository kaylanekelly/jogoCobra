class TrilhaSonora {
    constructor(){
        this.jogandoJogo = new Audio();
        this.jogandoJogo.src= "mp3\\musicafundo.mp3";
        this.cobraComeu = new Audio();
        this.cobraComeu.src= "mp3\\coleta.mp3";
        this.fimJogo = new Audio();
        this.fimJogo.src= "mp3\\morte.mp3";
    }
    tocar(trilha){
        if (trilha == "jogandoJogo") this.jogandoJogo.play();
        if (trilha == "cobraComeu")  this.cobraComeu.play();
        if (trilha == "fimJogo")  this.fimJogo.play();
    }
}