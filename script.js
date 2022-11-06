function calcular() {
    console.log("CLICK!!!");
  
    const ciclo = document.getElementById("ciclo_magia").value;
    const econ = document.getElementById("economizou").value;
    const aprim = document.getElementById("aprimoramento").value;
    const resultado = Number(ciclo) - Number(econ) + Number(aprim) ;
    document.getElementById("custo").textContent = resultado;
    console.log(resultado);

    const mana = document.getElementById("mana_atual").value;
    const sobrou = Number(mana)-resultado
    document.getElementById("sobra").textContent = sobrou;
}
