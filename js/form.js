const form = document.querySelector('.form-desktop');
const check = document.getElementById('showPassword-desktop');
const modal = document.querySelector('.form-desktop-background');
const ex = document.querySelector('.modal-ex');
const modalOpen = document.querySelector('.user-desktop');


function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement('div');
  errorElemnt.classList.add('mensaje-error-desktop');

  // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
  const mensajeInvalidoTitulo = document.createElement('h2');
  mensajeInvalidoTitulo.innerText =
    "Ocurrio un error, verifica los siguientes campos:";

  const listaInvalidoInput = document.createElement("ul");

  camposInvalidos.forEach((elementInvalido) => {
    const li = document.createElement("li");
    li.innerText = elementInvalido.getAttribute("name");

    listaInvalidoInput.appendChild(li);
  });

  errorElemnt.appendChild(mensajeInvalidoTitulo);
  errorElemnt.appendChild(listaInvalidoInput);

  form.parentNode.insertBefore(errorElemnt, form);
}

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement("div");
  validoElemnt.classList.add("mensaje-valido-desktop");

  validoElemnt.innerText = "Inicio de sesión exitoso";

  form.parentNode.insertBefore(validoElemnt, form)
}

function dameLosCamposInvalidos(inputsRequeridos) {
  let invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === "") {
      invalidos.push(actualInput);
      actualInput.style.border = "6px solid red";
    } else {
      actualInput.style.border = "";
    }
  });
  console.log(invalidos)
  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector(".mensaje-error-desktop");
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector(".mensaje-valido-desktop");
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

form.addEventListener("submit", (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll(".required-desktop");

  e.preventDefault();

  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  console.log(invalidos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});

check.addEventListener( "click", () => {
  show = document.getElementById('contraseña-desktop');
  if (check.checked) {
    show.type = "text";
  } else {
    show.type = "password";
  }
});
modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});
ex.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'none';
  body.style.overflow = 'visible';
});