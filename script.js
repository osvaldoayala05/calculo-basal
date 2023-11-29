document.addEventListener("DOMContentLoaded", function() {
    const CALCULAR = document.getElementById("calcular");
   
    const ERROR = document.getElementById("error");
    const FLU = document.getElementById("flu");
    const MAN = document.getElementById("man");
  
    const PESO_INPUT = document.getElementById('peso');

    CALCULAR.addEventListener("click", () => {
        const DATO = PESO_INPUT.value;

        if (DATO > 0) {
            ERROR.style.display = "none";
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo * 1.5;
     
            FLU.textContent = `Volumen diario en cc: ${flujo}`;
            MAN.textContent = `Mantenimiento en cc/hr: ${mantenimiento}`;
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } else {
            ERROR.style.display = 'block';
            FLU.style.display = 'none';
            MAN.style.display = 'none';
        }
    });

   

    function calcFlujo(peso) {
        let resultado = 0;
    
        if (peso <= 10) {
            resultado = peso * 100;
        } else if (peso <= 20) {
            resultado = 1000 + ((peso - 10) * 50);
        } else if (peso <= 30) {
            resultado = 1500 + ((peso - 20) * 20);
        } else {
            let corporal = ((peso * 4) + 7) / (peso + 90);
            resultado = corporal * 1500;
        }
    
        return resultado;
    }
    






});