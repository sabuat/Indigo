// Language Toggle Functionality
const languageToggle = document.getElementById('language-toggle');
const elementsToTranslate = {
    'nav-home': { pt: 'Início', es: 'Inicio' },
    'nav-plans': { pt: 'Planos', es: 'Planes' },
    'nav-paths': { pt: 'Caminhos', es: 'Caminos' },
    'nav-test': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'nav-blog': { pt: 'Blog', es: 'Blog' },
    'home-title': { pt: 'Bem-vindo ao Meu Site de Ensino de Inglês', es: 'Bienvenido a Mi Sitio de Enseñanza de Inglés' },
    'home-text': { pt: 'Aprenda inglês de forma simples e prática via WhatsApp.', es: 'Aprende inglés de forma simple y práctica vía WhatsApp.' },
    'plans-title': { pt: 'Planos', es: 'Planes' },
    'plans-text': { pt: 'Escolha o plano que melhor se adapta às suas necessidades.', es: 'Elige el plan que mejor se adapte a tus necesidades.' },
    'paths-title': { pt: 'Caminhos de Aprendizado', es: 'Caminos de Aprendizaje' },
    'paths-text': { pt: 'Selecione o seu nível: Iniciante, Intermediário ou Avançado.', es: 'Selecciona tu nivel: Principiante, Intermedio o Avanzado.' },
    'test-title': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'test-text': { pt: 'Descubra o seu nível de inglês com nosso teste rápido.', es: 'Descubre tu nivel de inglés con nuestra prueba rápida.' },
    'blog-title': { pt: 'Blog', es: 'Blog' },
    'blog-text': { pt: 'Dicas e artigos para melhorar o seu inglês.', es: 'Consejos y artículos para mejorar tu inglés.' },
    'footer-text': { pt: '&copy; 2024 Teach English', es: '&copy; 2024 Teach English' }
};

let currentLanguage = 'pt';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'es' : 'pt';
    languageToggle.textContent = currentLanguage === 'pt' ? 'Español' : 'Português';
    translatePage(currentLanguage);
});

function translatePage(language) {
    for (const [id, translations] of Object.entries(elementsToTranslate)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[language];
        }
    }
}

// // Hide/Show Navbar Toggler Button
// document.addEventListener('DOMContentLoaded', function () {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.querySelector('.navbar-collapse');

//     if (navbarCollapse) {
//         navbarCollapse.addEventListener('show.bs.collapse', function () {
//             if (navbarToggler) {
//                 navbarToggler.style.display = 'none'; // Hide the toggler button
//             }
//         });

//         navbarCollapse.addEventListener('hide.bs.collapse', function () {
//             if (navbarToggler) {
//                 navbarToggler.style.display = 'block'; // Show the toggler button
//             }
//         });
//     }
// });