// Language Toggle Functionality
const languageToggle = document.getElementById('language-toggle');
const elementsToTranslate = {
    'nav-home': { pt: 'Início', es: 'Inicio' },
    'nav-plans': { pt: 'Planos', es: 'Planes' },
    'nav-paths': { pt: 'Trilhas', es: 'Caminos' },
    'nav-test': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'nav-blog': { pt: 'Blog', es: 'Blog' },
    'text-01': { pt: 'Aprender Inglês pelo WhatsApp é a solução perfeita para quem busca praticidade e flexibilidade. Com aulas personalizadas e no seu ritmo, você pode estudar de qualquer lugar, a qualquer hora. Além disso, o contato direto com o professor via mensagens permite tirar dúvidas instantaneamente e receber feedbacks rápidos. É a maneira mais moderna e eficiente de dominar o Inglês sem sair de casa!', es: 'Aprender inglés por WhatsApp es la solución perfecta para quienes buscan practicidad y flexibilidad. Con clases personalizadas y a tu ritmo, puedes estudiar desde cualquier lugar, a cualquier hora. Además, el contacto directo con el profesor vía mensajes te permite resolver dudas instantáneamente y recibir retroalimentación rápida. ¡Es la forma más moderna y eficiente de dominar el inglés sin salir de casa!' },
    'home-text': { pt: 'Aprenda inglês de forma simples e prática via WhatsApp.', es: 'Aprende inglés de forma simple y práctica vía WhatsApp.' },
    'plans-title': { pt: 'Planos', es: 'Planes' },
    'plans-text': { pt: 'Escolha o plano que melhor se adapta às suas necessidades.', es: 'Elige el plan que mejor se adapte a tus necesidades.' },
    'paths-title': { pt: 'Caminhos de Aprendizado', es: 'Caminos de Aprendizaje' },
    'paths-text': { pt: 'Selecione o seu nível: Iniciante, Intermediário ou Avançado.', es: 'Selecciona tu nivel: Principiante, Intermedio o Avanzado.' },
    'test-title': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'test-text': { pt: 'Descubra o seu nível de inglês com nosso teste rápido.', es: 'Descubre tu nivel de inglés con nuestra prueba rápida.' },
    'blog-title': { pt: 'Blog', es: 'Blog' },
    'blog-text': { pt: 'Dicas e artigos para melhorar o seu inglês.', es: 'Consejos y artículos para mejorar tu inglés.' },
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

    // Initialize the carousel
  const carousel = new bootstrap.Carousel(document.getElementById('overlapCarousel'), {
      interval: 3000, // Auto-rotate every 3 seconds
      wrap: true // Enable looping
  });

  // Thumbnail and caption functionality
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const caption = document.getElementById('caption');

  function currentSlide(index) {
      // Update the carousel to the selected slide
      carousel.to(index);

      // Update the active thumbnail
      thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle('active', i === index);
      });

      // Update the caption
      caption.textContent = thumbnails[index].alt;
  }

  // Add event listeners to thumbnails
  thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => currentSlide(index));
  });

  // Update thumbnails and captions when the carousel slides
  document.getElementById('overlapCarousel').addEventListener('slid.bs.carousel', (event) => {
      const activeIndex = Array.from(event.relatedTarget.parentElement.children).indexOf(event.relatedTarget);
      currentSlide(activeIndex);
  });