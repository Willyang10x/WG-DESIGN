document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('header')) {
    fetch('header.html')  
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
    fetch('footer.html')
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



const modeToggleBtn = document.getElementById("modeToggleBtn");
const modeIcon = document.getElementById("modeIcon");
const body = document.body;

// Caminhos das imagens
const lightModeIcon = "/Assets/icons/interruptor1.png";
const darkModeIcon = "/Assets/icons/interruptor2.png";

modeToggleBtn.addEventListener("click", () => {
    // Alterna o modo escuro
    body.classList.toggle("dark-mode");
    
    // Troca o ícone
    if (body.classList.contains("dark-mode")) {
        modeIcon.src = darkModeIcon; // Ícone para modo escuro
    } else {
        modeIcon.src = lightModeIcon; // Ícone para modo claro
    }
});


function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
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
  
  