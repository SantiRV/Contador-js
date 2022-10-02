let contador = 0;

const valor = document.querySelector('#valor'); //id del span
const buttons = document.querySelectorAll('.button') //seleccionamos todos los botones

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const estilos = e.currentTarget.classList;

        if(estilos.contains('incrementar')) {
            contador++;
        }

        else if(estilos.contains('disminuir')) {
            contador--;
        }

        else {
            contador = 0;
        }
        
        valor.textContent = contador;


        // Acá cambiamos los colores

        if(contador === 0) {
            valor.style.color = '#f5f5dc'
        }
        if(contador < 0) {
            valor.style.color = '#dc143c'
        }
        else if(contador > 0) {
            valor.style.color = '#006400'
        }

        
    })
});