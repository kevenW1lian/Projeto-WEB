(function () {
    const btn = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    if (!btn || !menu) return;
    
    function setInitialState() {
        if (window.innerWidth <= 800) {
            menu.classList.add('collapsed');
            btn.setAttribute('aria-expanded', 'false');
        } else {
            menu.classList.remove('collapsed');
            btn.setAttribute('aria-expanded', 'true');
        }
    }

    btn.addEventListener('click', function () {
        const collapsed = menu.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', (!collapsed).toString());
    });

    let resizeTimeout = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setInitialState, 120);
    });

    document.addEventListener('DOMContentLoaded', setInitialState);
    setInitialState();
})();
