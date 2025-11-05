// SCRIPT DAS HABILIDADES

const habilidadesPersonagens = { // constante que vai servir como uma especie de "banco de dados" guardando as informações dos personagens para que as funções a frente possam recuperar e retornar no html
    ash: {
        1: `
        <h2>Bate e Volta</h2>

       <p> Você tem uma habilidade estranha de escapar do inevitável. Enquanto você estiver no ,50% da sua progressão 
        de recuperação é convertida em progressão da barra de debate quando você for pego pelo Assassino,<br>
        até um máximo de <span style="color:#ffeb3b; font-weight:bold;">40</span>/<span style="color:#4caf50; 
        font-weight:bold;">45</span>/<span style="color:#9c27b0; font-weight:bold;">50</span>% de progressão de 
        debate total.</p>
    `,
        2: `
        <h2>Apertando os Cintos</h2>

        <p>Libera o potencial da habilidade de leitura de auras. Enquanto cura um Sobrevivente no Estado Morrendo,
         Apertando os Cintos ativa: </p>

          <ul> 
            <li>A <span style="color:#e6c200; font-weight:bold;">Aura Morrendo</span>  do Assassino é revelada para vocês dois.</li>
            <li>Completar uma Ação de Cura no Sobrevivente morrendo garante para os dois o Efeito do Estado Resistência  por <span style="color:#ffeb3b; font-weight:bold;">4</span>/<span style="color:#4caf50; font-weight:bold;">5</span>/<span style="color:#9c27b0; font-weight:bold;">6</span> segundos.</li>
          </ul>
    `,

        3: `
        <h2>Fervor do Homem</h2>

        <p>O mal sempre tem uma maneira de te achar. Depois receber 3 Ataques de Proteção, a Habilidade ativa.
           Quando a habilidade estiver ativa, a próxima ocasião que você iria ser colocado no <span style="color:#e6c200; font-weight:bold;">Estado Morrendo</span>  
           do Estado Ferido será ignorada.</p>

        <p>Na próxima vez que você for completamente curado, sua Aura vai ser mostrada ao Assassino quando você
           estiver a mais de <span style="color:#ffeb3b; font-weight:bold;">12</span>/<span style="color:#4caf50; font-weight:bold;">14</span>/<span style="color:#9c27b0; font-weight:bold;">16</span> metros dele.</p>   

        <p>A habilidade vai desativar na próxima vez que você for colocado no Estado Morrendo.</p>

        <ul>
            <li>Aumenta sua chance de ser a <span style="color:#e6c200; font-weight:bold;">Obsessão</span>  do Assassino.</li>
            <li>O Assassino só pode ficar obcecado por um Sobrevivente por vez.</li>
        </ul>
        `
    },

    dwight: {
        1: `
        <h2>Vínculo</h2>

        <p>Desbloqueia a habilidade de Leitura de Auras. As Auras dos Aliados serão reveladas a você quando eles
         estiverem a <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
         font-weight:bold;">28</span>/<span style="color:#9c27b0; font-weight:bold;">36</span> metros de você.</p>
        `,

        2: `
        <h2>Prove-se</h2>
        <p>Aumenta a velocidade de reparo em <span style="color:#ffeb3b; font-weight:bold;">6</span>/<span style="color:#4caf50; 
         font-weight:bold;">8</span>/<span style="color:#9c27b0; font-weight:bold;">10</span>% por outro Sobrevivente em um 
         raio de 4 metros de sua localização, até um máximo de <span style="color:#ffeb3b; font-weight:bold;">18</span>/<span 
         style="color:#4caf50; font-weight:bold;">24</span>/<span style="color:#9c27b0; font-weight:bold;">30</span>%.</p>

        <p>Prove-se mesmo estende seu efeito a todos os Sobreviventes dentro de seu alcance.</p>

        <p>Os sobreviventes só podem ser afetados por uma instância de Prove-se mesmo por vez.</p>
        `,

        3: `
        <h2>Líder</h2>

        <p>Você é capaz de organizar um time para trabalhar mais eficientemente. Aumenta a velocidade de reparar, 
        curar e sabotar dos outros Sobreviventes em <span style="color:#ffeb3b; font-weight:bold;">3</span>/<span 
        style="color:#4caf50; font-weight:bold;">6</span>/<span style="color:#9c27b0; font-weight:bold;">9</span>% 
        quando eles estão a 8 metros de você.</p>

        <p>Uma vez fora dessa distância, este efeito persiste por <span style="color:red; font-weight:bold">15 segundos</span>.</p>
        
        `
    },

    laurie: {
        1: `
        <h2>Sobrevivente Único</h2>

        <p>Quanto mais seus amigos cedem ao Assassino, mais você isola, o que reduz as 
        habilidades de leitura de aura do Assassino em relação a você.</p>

        <p>Sua <span style="color:#e6c200;">Aura</span>  não pode ser lida pelo Assassino dentro de 
        um alcance máximo de <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span 
        style="color:#4caf50; font-weight:bold;">22</span>/<span style="color:#9c27b0; 
        font-weight:bold;">24</span> metros para cada Sobrevivente morto ou sacrificado.</p>

        <p>Aumenta a sua chance de ser a Obsessão do Assassino. Apenas uma 
        <span style="color:#e6c200; font-weight:bold;">Obsessão</span>  por partida.</p>
        `,

        2: `
        <h2>Objeto de Obsessão</h2>
        <p>Um laço sobrenatural lhe vincula ao Assassino. Se você estiver olhando na direção do Assassino, 
        esse vinculo revelará suas <span style="color:#e6c200;">Aura</span> um para o outro.</p>

        <p>Este efeito só se aplica se você estiver fora do <span style="color:#e6c200;">Raio de terror</span>
        do Assassino.</p>

        <p>Como a obsessão do Obsessão, este efeito se aplica a um alcance máximo de <span style="color:#ffeb3b; 
        font-weight:bold;">56</span>/<span style="color:#4caf50; font-weight:bold;">64</span>/<span style="color:#9c27b0; 
        font-weight:bold;">72</span> metros. Caso contrário, aplica-se a um alcance máximo de <span style="color:#ffeb3b;
        font-weight:bold;">44</span>/<span style="color:#4caf50; font-weight:bold;">56</span>/<span style="color:#9c27b0; 
        font-weight:bold;">64</span> metros.</p>

        <p>Aumenta sua chance de ser a Obsessão do Assassino. Apenas uma <span style="color:#e6c200;
        font-weight:bold;">Obsessão</span> por partida.</p>
        `,

        3: `
        <h2>Ataque Decisivo</h2>

        <p>Usando o que estivar na mão, você apunhala seu agressor em uma tentativa de escapar.</p>

        <p>Depois de ser salvo ou escapar do <span style="color:#e6c200;">Gancho</span>, Ataque Decisivo vai ativar e 
        ficar usável por <span style="color:#ffeb3b; font-weight:bold;">40</span>/<span style="color:#4caf50; 
        font-weight:bold;">50</span>/<span style="color:#9c27b0; font-weight:bold;">60</span> segundos.
        Enquanto Ataque Decisivo estiver ativo, quando você for pego pelo Assassino, acerte um <span style="color:#e6c200;">
        Teste de perícia</span> para automaticamente escapar do ombro do Assassino e atordoá-lo por <span style="color:#e6c200;
        font-weight:bold;">3 segundos</span>.</p>

        <ul>
            <li>Acertar ou errar o Teste de Perícia vai desativar a Habilidade.</li>

            <li>Atordoar o Assassino com sucesso vai ter tornar a <span style="color:#e6c200;">Obsessão</span>.</li>

            <li>Aumenta sua chance de ser a Obsessão.</li>
        </ul>

        <p>O Assassino só pode ficar obcecado por um Sobrevivente de cada vez.</p>
        `
    },

    mikaela: {
        1: `
        <h2>Clarividência</h2>

        <p>Ao purificar um <span style="color:#e6c200;">Totens</span>, Clarividência se ativa: </p>
        <ul>
            <li>Quando de mãos vazias, pressione e segure o botão de habilidade ativa para desbloquear 
            todo o seu potencial de leitura da Aura, permitindo que você veja a <span style="color:#e6c200;">Aura</span>  
            dos <span style="color:#e6c200;">Portões de Saída</span>, <span style="color:#e6c200;">Geradores</span>, 
            <span style="color:#e6c200;">Ganchos</span>, <span style="color:#e6c200;">Baús</span> e a 
            <span style="color:#e6c200;">Escotilha</span>  em até <span style="color:#e6c200; font-weight:bold;">
            64 metros</span> durante <span style="color:#ffeb3b; font-weight:bold;">8</span>/<span 
            style="color:#4caf50; font-weight:bold;">9</span>/<span style="color:#9c27b0; font-weight:bold;">10</span> segundos.</li>
         </ul> 
        `,

        2: `
        <h2>Bênção: Circulo Curativo</h2>

        <p>Uma bênção que oferece conforto em meio ao horror. Aperte e segure o botão de Habilidade próximo 
        a um Totem Simples ou um Totem enfeitiçado para criar um <span style="color:#e6c200; font-weight:bold;">
        Totem Abençoado</span> .</p>

        <p>Badaladas suaves tocam em um raio de <span style="color:#e6c200; font-weight:bold;">
        24 metros</span>. Os sobreviventes dentro do alcance do Totem Abençoado se beneficiam 
        dos seguintes efeitos:</p>

        <ul>
            <li>Aumenta a velocidade de cura Altruísta em <span style="color:#ffeb3b; font-weight:bold;">50</span>
            /<span style="color:#4caf50; font-weight:bold;">75</span>/<span style="color:#9c27b0; font-weight:bold;
            ">100</span>% quando não utilizado um <span style="color:#e6c200;">Kit Médico</span> .</li>

            <li>Se um Sobrevivente está Ferido, sua <span style="color:#e6c200; ">Aura</span> será revelada 
            para todos os Sobreviventes.</li>
        </ul>

        <p>Os sobreviventes só podem ser afetados por uma instância de Bênção: Círculo Curativo por vez.</p>

        <p>Apenas um Totem pode ser abençoado por suas Vantagens de Bênção de cada vez, e todos os seus efeitos 
        estão ativos no mesmo Totem de Bênção.</p>
        `,

        3: `
        <h2>Bênção: Passos Sombrios</h2>

        <p>Uma dádiva que esconde a verdade. Aperte e segure o botão de habilidade proximo a um Totem vazio 
        ou Amaldiçoado para Abençoa-lo e criar um <span style="color:#e6c200;">Totens Abençoado</span>.</p>

        <p>Sinos suaves tocam em um raio de <span style="color:#e6c200; font-weight:bold;"> 24 m</span>. 
        Os sobreviventes dentro do alcance do Totem Abençoado se beneficiam dos seguintes efeitos:</p>

        <ul>
            <li>Os Sobreviventes não deixam rastros.</li>
            <li>Suas Aura  não irão aparecer para o Assassino.</li>
        </ul>

        <p>Ambos os efeitos perduram por <span style="color:#ffeb3b; font-weight:bold;">2</span>/<span 
        style="color:#4caf50; font-weight:bold;">3</span>/<span style="color:#9c27b0; font-weight:bold;">4</span> 
        segundos após deixar o alcance do Totem Abençoado.</p>

        <p>Você só pode abençoar um Totem por vez. Todas as Vantagem de Benção são ativadas no mesmo Totem Abençoado.</p>
        `
    },

    steve: {
        1: `
        <h2>Babá</h2>

        <p>Enquanto você tem reputação de ser centrado em si mesmo, você arrisca tudo para ajudar aqueles que 
        precisam. O Sobrevivente que você desenganchar não deixa Rastros nem Poças de Sangue por <span style="color:#e6c200; 
        font-weight:bold;">4 segundos</span>.</p>

        <p>Você e o Assassino veem a Aura um do outro por <span style="color:#e6c200; font-weight:bold;">4 segundos</span>.</p>
        `,

        2: `
        <h2>Camaradagem</h2>

        <p>A vida lhe ensinou a importância da amizade, e isso lhe deu forças. Se você for enganchado e estiver 
        na Fase de Debater, Camaradagem se ativa:</p>
        
        <ul>
            <li>Pausa o temporizador da Fase de Debater por <span style="color:#ffeb3b; font-weight:bold;">26</span>
            /<span style="color:#4caf50; font-weight:bold;">30</span>/<span style="color:#9c27b0; font-weight:bold;
            ">34</span> segundos assim que qualquer Sobrevivente chegar a uma distância de <span style="color:#e6c200; 
            font-weight:bold;">16 metros</span> do seu Gancho.</li>
        </ul>
        `,

        3: `
        <h2>Segundo Fôlego</h2>

        <p>Você aprendeu a evitar situações embaraçosas com os pais. Parte de você ainda acha que sua melhor 
        opção é fugir e esperar que as coisas se resolvam sozinhas.</p>

        <p>Quando você cura outro <span style="color:#e6c200;">Sobrevivente</span> para o equivalente a <span 
        style="color:#e6c200;">1 Estado de Saúde</span>, Segundo Fôlego ativa:</p>

        <ul>
            <li>Da próxima vez que você for desenganchado ou se soltar, você sofre com o <span style="color:#e6c200; 
            font-weight:bold;">Quebrado</span> Efeito de status até que o Segundo Fôlego seja desativado.</li>

            <li>Você é curado automaticamente 1 Estado de Saúde após <span style="color:#ffeb3b; font-weight:bold;">
            28</span>/<span style="color:#4caf50; font-weight:bold;">24</span>/<span style="color:#9c27b0; 
            font-weight:bold;">20</span> segundos.</li>
        </ul>

        <p>Enquanto o Segundo Fôlego estiver ativo, as seguintes condições irão desativá-lo:</p>

        <ul>
            <li>Sendo curado com sucesso pelo Segundo Fôlego.</li>
            <li>Sendo colocado no <span style="color:#e6c200;">estado de morte</span> antes que o cronômetro 
            se esgote.</li>
        </ul>

        <p>O Segundo Fôlego não é ativado se você já sofre do Efeito de Status Quebrado.</p>
        `
    },

    elodie: {
        1: `
        <h2>Avaliação</h2>

        <p>Você tem um olho cuidadoso que percebe o que muitos negligenciam.</p>

        <p>Comece o Jogo com 3 Moedas:</p>

        <ul>
            <li>Quando um <span style="color:#e6c200;">Baú</span>  já foi aberto, consuma 1 Moeda para vasculhar por um item.</li>
            
            <li>Vasculhe baús <span style="color:#ffeb3b; font-weight:bold;">40</span>/<span style="color:#4caf50; 
            font-weight:bold;">60</span>/<span style="color:#9c27b0; font-weight:bold;">80</span>% mais rápido.</li>
        </ul>

        <p>Vasculhar está disponível apenas uma vez por baú.</p>
        `,

        2: `
        <h2>Artimanha</h2>

        <p>Seu estilo de vida aventureiro requer momentos de desorientação astuta.</p>

        <p>nteraja com um Armário  enquanto segura o Botão de Corrida para acionar uma 
        notificação de ruído alto para o Assassino em sua localização em vez de entrar no armário.</p>

        <ul>
            <li>Você não deixará nenhuma Marca ou Poças de Sangue pelos próximos <span style="color:#e6c200; font-weight:bold;">3 segundos</span>.</li>
        </ul>
        <p>Artimanha só pode ser ativado uma vez a cada <span style="color:#ffeb3b;font-weight:bold;">60</span>/<span
        style="color:#4caf50; font-weight:bold;">50</span>/<span style="color:#9c27b0; font-weight:bold;">40</span> segundos.</p>
        `,

        3: `
        <h2>Disputa de Forças</h2>

        <p>Você nunca desistiu e não vai começar agora.</p>

        <p>Ao ser carregado pelo assassino, atingir <span style="color:#ffeb3b; font-weight:bold;">35</span>/<span
        style="color:#4caf50; font-weight:bold;">30</span>/<span style="color:#9c27b0; font-weight:bold;">25</span>% 
        da progressão se soltar-se ativa Disputa de Forças:</p>
        
        <ul>
            <li>Você pode derrubar uma Barricada  próxima para atordoar o Assassino e escapar de suas garras.</li>
        </ul>

        <p>Disputa de Forças é desativado após ser ativado com sucesso.</p>
        `
    }
};

const personagem = document.body.getAttribute('data-personagem'); // vai receber o valor do atributo data-personagem que esta no body do html
const habilidades = habilidadesPersonagens[personagem]; // vai receber a informação da constante habilidadesPersonagens e filtrar pelo [personagem]
const imgs = document.querySelectorAll('.habilidade-img'); // vai guardar uma LISTA de todos os elementos no html que têm a classe .habilidade-img
const descContainer = document.getElementById('descricao-hab'); // cria uma constante para o container da descrição, que é a div que vai animar e aparecer
const focoImg = document.getElementById('foco-img-hab'); // constante para o elemento <img> grande, onde a imagem em foco vai aparecer
const focoTexto = document.getElementById('foco-texto-hab'); // constante para a div onde o texto da descrição vai ser injetado

let animacao = false; // cria uma variavel para impedir cliques enquanto uma animação estiver acontecendo

function animarAbertura(img) { // declara a função que vai animar a ABERTURA da caixa de texto ela precisa saber qual 'img' foi clicada
    animacao = true; // ativa a trava, para avisar que uma animação começou
    const hab = img.getAttribute('data-hab'); // pega o numero da habilidade guardado no atributo data-hab da imagem clicada
    const imgSrc = img.getAttribute('src'); // pega o link da imagem clicada para sabermos qual imagem mostrar em foco

    img.classList.add('selecao'); // adiciona a classe 'selecao' na imagem pequena que foi clicada para o CSS aplicar o destaque
    focoImg.src = imgSrc; // define o 'src' da imagem grande para ser o mesmo da imagem pequena clicada
    focoImg.style.opacity = '0'; // deixa a imagem grande invisível por enquanto para esperar a animçao fantasma chegar
    focoTexto.innerHTML = habilidades[hab]; // pega o texto da habilidade no "banco de dados" e coloca dentro da div de texto
    focoTexto.style.opacity = '1'; // deixa o texto da descrição visível
    descContainer.classList.add('active'); // adiciona a classe 'active' no container da descrição para o CSS fazer ele aparecer

    descContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); // rola a pagina suavemente para que o container da descrição fique no centro da tela

    requestAnimationFrame(() => { // pede ao navegador para esperar o momento certo para começar a animação
        const currentScrollY = window.scrollY; // verifica o quanto a página já foi rolada para baixo
        const startRect = img.getBoundingClientRect(); // mede a posição e o tamanho da imagem PEQUENA
        const endRect = focoImg.getBoundingClientRect(); // mede a posição e o tamanho da imagem GRANDE

        const ghost = new Image(); // cria um novo elemento na memória que será o "fantasma"
        ghost.src = imgSrc; // define a imagem do fantasma para ser a mesma da habilidade
        ghost.className = 'habilidade-ghost'; // adiciona a classe CSS .habilidade-ghost no fantasma para o CSS dar o position: absolute
        ghost.style.position = 'absolute'; // define a posição do fantasma como absolute para ele flutuar sobre a página
        ghost.style.left = `${startRect.left}px`; // posiciona o fantasma exatamente na horizontal da imagem pequena
        ghost.style.top = `${startRect.top + currentScrollY}px`; // posiciona o fantasma na vertical corrigindo com o scroll da página
        ghost.style.width = `${startRect.width}px`; // define a largura do fantasma igual à da imagem pequena
        ghost.style.height = `${startRect.height}px`; // define a altura do fantasma igual à da imagem pequena

        document.body.appendChild(ghost); // coloca o fantasma na página HTML no body

        requestAnimationFrame(() => { // pede um novo frame agora sim para animar o fantasma que já está na tela
            ghost.style.left = `${endRect.left}px`; // diz ao fantasma para se mover para a posição horizontal da imagem grande
            ghost.style.top = `${endRect.top + currentScrollY}px`; // diz ao fantasma para se mover para a posição vertical da imagem grande
            ghost.style.width = `${endRect.width}px`; // diz ao fantasma para aumentar sua largura para a da imagem grande
            ghost.style.height = `${endRect.height}px`; // diz ao fantasma para aumentar sua altura para a da imagem grande
            ghost.style.border = '2px solid white'; // adiciona a borda branca no fantasma durante a animação
        });

        ghost.addEventListener('transitionend', () => { // cria um ouvinte para esperar a animação do fantasma TERMINAR o transitionend
            ghost.remove(); // quando a animação termina remove o fantasma da página
            focoImg.style.opacity = '1'; // depois que o fantasma sumiu mostra a imagem grande REAL que estava opacidade 0
            animacao = false; // destrava a animação permitindo novos cliques
        });
    });
} 

// IGUAL A FUNÇÃO DE CIMA SO QUE DESSA VEZ FAZENDO O INVERSO PARA FECHAR A ABA

function animarFechamento(img) { // declara a função que vai animar o fechamento da caixa ela precisa saber qual 'img' foi clicada
    animacao = true; // ativa a trava avisando que uma animação começou
    const scrollY = window.scrollY; // verifica o quanto a pagina ja foi rolada para baixo
    const startRect = focoImg.getBoundingClientRect(); // mede a posição da imagem grande
    const endRect = img.getBoundingClientRect(); // mede a posição da imagem pequena

    const ghost = new Image(); // cria um novo elemento <img> na memoria para ser o fantasma
    ghost.src = focoImg.src; // define a imagem do fantasma ele ja começa grande
    ghost.className = 'habilidade-ghost'; // adiciona a classe CSS .habilidade-ghost no fantasma
    ghost.style.position = 'absolute'; // define a posição do fantasma como absolute
    ghost.style.left = `${startRect.left}px`; // posiciona o fantasma exatamente na horizontal da imagem grande
    ghost.style.top = `${startRect.top + scrollY}px`; // posiciona o fantasma na vertical da imagem grande corrigindo com o scroll
    ghost.style.width = `${startRect.width}px`; // define a largura do fantasma igual à da imagem grande
    ghost.style.height = `${startRect.height}px`; // define a altura do fantasma igual à da imagem grande
    ghost.style.border = '2px solid white'; // o fantasma ja começa com a borda branca

    document.body.appendChild(ghost); // coloca o fantasma grande na pagina

    descContainer.classList.remove('active'); // remove a classe 'active' do container para o CSS fazer ele desaparecer
    focoImg.style.opacity = '0'; // esconde a imagem grande REAL o fantasma esta no lugar dela

    requestAnimationFrame(() => { // pede um frame para começar a animação de "volta"
        ghost.style.left = `${endRect.left}px`; // diz ao fantasma para se mover para a posição horizontal da imagem pequena
        ghost.style.top = `${endRect.top + scrollY}px`; // diz ao fantasma para se mover para a posição vertical da imagem pequena
        ghost.style.width = `${endRect.width}px`; // diz ao fantasma para diminuir sua largura para a da imagem pequena
        ghost.style.height = `${endRect.height}px`; // diz ao fantasma para diminuir sua altura para a da imagem pequena
        ghost.style.border = 'none'; // remove a borda durante a animação de volta
        ghost.style.opacity = '0'; // faz o fantasma desaparecer enquanto ele encolhe
    });

    ghost.addEventListener('transitionend', () => { // cria um ouvinte para esperar a animação do fantasma TERMINAR
        ghost.remove(); // quando a animação termina remove o fantasma da página
        animacao = false; // destrava a animação permitindo novos cliques
        img.classList.remove('selecao'); // remove a classe selecao da imagem pequena
    }); 
}

function trocarConteudo(img) { // declara a função que vai TROCAR o conteúdo quando a caixa já está aberta
    animacao = true; // ativa a trava avisando que uma animação começou

    focoImg.style.opacity = '0'; // faz a imagem grande atual desaparecer
    focoTexto.style.opacity = '0'; // faz o texto atual desaparecer

    setTimeout(() => { // cria um timer de 300ms para esperar o fade out terminar antes de trocar
        const hab = img.getAttribute('data-hab'); // pega o data-hab da nova imagem clicada
        const imgSrc = img.getAttribute('src'); // pega o src da nova imagem clicada

        imgs.forEach(i => i.classList.remove('selecao')); // remove a classe selecao de todas as imagens pequenas
        img.classList.add('selecao'); // adiciona a selecao apenas na nova imagem pequena clicada

        focoImg.src = imgSrc; // troca a imagem grande enquanto ela ainda está invisível
        focoTexto.innerHTML = habilidades[hab]; // troca o texto enquanto ele ainda está invisível

        focoImg.style.opacity = '1'; // faz a nova imagem grande aparecer 
        focoTexto.style.opacity = '1'; // faz o NOVO texto aparecer

        descContainer.scrollIntoView({ behavior: 'smooth', block: 'center' }); // rola a página suavemente para o container 

        animacao = false; // destrava a animação permitindo novos cliques
    }, 300);
}

if (imgs.length && descContainer && focoImg && focoTexto && habilidades) { //so roda o codigo se todos os elementos principais existirem

    imgs.forEach(img => { // para cada uma das imagens pequenas vai ser feito o seguinte:
        img.addEventListener('click', function () { // adiciona um ouvinte de clique em cada imagem pequena

            if (animacao) return; // se uma animação estiver rodando (animacao é true) PARE (return) e ignore o clique

            const jaSelecionado = this.classList.contains('selecao'); // verifica se a imagem clicada ja tem a classe selecao
            const caixaAberta = descContainer.classList.contains('active'); // verifica se o container da descrição ja tem a classe active (se está aberto)

            if (jaSelecionado) { // SE a imagem clicada JÁ ESTAVA selecionada...
                animarFechamento(this); // ...então o usuário quer FECHAR. Rode a função 'animarFechamento'

            } else if (caixaAberta) { // SE NÃO, SE a caixa JÁ ESTAVA aberta (e o usuário clicou em outra imagem)...
                trocarConteudo(this); // ...então o usuário quer TROCAR. Rode a função 'trocarConteudo'

            } else { // SE NENHUMA das anteriores (se a caixa estava fechada)...
                animarAbertura(this); // ...então o usuário quer ABRIR. Rode a função 'animarAbertura'
            }
        });
    });
}