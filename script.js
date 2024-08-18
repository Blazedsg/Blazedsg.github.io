document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    products.forEach(product => {
        observer.observe(product);
    });
});