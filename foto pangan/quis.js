document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.level-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked ${button.textContent}`);
        });
    });
});
