function tambah() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    let hasil = angka1 + angka2;
    document.getElementById("hasil").value = hasil;
  }
}

function kurang() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    let hasil = angka1 - angka2;
    document.getElementById("hasil").value = hasil;
  }
}

function kali() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    let hasil = angka1 * angka2;
    document.getElementById("hasil").value = hasil;
  }
}

function bagi() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else if (angka2 === 0) {
    alert("Maaf, tidak bisa melakukan pembagian dengan nol");
  } else {
    let hasil = angka1 / angka2;
    document.getElementById("hasil").value = hasil;
  }
}

function pangkat() {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    let hasil = Math.pow(angka1, angka2);
    document.getElementById("hasil").value = hasil;
  }
}
