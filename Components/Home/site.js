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



const modeToggleBtn = document.getElementById("modeToggleBtn");
const body = document.body;

modeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
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
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  