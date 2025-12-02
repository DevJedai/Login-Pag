// Criar estrelas
function createStars() {
    const container = document.querySelector('.stars');
    for (let i = 0; i < 150; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = (1 + Math.random() * 3) + 's';
        container.appendChild(star);
    }
}
createStars();


<script>
// Criar estrelas discretas
function createStars() {
    const container = document.querySelector('.stars');
    for (let i = 0; i < 120; i++) {
        let star = document.createElement('div');
        star.classList.add('star');

        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = (1.5 + Math.random() * 3) + 's';

        container.appendChild(star);
    }
}
createStars();

// Criar cometas leves
function spawnComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');

    comet.style.top = Math.random() * 40 + '%';
    comet.style.left = (60 + Math.random() * 30) + '%';

    document.body.appendChild(comet);

    setTimeout(() => comet.remove(), 2000);
}

// Frequência controlada (não exagerado)
setInterval(() => {
    spawnComet();

    // Cometa duplo O-F-E-G-A, só de vez em quando
    if (Math.random() > 0.8) {
        setTimeout(spawnComet, 350);
    }

}, Math.random() * 1500 + 2000); 
// entre 2s e 3.5s
</script>