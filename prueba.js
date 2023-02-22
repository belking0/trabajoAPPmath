var m = [];
function resultado() {
  if (
    document.getElementById("numero1").value > 1 ||
    document.getElementById("numero2").value > 1 ||
    document.getElementById("numero3").value > 1 ||
    document.getElementById("numero4").value > 1 ||
    document.getElementById("numero5").value > 1 ||
    document.getElementById("numero6").value > 1 ||
    document.getElementById("numero7").value > 1 ||
    document.getElementById("numero8").value > 1
  ) {
    alert("Solo numeros entre 0 y 1");
  } else {
    m[0] = document.getElementById("numero1").value;
    m[1] = document.getElementById("numero2").value;
    m[2] = document.getElementById("numero3").value;
    m[3] = document.getElementById("numero4").value;
    m[4] = document.getElementById("numero5").value;
    m[5] = document.getElementById("numero6").value;
    m[6] = document.getElementById("numero7").value;
    m[7] = document.getElementById("numero8").value;
  }

  var n = 0;
  var p = 0;
  var d = 0;
  var s = 0;
  var texto = [];
  var resultado = "";
  var variablex = [0, 0, 0, 0, 1, 1, 1, 1];
  var variabley = [0, 0, 1, 1, 0, 0, 1, 1];
  var variablez = [0, 1, 0, 1, 0, 1, 0, 1];
  var xboleana = [];
  var yboleana = [];
  var zboleana = [];

  for (var i = 0; i <= 7; i++) {
    if (m[i] == 1) {
      if (variablex[i] == 1) {
        xboleana[n] = "X";
        n += 1;
      }
      if (variablex[i] == 0) {
        xboleana[n] = "X*";
        n += 1;
      }
      if (variabley[i] == 1) {
        yboleana[p] = "Y";
        p += 1;
      }
      if (variabley[i] == 0) {
        yboleana[p] = "Y*";
        p += 1;
      }
      if (variablez[i] == 1) {
        zboleana[d] = "Z";
        d += 1;
      }
      if (variablez[i] == 0) {
        zboleana[d] = "Z*";
        d += 1;
      }
    }
  }
  var longitud = xboleana["length"];
  for (var j = 0; j <= xboleana["length"] - 2; j++) {
    texto[j] = xboleana[j] + yboleana[j] + zboleana[j] + "+";
    texto[longitud - 1] =
      xboleana[longitud - 1] + yboleana[longitud - 1] + zboleana[longitud - 1];
  }
  for (var t = 0; t <= texto["length"] - 1; t++) {
    resultado = resultado + texto[t];
  }
  var respuesta = document.getElementById("respuesta2");
  respuesta.textContent = resultado;
}
