document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('header')) {
      fetch('/Components/Header/header.html')  
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar o header: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          
          const headerContainer = document.createElement('header');
          headerContainer.innerHTML = data;
  
          
          document.getElementById('header-placeholder').appendChild(headerContainer);
        })
        .catch(error => console.error(error));
    }
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('footer')) {
      fetch('/Components/Footer/footer.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar o footer: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          const footerContainer = document.createElement('footer');
          footerContainer.innerHTML = data;
          document.body.appendChild(footerContainer);
        })
        .catch(error => console.error(error));
    }
  });


  function viewProject(projectId) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");

    const projects = {
        1: {
            title: "Projeto 1: Design de Site",
            description: "Criação de um site completo com design responsivo e otimizado para diversos dispositivos. Última imagem vídeo do site",
            images: [
                { src: "/Assets/imagens/Sem-Título-1_01.png", link: "/Assets/imagens/Sem-Título-1_01.png" },
                { src: "/Assets/imagens/Sem-Título-2_02.png", link: "/Assets/imagens/Sem-Título-2_02.png" },
                { src: "/Assets/imagens/Sem-Título-3.png", link: "/Assets/imagens/Sem-Título-3.png" },
                { src: "/Assets/imagens/video-essencia.jpg", link: "https://drive.google.com/file/d/1qBz2oTByqjxCTfC9NkfFZvhy9Venqf_h/view?usp=drive_link" },
            ],
            instagram: "https://www.instagram.com/p/DDPV4QXRrrx/?utm_source=ig_web_copy_link",
            whatsapp: "https://wa.me/+5583988688864",
        },
        2: {
            title: "Projeto 2: Agência de mídia digital",
            description: "Desenvolvimento de uma Agência de sites e mídia digital. Vídeo da empresa última imagem",
            images: [
                { src: "/Assets/imagens/post-carrosel-feed-easy_03_01.png", link: "/Assets/imagens/post-carrosel-feed-easy_03_01.png" },
                { src: "/Assets/imagens/post-carrosel-feed-easy_03_02.png", link: "/Assets/imagens/post-carrosel-feed-easy_03_02.png" },
                { src: "/Assets/imagens/post-carrosel-feed-easy_03_03.png", link: "/Assets/imagens/post-carrosel-feed-easy_03_03.png" },
                { src: "/Assets/imagens/VIDEO-EASY.png", link: "https://www.instagram.com/p/DDP2VhSxuhV/" },
            ],
            instagram: "https://www.instagram.com/easysites.agencia/",
            whatsapp: "https://wa.me/+5583988688864",
        },
        3: {
            title: "Projeto 3: Identidade visual WG - Designer",
            description: "Identidade visual para minha empresa WG - Designer",
            images: [
                { src: "/Assets/icons/logo wg.png", link: "/Assets/icons/logo wg.png" },
                { src: "/Assets/imagens/post1fee.PNG", link: "https://www.instagram.com/p/C5tiVBHr6xI/?img_index=1" },
                { src: "/Assets/imagens/post2.PNG", link: "https://www.instagram.com/p/C5tgXWLr7Kf/" },
                { src: "/Assets/imagens/post3.PNG", link: "https://www.instagram.com/p/C5tgU9cLZeY/" },
            ],
            instagram: "https://www.instagram.com/willdsg07/",
            whatsapp: "https://wa.me/+5583988688864",
        },
        4: {
          title: "Projeto 4: Assistência Técnica Eter Tech",
          description: "Desenvolvimento da identidade visual da Assistência Técnica Eter Tech, cartões de vista, logo.",
          images: [
            { src: "/Assets/imagens/carrosel-2.GIF", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=1" },
            { src: "/Assets/imagens/carrosel-1.PNG", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=2" },
            { src: "/Assets/imagens/carrosel-3.GIF", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=3" },
            { src: "/Assets/imagens/carrosel-4.GIF", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=4" },
            { src: "/Assets/imagens/carrosel-5.GIF", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=5" },
            { src: "/Assets/imagens/carrosel-6.GIF", link: "https://www.instagram.com/p/C9Xgh19OWUF/?img_index=6" },
            { src: "/Assets/imagens/cart-1.JPG", link: "/Assets/imagens/cart-1.JPG" },
            { src: "/Assets/imagens/cart-2.JPG", link: "/Assets/imagens/cart-2.JPG" },
          ],
          instagram: "https://www.instagram.com/eter.tech",
          whatsapp: "https://wa.me/+5583988408009",
        },
        5: {
          title: "Projeto 5: Granja Ovos Cirilo",
          description: "Desenvolvimento da identidade visual da Granja Ovos Cirilo, cartões de vista, logo.",
          images: [
            { src: "/Assets/icons/logo-ovos.JPG", link: "/Assets/icons/logo-ovos.JPG" },
            { src: "/Assets/imagens/cart-ovo-1.JPG", link: "/Assets/imagens/cart-ovo-1.JPG" },
            { src: "/Assets/imagens/cart-ovo-2.JPG", link: "/Assets/imagens/cart-ovo-2.JPG" },
          ],
          instagram: "https://www.instagram.com/granjacirilopb",
          whatsapp: "https://wa.me/+5583988408009",
        },
        6: {
          title: "Projeto 6: JR Premoldados",
          description: "Desenvolvimento da identidade visual da JR Premoldados, cartões de visita e mockup.",
          images: [
            { src: "/Assets/imagens/JR-cartão.jpg", link: "/Assets/imagens/JR-cartão.jpg" },
            { src: "/Assets/imagens/jr-parede.jpg", link: "/Assets/imagens/jr-parede.jpg" },
            { src: "/Assets/imagens/jr-mockup.jpg", link: "/Assets/imagens/jr-mockup.jpg" },
          ],
          instagram: "https://www.instagram.com/jr.premoldados",
          whatsapp: "https://wa.me/+5583987313758",
        },
    };

    const project = projects[projectId];

    // Adicionar imagens como links clicáveis
    const imagesHTML = project.images
        .map(
            (img) =>
                img.link
                    ? `<a href="${img.link}" target="_blank"><img src="${img.src}" alt="${project.title}" class="modal-image"></a>`
                    : `<img src="${img.src}" alt="${project.title}" class="modal-image">`
        )
        .join("");

    // Adicionar links de redes sociais
    const socialLinksHTML = `
      <div class="social-links">
        <a href="${project.instagram}" target="_blank" title="Instagram">
          <img src="/Assets/icons/image-removebg-preview (12).png" alt="Instagram" width="24">
        </a>
        <a href="${project.whatsapp}" target="_blank" title="WhatsApp">
          <img src="/Assets/icons/image-removebg-preview (11).png" alt="WhatsApp" width="24">
        </a>
      </div>
    `;

    modalContent.innerHTML = `
  <h2>${project.title}</h2>
  <div class="modal-images" style="margin-bottom: 20px;">${imagesHTML}</div>
  <p>${project.description}</p>
  ${socialLinksHTML}
`;


    modal.style.display = "block";
}

  
  
  
  function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  // Voltar suavemente ao topo
  document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };