(function () {
    const btn = document.getElementById('btn-menu');   //ele cria uma variavel constante chaamda btn e que vai receber o elemento do documento que tem o id btn-menu
    const menu = document.getElementById('menu');   //aqui ele segue a mesma logica so que para o menu

    if (!btn || !menu) return;   //aqui vai ser verificado se a variavel btn OU a menu NÃO foram encontradas: se !btn for true (pq btn é falsy) OU !menu for true (pq menu é falsy), a função VAI PARAR (return) pq um dos dois elementos não foi encontrado.
    
    function setInitialState() {
        if (window.innerWidth <= 800) {   //condicional para ver se a quantidade de pixel da janela no momento é menor ou igual a 800
            menu.classList.add('collapsed');   //aqui ele vai adicionar a classe collapsed no menu
            btn.setAttribute('aria-expanded', 'false');   //e aqui ele esta chamando a função para adicionar o atributo aria-expanded e difinir ele com o valor false para que o menu esteja colapsado
        } else {   //se a quantidade de pixel for maior que 800
            menu.classList.remove('collapsed');   //entao remova a classe collpased do menu
            btn.setAttribute('aria-expanded', 'true');   //e informe que o menu esta visivel 
        }
    }

    btn.addEventListener('click', function () {   //vai esperar um evento que no caso é um click e com isso vai iniciar uma função anonima
        const collapsed = menu.classList.toggle('collapsed');   //cria a variavel collpased para que ela receba quando o status do menu mudar entre aberto ou fechado pela função toggle
        btn.setAttribute('aria-expanded', (!collapsed).toString());   //aqui ele vai atualizar o atributo do btn aria-expaneded para o valor contrario do collapsed atual (se tiver fechado o collpase é true) (se tiver aberto o collpase é false) e o !collapsed vai inverter essa valor para confirmar o status atual do menu. E para enviar para o html para ele poder atualizar, mas como o valor precisa ser string e o !collapsed retorna boolean, ele usa o toString() para converter o valor para string
    }); //essa função faz o menu colapsado aparecer

    let resizeTimeout = null;   //define uma variavel alteravel chamada resizeTimeout e inicia ela com null
    window.addEventListener('resize', function () {   //espera um evento de redimensionamento da janela e inicia uma função anonima
        clearTimeout(resizeTimeout);   //limpa o timeout anterior para evitar que a função seja chamada muitas vezes durante o redimensionamento
        resizeTimeout = setTimeout(setInitialState, 120);   //define um novo timeout para chamar a função setInitialState após 120 milissegundos do final do redimensionamento
    });

    document.addEventListener('DOMContentLoaded', setInitialState);   //espera o carregamento completo do conteudo do documento e chama a função
    setInitialState();   //chama a função para definir o estado inicial do menu
})();
