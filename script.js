function calcular() {
    console.log("CLICK!!!");
  
    let ciclo = document.getElementById("ciclo_magia").value;
    const econ = document.getElementById("economizou").value;
    const aprim = document.getElementById("aprimoramento").value;
    const resultado = Number(cicloMagia(Number(ciclo))) - Number(econ) + Number(aprim) ;
    document.getElementById("custo").textContent = resultado;
    console.log(resultado);

    const mana = document.getElementById("mana_atual").value;
    const sobrou = Number(mana)-resultado;
    document.getElementById("sobra").textContent = sobrou;
   // document.getElementById("mana_atual").value= sobrou;
    
}
function cicloMagia(ciclo){
    if (ciclo==1)
    return 1;

for (var i= ciclo-1; i>=1; i--){
    ciclo+=i;
 } 
    return ciclo;
}

