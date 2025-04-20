export function _initializeTerminal() {
    const terminalContent = document.getElementById('terminalContent');
    const terminalInput = document.getElementById('terminalInput');
    const history = [];
    let historyIndex = -1;

    const COMMANDS = {
        whoami: whoami,
        sobre: whoami,
        help: showHelp,
        ajuda: showHelp,
        clear: clearTerminal,
        limpar: clearTerminal,
        welcome: showWelcome,
        inicio: showWelcome,
        github: () => openLink('https://github.com/edhlz', 'github'),
        linkedin: () => openLink('https://www.linkedin.com', 'linkedin'),
    };

    function appendOutput(html) {
        terminalContent.innerHTML += html;
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    function printCommand(command) {
        appendOutput(`<p class="text-green-400">> ${command}</p>`);
    }

    function showHelp() {
        appendOutput(`
            <p class="text-blue-400">Lista de comandos disponíveis:</p>
            <ul class="list-none space-y-1">
                <li><span class="text-green-400">- ajuda</span>: Mostra esta lista de comandos.</li>
                <li><span class="text-green-400">- limpar</span>: Limpa o terminal.</li>
                <li><span class="text-green-400">- inicio</span>: Mostra a tela inicial com o ASCII art.</li>
                <li><span class="text-green-400">- github</span>: Abre o repositório do Github em uma nova aba.</li>
                <li><span class="text-green-400">- linkedin</span>: Abre o perfil do Linkedin em uma nova aba.</li>
                <li><span class="text-green-400">- sobre</span>: Mostra informações sobre você.</li>
            </ul>
        `);
    }

    function clearTerminal() {
        terminalContent.innerHTML = '';
    }

    function showWelcome() {
        terminalContent.innerHTML = '';
        appendOutput(`
            <div class="mb-4 text-blue-400">
                <pre class="whitespace-pre-wrap break-words font-mono">
██████████     █████ █████      ████            
░███░░░░░█    ░░███ ░░███      ░░███            
░███  █ ░   ███████  ░███████   ░███   █████████
░██████    ███░░███  ░███░░███  ░███  ░█░░░░███ 
░███░░█   ░███ ░███  ░███ ░███  ░███  ░   ███░  
░███ ░   █░███ ░███  ░███ ░███  ░███    ███░   █
██████████░░████████ ████ █████ █████  █████████
░░░░░░░░░░  ░░░░░░░░ ░░░░ ░░░░░ ░░░░░  ░░░░░░░░░ 
                </pre>
            </div>
            <div class="space-y-2">
                <p>Digite <span class="text-blue-400">'ajuda'</span> para ver a lista de comandos disponíveis.</p>
                <p>Digite <span class="text-blue-400">'inicio'</span> para voltar para a tela inicial.</p>
                <p>Digite <span class="text-blue-400">'github'</span> ou <a href='https://github.com/edhlz' target="_blank" class="text-blue-400 hover:underline">clique aqui</a> para meu repositório no Github.</p>
                <p>Digite <span class="text-blue-400">'linkedin'</span> ou <a href='https://www.linkedin.com' target="_blank" class="text-blue-400 hover:underline">clique aqui</a> para meu Linkedin.</p>
            </div>
        `);
    }
    
    function whoami() {
        appendOutput(`
            <p>Olá, meu nome é Eduardo Hoelzle.</p>
            <p>Sou um desenvolvedor web com experiência em JavaScript, Svelte, Typescript, Python, Kotlin, etc...</p>
            <p>Estou sempre buscando aprender novas tecnologias e melhorar minhas habilidades.</p>
            <p>Se você quiser saber mais sobre mim, sinta-se à vontade para me mandar um email!</p>
        `);
    }


    function openLink(url, label) {
        appendOutput(`<p>Abrindo o ${label} em outra aba</p>`);
        window.open(url, '_blank');
    }

    terminalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputValue = terminalInput.value.trim().toLowerCase();
            if (!inputValue) return;

            printCommand(inputValue);
            history.push(inputValue);
            historyIndex = -1;

            const action = COMMANDS[inputValue];
            if (action) {
                action();
            } else {
                appendOutput(`<p class="text-red-400">Comando não reconhecido: <strong>${inputValue}</strong></p>`);
            }

            terminalInput.value = '';
        }

        if (event.key === 'ArrowUp') {
            if (history.length > 0 && historyIndex < history.length - 1) {
                historyIndex = historyIndex < 0 ? history.length - 1 : historyIndex - 1;
                terminalInput.value = history[historyIndex];
            }
        }

        if (event.key === 'ArrowDown') {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                terminalInput.value = history[historyIndex];
            } else {
                terminalInput.value = '';
                historyIndex = -1;
            }
        }
    });
}
