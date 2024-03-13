function cambiarCarteles() {
  var perdoname = document.getElementById("perdoname");
  var teperdono = document.getElementById("teperdono");
  var mensaje = document.getElementById("mensaje");

  perdoname.style.fontSize = "20px";
  teperdono.style.fontSize = "30px";
  perdoname.style.display = "none";
  teperdono.style.display = "inline-block";

  setTimeout(function() {
    mensaje.style.display = "block";
  }, 1000);
}
