<div class="flex align-center justify-center h-screen p-12">
    <div class="w-full h-full bg-[#1f1e1e] shadow-xl flex flex-col">
        <!-- area da barra superior -->
        <div class="h-12 bg-[#1f1e1e] flex items-center px-4 border-b border-[#363636]">
            <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] cursor-pointer"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffa500] cursor-pointer"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1d9730] cursor-pointer"></div>
            </div>
            <div class="flex-1 text-center text-gray-400 text-sm font-mono">
                user@localhost: ~
            </div>
        </div>

        <!-- area de conteúdo -->
        <div class="flex-1 p-4 font-mono text-sm overflow-y-auto text-green-500">
            <!-- ASCII -->
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

            <!-- area do texto de ajuda -->
            <div class="space-y-2">
                <p>Digite <span class="text-blue-400">'ajuda'</span> para ver a lista de comandos disponiveis.</p>
                <p>Digite <span class="text-blue-400">'inicio'</span> para voltar pra tela incial.</p>
                <p>Digite <span class="text-blue-400">'github'</span> ou <a href='a' class="text-blue-400 cursor-pointer hover:underline">clique aqui</a> para meu repositorio no Github.</p>
                <p>Digite <span class="text-blue-400">'linkedin'</span> ou <span class="text-blue-400 cursor-pointer hover:underline">clique aqui</span> para meu linkedin.</p>
            </div>
        </div>

        <!-- area do input -->
        <div class="p-4 border-t border-[#363636]">
            <div class="flex items-center space-x-2 font-mono text-sm">
                <span class="text-green-500">user@localhost</span>
                <span class="text-white">:</span>
                <span class="text-blue-400">~</span>
                <span class="text-white">$</span>
                <input type="text" 
                       class="flex-1 bg-transparent text-white focus:outline-none"
                       placeholder="Digite o comando aqui..."
                       id="terminalInput">
            </div>
        </div>
    </div>
</div>

