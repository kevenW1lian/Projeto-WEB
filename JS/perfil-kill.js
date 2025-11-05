// SCRIPT DAS HABILIDADES

const habilidadesPersonagens = { // constante que vai servir como uma especie de "banco de dados" guardando as informações dos personagens para que as funções a frente possam recuperar e retornar no html
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