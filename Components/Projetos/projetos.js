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
            title: "Projeto 3: Aplicativo Móvel",
            description: "Aplicativo móvel de gestão de tarefas, com uma interface simples e fácil de usar.",
            images: [
                { src: "/Assets/imagens/post1fee.PNG" , link: "/Assets/imagens/post1fee.PNG" },
                { src: "/Assets/imagens/post2.PNG", link: "/Assets/imagens/post2.PNG" },
                { src: "/Assets/imagens/post3.PNG", link: "" },
            ],
            instagram: "https://www.instagram.com/willdsg07/",
            whatsapp: "https://wa.me/+5583988688864",
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
  