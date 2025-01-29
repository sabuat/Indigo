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

document.addEventListener('DOMContentLoaded', function () {
  const logoImg = document.getElementById('logo-img');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', function () {
      // Change logo to "open" version
      logoImg.src = './images/Logo-Open.png';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      // Change logo back to default version
      logoImg.src = './images/Logo.png';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Initialize PC Carousel
  const carouselPC = new bootstrap.Carousel(document.getElementById('carouselPC'), {
      interval: 5000, // 3 seconds
      wrap: true // Enable looping
  });

  // Initialize Mobile Carousel
  const carouselMobile = new bootstrap.Carousel(document.getElementById('carouselMobile'), {
      interval: 5000, // 3 seconds
      wrap: true // Enable looping
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   const carousel = document.getElementById('carouselExample');
//   const carouselItems = carousel.querySelectorAll('.carousel-item');
//   const pcItems = carousel.querySelectorAll('.pc-item');
//   const mobileItems = carousel.querySelectorAll('.mobile-item');

//   // Function to set the active item based on screen size
//   function setActiveItem() {
//       // Remove active class from all items
//       carouselItems.forEach(item => item.classList.remove('active'));

//       // Check screen width and set active class accordingly
//       if (window.innerWidth >= 768) { // PC view
//           pcItems[0].classList.add('active'); // Activate the first PC item
//       } else { // Mobile view
//           mobileItems[0].classList.add('active'); // Activate the first mobile item
//       }
//   }

//   // Initialize the active item on page load
//   setActiveItem();

//   // Reinitialize the active item on window resize
//   window.addEventListener('resize', setActiveItem);

//   // Initialize the Bootstrap carousel
//   const myCarousel = new bootstrap.Carousel(carousel, {
//       interval: 3000, // 3 seconds
//       wrap: true // Enable looping
//   });
// });