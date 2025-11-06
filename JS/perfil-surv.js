const habilidadesPersonagens = {
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

const personagem = document.body.getAttribute('data-personagem');
const habilidades = habilidadesPersonagens[personagem];
const imgs = document.querySelectorAll('.habilidade-img');
const descContainer = document.getElementById('descricao-hab');
const focoImg = document.getElementById('foco-img-hab');
const focoTexto = document.getElementById('foco-texto-hab');

let animacao = false;

function animarAbertura(img) {
    animacao = true;
    const hab = img.getAttribute('data-hab');
    const imgSrc = img.getAttribute('src');

    img.classList.add('selecao');
    focoImg.src = imgSrc;
    focoImg.style.opacity = '0';
    focoTexto.innerHTML = habilidades[hab];
    focoTexto.style.opacity = '1';
    descContainer.classList.add('active');

    descContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const startRect = img.getBoundingClientRect();
        const endRect = focoImg.getBoundingClientRect();

        const ghost = new Image();
        ghost.src = imgSrc;
        ghost.className = 'habilidade-ghost';
        ghost.style.position = 'absolute';
        ghost.style.left = `${startRect.left}px`;
        ghost.style.top = `${startRect.top + currentScrollY}px`;
        ghost.style.width = `${startRect.width}px`;
        ghost.style.height = `${startRect.height}px`;

        document.body.appendChild(ghost);

        requestAnimationFrame(() => {
            ghost.style.left = `${endRect.left}px`;
            ghost.style.top = `${endRect.top + currentScrollY}px`;
            ghost.style.width = `${endRect.width}px`;
            ghost.style.height = `${endRect.height}px`;
            ghost.style.border = '2px solid white';
        });

        ghost.addEventListener('transitionend', () => {
            ghost.remove();
            focoImg.style.opacity = '1';
            animacao = false;
        });
    });
}

function animarFechamento(img) {
    animacao = true;
    const scrollY = window.scrollY;
    const startRect = focoImg.getBoundingClientRect();
    const endRect = img.getBoundingClientRect();

    const ghost = new Image();
    ghost.src = focoImg.src;
    ghost.className = 'habilidade-ghost';
    ghost.style.position = 'absolute';
    ghost.style.left = `${startRect.left}px`;
    ghost.style.top = `${startRect.top + scrollY}px`;
    ghost.style.width = `${startRect.width}px`;
    ghost.style.height = `${startRect.height}px`;
    ghost.style.border = '2px solid white';

    document.body.appendChild(ghost);

    descContainer.classList.remove('active');
    focoImg.style.opacity = '0';

    requestAnimationFrame(() => {
        ghost.style.left = `${endRect.left}px`;
        ghost.style.top = `${endRect.top + scrollY}px`;
        ghost.style.width = `${endRect.width}px`;
        ghost.style.height = `${endRect.height}px`;
        ghost.style.border = 'none';
        ghost.style.opacity = '0';
    });

    ghost.addEventListener('transitionend', () => {
        ghost.remove();
        animacao = false;
        img.classList.remove('selecao');
    });
}

function trocarConteudo(img) {
    animacao = true;

    focoImg.style.opacity = '0';
    focoTexto.style.opacity = '0';

    setTimeout(() => {
        const hab = img.getAttribute('data-hab');
        const imgSrc = img.getAttribute('src');

        imgs.forEach(i => i.classList.remove('selecao'));
        img.classList.add('selecao');

        focoImg.src = imgSrc;
        focoTexto.innerHTML = habilidades[hab];

        focoImg.style.opacity = '1';
        focoTexto.style.opacity = '1';

        descContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

        animacao = false;
    }, 300);
}

if (imgs.length && descContainer && focoImg && focoTexto && habilidades) {

    imgs.forEach(img => {
        img.addEventListener('click', function () {

            if (animacao) return;

            const jaSelecionado = this.classList.contains('selecao');
            const caixaAberta = descContainer.classList.contains('active');

            if (jaSelecionado) {
                animarFechamento(this);

            } else if (caixaAberta) {
                trocarConteudo(this);

            } else {
                animarAbertura(this);
            }
        });
    });
}