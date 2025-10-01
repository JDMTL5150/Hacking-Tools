


// code for copying code snippets to clipboard
const codeElements = document.querySelectorAll('.code-copy');

codeElements.forEach(element => {
    element.addEventListener('click', () => {
        const code = element.innerText;
        navigator.clipboard.writeText(code)
            .then(() => {
                const prev = element.innerText;
                element.innerText = 'Copied!';
                const prevColor = element.style.color;
                element.style.color = '#32CD32';
                setTimeout(() => {element.innerText = prev; element.style.color = prevColor;}, 1000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });
});

// end of code for copying code snippets to clipboard

// code for back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
        
    }
});
// end of code for back to top button
