export function _initializeTerminal() {
    const terminalContent = document.getElementById('terminalContent');
    const terminalInput = document.getElementById('terminalInput');

    terminalInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { 
            const inputValue = terminalInput.value.trim(); 
    
            switch(inputValue){
                
                case "help":
                case "ajuda":
                    terminalContent.innerHTML += '<p>Comandos disponiveis: ajuda, limpar, inicio</p>';
                    break;
   
                case "clear":
                case "limpar":
                    terminalContent.innerHTML = ''; 
                    break;

                case "welcome":
                case "inicio":
                    terminalContent.innerHTML = ''; 
                    terminalContent.innerHTML = terminalContent.value
                    break;
                
            }
            
            terminalInput.value = ''; 
        }
    });


}