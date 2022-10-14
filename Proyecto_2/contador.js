const VarContador = document.querySelector("#VariableContador");
const funciones = document.querySelectorAll(".btn");
let contador = 0;

funciones.forEach((btn) => {
    
    btn.addEventListener("click", (e) => {
    const button = e.currentTarget.classList;
if (button.contains("btn-incrementar")) {
        contador= contador+1;
        VarContador.classList.add("up");
      } 
else if (button.contains("btn-disminuir")) {
    contador= contador-1;
        VarContador.classList.add("down");
      } 
else if (button.contains("btn-reiniciar")) {
            contador = 0;
      }  
      if (contador > 0) {
        VarContador.style.color = '#15FA0A';
      } else if (contador < 0) {
        VarContador.style.color = '#FA0909';
      }else if (contador === 0) {
        VarContador.style.color = '#4063FC';
      }
      VarContador.textContent = contador;
    });
  });

