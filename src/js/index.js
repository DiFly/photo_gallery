function sidebarOpen() {
  document.getElementById('sidebar').style.display = "block";
  document.getElementById('overlay').style.display = "block";
}

function sidebarClose() {
  document.getElementById('sidebar').style.display = "none";
  document.getElementById('overlay').style.display = "none";
}

function showModalImage(element) {
  // console.log(element.getAttribute('alt'));
  // console.log(element.style.backgroundImage.replace(/(url\(|\)|")/g, ''));
  document.getElementById("modalimage__img").src = element.style.backgroundImage.replace(/(url\(|\)|")/g, '');
  document.getElementById("modalimage").style.display = "block";
  document.getElementById("modalimage__caption").innerHTML = element.getAttribute('alt') ? element.getAttribute('alt') : '';
}