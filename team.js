function showSquad(id) {
    const cards = document.querySelectorAll('.squad-card');
    cards.forEach(card => {
        card.style.display = 'none';
    });

    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }
}
