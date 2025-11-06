const habilidadesPersonagens = { 
    artista: {
        1: `
            <h2>Pássaros do Tormento</h2>

            <img src="../../img/perks/killer/artista/artista.jpg" alt="Poder da Artista" class="img-historia">

            <p>Chame até 3 Corvos Cruéis e mande-os voando. Os Corvos Cruéis em voo causam
             dano por uma breve duração. Caso voem além da trajetória de voo estabelecida, 
             os Corvos Cruéis deixarão de causar dano aos Sobreviventes, mas os rodearão. 
             Sobreviventes rodeados sofrerão dano se atingidos por um Corvo Cruel.</p>
        `,

        2: `
            <h2>Abraço Sinistro</h2>

            <p>Seu ato de servidão à Entidade não passou despercebido.</p>

            <p>Cada vez que um Sobrevivente é enganchado pela primeira vez, Abraço Sinistro ganha 
            +1 Token e é ativado quando você estiver a pelo menos <span style="color:#FF8800; font-weight:bold;">16 metros</span> de distância do Gancho</p>

            <ul>
                <li><span style="color:#418284; font-weight:bold;">1-3 Tokens</span>: Bloqueia todos os Geradores por <span style="color:#ffeb3b; font-weight:bold;">6</span>/<span style="color:#4caf50; 
                font-weight:bold;">8</span>/<span style="color:#9c27b0; font-weight:bold;">10</span> segundos.</li>
                <li><span style="color:#418284; font-weight:bold;">4 Tokens</span>: Bloqueia todos os Geradores por <span style="color:#D41320; font-weight:bold;">40 segundos</span> e a Aura do Obsessão é revelado a você por <span style="color:#9F1F78; font-weight:bold;">6 segundos</span>.</li>
            </ul>
        `,

        3: `
            <h2>Feitiço: Pentimento</h2>

            <p>Você revela o verdadeiro poder dos Totens, escondido em seus restos mortais.</p>

            <ul>
                <li>Você vê as auras de Totens purificados.</li>
            </ul>

            <p> Você pode realizar um ritual em um Totem purificado para ressuscitá-lo como um Totem Reacendido.
                Para cada Totem Reacendido ativo ao mesmo tempo, Hex: Pentimento ganha um efeito adicional:</p>
            
            <ul>
                <li><span style="color:#418284; font-weight:bold;">1 Totem</span>: reduz a velocidade de reparo de todos os sobreviventes em <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
            font-weight:bold;">25</span>/<span style="color:#9c27b0; font-weight:bold;">30</span>%.</li>

                <li><span style="color:#418284; font-weight:bold;">2 Totens</span>: reduz a velocidade de cura de todos os sobreviventes em <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
            font-weight:bold;">25</span>/<span style="color:#9c27b0; font-weight:bold;">30</span>%.</li>

                <li><span style="color:#418284; font-weight:bold;">3 Totens</span>: reduz a velocidade de recuperação de todos os sobreviventes de serem derrubados em <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
            font-weight:bold;">25</span>/<span style="color:#9c27b0; font-weight:bold;">30</span>%.</li>

                <li><span style="color:#418284; font-weight:bold;">4 Totens</span>: reduz a velocidade de abertura de todos os portões dos sobreviventes em <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
            font-weight:bold;">25</span>/<span style="color:#9c27b0; font-weight:bold;">30</span>%.</li>

                <li><span style="color:#418284; font-weight:bold;">5 Totens</span>: todos os Totens são permanentemente bloqueados pela Entidade.</li>
            </ul>

            <p>Quando um Totem Reacendido é purificado, seus restos são consumidos pela Entidade e não podem ser reacendidos.</p>
        `,
        4: `
            <h2>Gancho do Tormento: Ressonância da Dor</h2>

            <p>A dor avassaladora reverbera para fora. No início do Teste, 4 Ganchos aleatórios são transformados em Ganchos do Flagelo:</p>

            <ul>
                <li>As Auras dos Ganchos do Flagelo são revelados a você em branco.</li>
            </ul>

            <p>Você começa o Teste com 4 Tokens no Gancho do Flagelo: Ressonância da Dor.</p>

            <p>Cada vez que um Sobrevivente é fisgado em um Gancho do Flagelo pela primeira vez, 
                1 Ficha é consumida e os seguintes efeitos se aplicam:</p>
    
            <ul>
                <li>O gerador com mais Progressão explode e regride instantaneamente em <span style="color:#ffeb3b; font-weight:bold;">10</span>/<span style="color:#4caf50; 
                font-weight:bold;">15</span>/<span style="color:#9c27b0; font-weight:bold;">20</span>% de sua Progressão total.</li>
                
                <li>A Regressão do Gerador Normal se aplica posteriormente.</li>
                
                <li>Todos os Sobreviventes que consertarem esse Gerador gritarão, mas não revelarão sua localização.</li>
            </ul>

            <p>Gancho do Flagelo: Ressonância da Dor é desativado pelo restante do partida quando todos os Tokens são consumidos.</p>

        `,

        5: `
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/artista/mori.gif" alt="Memento Mori da Artista" class="img-historia">

        `
    },

    canibal: {
        1: `
            <h2>Motosserra</h2>

            <img src="../../img/perks/killer/canibal/canibal.jpg" alt="Poder do Canibal" class="img-historia">

            <p>Dê partida na Motosserra e desfira um ataque amplo devastador, derrubando instantaneamente qualquer 
            Sobrevivente no caminho. A Motosserra pode gastar até 3 cargas para um golpe mais amplo, recarregando 
            sempre que não estiver em uso.</p>
        `,

        2: `
            <h2>Nocaute</h2>

            <p>O trauma causado por seus ataques brutais torna o choro por ajuda dolorosamente difícil.</p>
            
            <p>Colocando um sobrevivente no estado de morte com seu Ataque Básico bloqueia sua Aura de ser revelado 
            a qualquer Sobrevivente, que esteja a mais de <span style="color:#ffeb3b; font-weight:bold;">32</span>/
            <span style="color:#4caf50; font-weight:bold;">24</span>/<span style="color:#9c27b0; font-weight:bold;">
            16</span> metros de distância deles.</p>
            
            <p>Pelos próximos <span style="color:#FF8800; font-weight:bold;">15 segundos</span>, os seguintes efeitos 
            se aplicam ao Sobrevivente moribundo:</p>
            
            <ul>
                <li>Reduz seu campo de visão e faz com que eles fiquem surdos.</li>
                <li>Sofre com o Cegueira Efeito de status.</li>
                <li>Reduz a velocidade de rastreamento em <span style="color:#FF8800; font-weight:bold;">-50%</span>.</li>
                <li>Reduz a velocidade de recuperação em <span style="color:#FF8800; font-weight:bold;">-25%</span>.</li>
            </ul>
        `,

        3: `
            <h2>Churrasco com Chili</h2>

            <p>Um vínculo profundo com a Entidade desbloqueia o potencial na habilidade de leitura de Aura.</p>
            
            <ul>
                <li>Depois de enganchar um Sobrevivente, todos os Sobreviventes que estiverem a pelo menos <span 
                style="color:#ffeb3b; font-weight:bold;">60</span>/<span style="color:#4caf50; font-weight:bold;">
                50</span>/<span style="color:#9c27b0; font-weight:bold;">40</span> metros de distância desse Gancho 
                terão sua Aura revelado a você por <span style="color:#FF8800; font-weight:bold;">5 segundos</span>.</li>
            </ul>
        `,

        4: `
            <h2>A Morte de Franklin</h2>

            <p>Seus ataques básicos cruéis fazem com que os sobreviventes soltem seus itens No impacto:</p>
            
            <ul>
                <li>Faz com que os itens deixados percam lentamente suas cargas ao longo de <span style="color:
                #ffeb3b; font-weight:bold;">150</span>/<span style="color:#4caf50; font-weight:bold;">120</span>
                /<span style="color:#9c27b0; font-weight:bold;">90</span> segundos.</li>
                <li>As Auras dos itens largados são revelados a você em um raio de <span style="color:#FF8800; 
                font-weight:bold;">32 metros</span>.</li>
                <li>O nível de esgotamento é indicado pela cor da Aura, variando do <span style="font-weight:bold;
                ">branco</span> ao <span style="font-weight:bold;">vermelho</span> à medida que o cronômetro passa.</li>
            </ul>
        `,

        5: `
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/canibal/mori.gif" alt="Memento Mori da Artista" class="img-historia">

        `
    },

    enfermeira: {
        1: `
            <h2>Último Suspiro de Spencer</h2>

            <img src="../../img/perks/killer/enfermeira/enfermeira.jpg" alt="Poder da Enfermeira" class="img-historia">

            <p>Carregue um Teletransporte para se deslocar a uma grande distância, ganhando rapidamente 
            a possibilidade de carregar um segundo Teletransporte. Quando todos os Teletransportes estiverem 
            gastos, a Enfermeira pode escolher atacar antes que seja acometida brevemente de fadiga.</p>
        `,

        2: `
            <h2>Chamado da Enfermeira</h2>

            <p>Desbloqueia o potencial em sua habilidade de leitura de Aura.</p>
            
            <ul>
                <li>As Auras dos Sobreviventes que estão se curando ou sendo curados são revelados a você d
                entro de <span style="color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; 
                font-weight:bold;">24</span>/<span style="color:#9c27b0; font-weight:bold;">28</span> metros.</li>
            </ul>
        `,

        3: `
            <h2>Estridor</h2>

            <p>Você é extremamente sensível à respiração de sua presa.</p>
            
            <ul>
                <li>Aumenta o volume de Grunhidos de Dor de Sobreviventes feridos em <span style="color:#ffeb3b; 
                font-weight:bold;">30</span>/<span style="color:#4caf50; font-weight:bold;">40</span>/<span 
                style="color:#9c27b0; font-weight:bold;">50</span> %.</li>

                <li>Aumenta o volume de respiração regular dos Sobreviventes em <span style="color:#ffeb3b; 
                font-weight:bold;">15</span>/<span style="color:#4caf50; font-weight:bold;">20</span>/<span 
                style="color:#9c27b0; font-weight:bold;">25</span> %.</li>
            </ul>
        `,

        4: `
            <h2>Tanatofobia</h2>

            <p>Sua coragem se desvanece diante de sua inegável mortalidade.</p>
            
            <ul>
                <li>Cada Sobrevivente ferido, moribundo ou enganchado aflige os Sobreviventes com uma penalidade 
                acumulável de <span style="color:#ffeb3b; font-weight:bold;">1</span>/<span style="color:#4caf50; 
                font-weight:bold;">1,5</span>/<span style="color:#9c27b0; font-weight:bold;">2</span>% de Velocidade 
                de Ação para Reparar, Sabotar e Limpar, até um máximo de <span style="color:#ffeb3b; font-weight:bold;
                ">4</span>/<span style="color:#4caf50; font-weight:bold;">6</span>/<span style="color:#9c27b0; 
                font-weight:bold;">8</span>%.</li>

                <li>Aumenta a penalidade de Velocidade de Ação em mais <span style="color:#FF8800; font-weight:bold;">
                12 %</span>, se houver 4 Sobreviventes, que estão feridos, morrendo ou enganchados ao mesmo tempo.</li>
            </ul>
        `,

        5: `
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/enfermeira/mori.gif" alt="Memento Mori da Artista" class="img-historia">

        `
    },

    espectro: {
        1: `
            <h2>Sino das Lamentações</h2>

            <img src="../../img/perks/killer/espectro/espectro.jpg" alt="Poder do Espectro" class="img-historia">

            <p>Toque o Sino das Lamentações para ficar invisível e perder o Raio de Terror. Embora o Espectro 
            não possa atacar invisível, retirar a invisibilidade possibilita um bote letal capaz de ferir 
            Sobreviventes desavisados. Lembre-se: o Espectro fica um pouco mais fácil de enxergar de perto, 
            e o Sino das Lamentações toca bem alto quando ele fica ou deixa de estar invisível.</p>
        `,

        2: `
            <h2>Predador</h2>

            <p>Sua habilidade aguçada de localizar Sobrevivente te permite aprimorar os distúrbios acusados 
            por Sobreviventes correndo.</p>
            
            <p>Rastros deixados por Sobreviventes vão ser gerados <span style="color:#ffeb3b; font-weight:bold;">
            levemente</span>/<span style="color:#4caf50; font-weight:bold;">moderadamente</span>/<span style="
            color:#9c27b0; font-weight:bold;">consideravelmente</span> mais juntos.</p>
        `,

        3: `
            <h2>Cão de Caça</h2>

            <p>Como um cão caçador de aromas, você cheira traços de sangue a uma grande distância.</p>
            
            <p>Manchas de Sangue frescas são consideravelmente mais discerníveis que o normal e podem ser localizadas 
            por <span style="color:#ffeb3b; font-weight:bold;">2</span>/<span style="color:#4caf50; font-weight:bold;
            ">3</span>/<span style="color:#9c27b0; font-weight:bold;">4</span> segundos a mais.</p>
        `,

        4: `
            <h2>Nascido das Sombras</h2>

            <p>Você tem uma visão aguçada na escuridão da noite.</p>
            
            <p>Seu campo de visão é <span style="color:#ffeb3b; font-weight:bold;">moderadamente</span>/<span 
            style="color:#4caf50; font-weight:bold;">consideravelmente</span>/<span style="color:#9c27b0; 
            font-weight:bold;">tremendamente</span> mais largo que o normal.</p>
            
            <p>Os ganhos de Campo de Visão não se acumulam.</p>
        `,

        5: `
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/espectro/mori.gif" alt="Memento Mori da Artista" class="img-historia">

        `,
    },

    vilao: {
        1: `
            <h2>Salto Virulento</h2>

            <img src="../../img/perks/killer/vilao/vilao.jpg" alt="Poder do Vilão" class="img-historia">

            <p><strong>Habilidade Especial – Salto Virulento:</strong> carregue seu Salto Virulento e se lance para 
            frente em um ataque. Se o seu Salto colidir com um Sobrevivente, ele será temporariamente infectado com o 
            Uroboros.</p>
            
            <p>A partir de então, uma das duas situações a seguir ocorrerá. A primeira: Wesker colide com a 
            superfície enquanto segura um Sobrevivente, que sofre ferimentos. A segunda: Wesker não colide com 
            nada e lança o Sobrevivente para frente, deixando-o Ferido se colidir com a superfície.</p>
            
            <p><strong>Efeito Especial – Infecção do Uroboros:</strong>
            quando um Sobrevivente é atingido pelo Salto Virulento, fica infectado pelo Uroboros e passa a sofrer de 
            Lentidão no auge da Infecção. Se Wesker acertar um Sobrevivente no auge da Infecção com um Salto Virulento, ele será carregado instantaneamente.</p>
        `,

        2: `
            <h2>Anatomia Superior</h2>

            <p>Anos de pesquisa culminaram no seu físico: mais forte, rápido e perigoso do que qualquer humano 
            normal.</p>
            
            <p>A vantagem se ativará quando um Sobrevivente realizar um pulo rápido dentro de um raio de <span 
            style="color:#FF8800; font-weight:bold;">8 metros</span> de você.</p>
            
            <ul>
                <li>Da próxima vez que você pular por uma Janela, a velocidade de pulo aumentará em <span 
                style="color:#ffeb3b; font-weight:bold;">30</span>/<span style="color:#4caf50; font-weight:bold;">
                35</span>/<span style="color:#9c27b0; font-weight:bold;">40</span> %.</li>
            </ul>
            
            <p>A vantagem deixará de fazer efeito quando você pular por uma janela.</p>
            
            <p>Tempo de recarga de <span style="color:#FF8800; font-weight:bold;">30 segundos</span>.</p>
        `,

        3: `
            <h2>Percepção Refinada</h2>

            <p>Seus genes foram alterados para reforçar os sentidos em situações intensas.</p>
            
            <ul>
                <li>Ao carregar um Sobrevivente, você enxerga a Aura dos outros a até <span style="color:#ffeb3b; 
                font-weight:bold;">16</span>/<span style="color:#4caf50; font-weight:bold;">18</span>/<span 
                style="color:#9c27b0; font-weight:bold;">20</span> metros de você.</li>
            </ul>
        `,

        4: `
            <h2>Terminus</h2>

            <p>Você é um estrategista genial, preparado para qualquer eventualidade.</p>
            
            <p>A vantagem se ativa quando os Portões de Saída são energizados. Enquanto Terminus estiver ativo:</p>
            
            <ul>
                <li>Sobreviventes enganchados, feridos ou derrubados recebem o efeito do estado Quebrado até os 
                portões de saída se abrirem.</li>
                <li>Quando os portões estiverem abertos, os Sobreviventes ficarão Quebrados por mais <span style="
                color:#ffeb3b; font-weight:bold;">20</span>/<span style="color:#4caf50; font-weight:bold;">25</span>/
                <span style="color:#9c27b0; font-weight:bold;">30</span> segundos.</li>
            </ul>
            
            <p>Quebrado impede que Sobreviventes sejam curados.</p>
        `,

        5: `
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/vilao/mori.gif" alt="Memento Mori do vilão" class="img-historia">

        `
    },

    vulto: {
        1: `
            <h2>Maldade Encarnada</h2>

            <img src="../../img/perks/killer/vulto/vulto.jpg" alt="Poder do Vulto" class="img-historia">

            <p>O Vulto tem três níveis de Maldade Encarnada, que cresce conforme ele espreita Sobreviventes. 
            No Nível 1, o Vulto não tem Raio de Terror e pouca velocidade e investida. No Nível 2, ele tem um 
            Raio de Terror reduzido e velocidade e investida normais. No Nível 3, ele pode derrubar Sobreviventes 
            instantaneamente com uma investida letal ampliada por uma duração estendida antes de voltar ao Nível 2.</p>
        `,

        2: `
            <h2>Deixe o Melhor para o Final</h2>

            <p>Você fica obcecado por um Sobrevivente.</p>
            
            <p>Ganhe uma Ficha por atacar com sucesso um Sobrevivente que não seja a Obsessão.</p>
            
            <p>Cada Ficha garante <span style="color:#FF8800; font-weight:bold;">5 %</span> de bônus acumulável no 
            tempo de recarga de ataque bem-sucedidos. Você pode ganhar até <span style="color:#FF8800; font-weight:
            bold;">8 Fichas</span>.</p>
            
            <p>Atacar sua Obsessão vai te fazer perder <span style="color:#ffeb3b; font-weight:bold;">4</span>/<span 
            style="color:#4caf50; font-weight:bold;">3</span>/<span style="color:#9c27b0; font-weight:bold;">2</span> 
            Fichas. Você não pode mais ganhar Fichas se sua Obsessão é sacrificada ou morta.</p>
            
            <p>Só uma Obsessão por partida.</p>
        `,

        3: `
            <h2>Brinque com a sua Comida</h2>

            <p>Você fica obcecado por um Sobrevivente.</p>
            
            <p>Toda vez que você perseguir sua Obsessão e deixá-la, você recebe uma Ficha até um máximo de <span 
            style="color:#FF8800; font-weight:bold;">3 Fichas</span>.</p>
            
            <p>Cada Ficha aumenta sua velocidade de movimento em <span style="color:#ffeb3b; font-weight:bold;">3
            </span>/<span style="color:#4caf50; font-weight:bold;">4</span>/<span style="color:#9c27b0; font-weight:
            bold;">5</span> %.</p>
            
            <p>Cada ação ofensiva gasta uma Ficha.</p>
            
            <p>Só uma Obsessão por partida.</p>
        `,

        4: `
            <h2>Perdendo a Esperança</h2>

            <p>Você fica obcecado por um Sobrevivente.</p>
            
            <p>Sua Obsessão ganha <span style="color:#FF8800; font-weight:bold;">33%</span> de bônus na velocidade de 
            ações altruísticas.</p>
            
            <p>Cada vez que você enganchar um Sobrevivente que não é a Obsessão com a Obsessão viva, você ganha uma 
            Ficha.</p>
            
            <p>Se a Obsessão estiver viva, todos os Sobreviventes ganharão uma penalidade de <span style="color:
            #ffeb3b; font-weight:bold;">2</span>/<span style="color:#4caf50; font-weight:bold;">2.5</span>/<span 
            style="color:#9c27b0; font-weight:bold;">3</span> % na velocidade de reparo, cura e sabotagem para cada 
            Ficha.</p>
            
            <p>O Assassino só pode ficar obcecado por um Sobrevivente por vez.</p>
        `,

        5: `
        
            <h2>Memento Mori</h2>

            <img src="../../img/perks/killer/vulto/mori.gif" alt="Memento Mori do Vulto" class="img-historia">
        `
    },
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