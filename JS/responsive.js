//tornar o menu responsivo e ajustar comportamento ao redimensionar
(function () {
    const btn = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    if (!btn || !menu) return;

    //em telas pequenas colapsar o menu
    function setInitialState() {
        if (window.innerWidth <= 800) {
            menu.classList.add('collapsed');
            btn.setAttribute('aria-expanded', 'false');
        } else {
            menu.classList.remove('collapsed');
            btn.setAttribute('aria-expanded', 'true');
        }
    }

    //alterna a visibilidade do menu quando o botão é clicado
    btn.addEventListener('click', function () {
        const collapsed = menu.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', (!collapsed).toString());
    });

    //ajusta ao redimensionar a janela
    let resizeTimeout = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setInitialState, 120);
    });

    document.addEventListener('DOMContentLoaded', setInitialState);
    setInitialState();
})();
