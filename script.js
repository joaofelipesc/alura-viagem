document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        const proximoPasso = document.getElementById('passo-' + button.dataset.proximo);

        // Adiciona transição suave ao sair do passo atual
        atual.classList.add('fade-out');
        setTimeout(() => {
            atual.classList.remove('ativo', 'fade-out');
            proximoPasso.classList.add('ativo', 'fade-in');
            
            // Remove a classe de transição após a animação para evitar problemas futuros
            setTimeout(() => {
                proximoPasso.classList.remove('fade-in');
            }, 300); // Duração da transição
        }, 300); // Duração da transição
    });
});
