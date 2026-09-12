document.querySelector('footer p').textContent = new Date().getFullYear();
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => console.log('Button clicked:', btn.textContent));
});
