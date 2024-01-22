function verificaTamanhoLista() {
  const lista = document.querySelectorAll('#actionList li');
  return lista.length >= 10
}

function clearText() {
  document.querySelector('textarea').value = ''
}

function clearList() {
  const actionList = document.querySelector('#actionList');
  const imageEmpty = document.querySelector('#empty-list');
  if (imageEmpty.style.display === 'none') {
    imageEmpty.style.display = 'block'
  }
  actionList.innerHTML = '';
}

function hideImage() {
  const imageEmpty = document.querySelector('#empty-list');
  if (imageEmpty.style.display !== 'none') {
    imageEmpty.style.display = 'none'
  }
}

function encrypt() {
  const normalText = document.querySelector('textarea').value
  if (!normalText) return

  let newText = normalText
  newText = newText.replace(/e/g, "enter")
  newText = newText.replace(/i/g, "imes")
  newText = newText.replace(/a/g, "ai")
  newText = newText.replace(/o/g, "ober")
  newText = newText.replace(/u/g, "ufat")

  const actionList = document.querySelector('#actionList');
  const listaCheia = verificaTamanhoLista();
  if (listaCheia) {
    actionList.innerHTML = `
    <li>
    ${newText}
    <button onclick="copyText(event)" id="copy">copy</button>
  </li>`
  }else {
    actionList.innerHTML += `
    <li>
    ${newText}
    <button onclick="copyText(event)" id="copy">copy</button>
  </li>`
  }

  clearText();
  hideImage();
}

function decrypt() {
    const encryptedText = document.querySelector('textarea').value
    
    if (!encryptedText) return

    let newText = encryptedText
    newText = newText.replace(/enter/g, "e")
    newText = newText.replace(/imes/g, "i")
    newText = newText.replace(/ai/g, "a")
    newText = newText.replace(/ober/g, "o")
    newText = newText.replace(/ufat/g, "u")
    const actionList = document.querySelector('#actionList');
    const listaCheia = verificaTamanhoLista();
    if (listaCheia) {
      actionList.innerHTML = `
      <li>
      ${newText}
      <button onclick="copyText(event)" id="copy">copy</button>
    </li>`
    }else {
      actionList.innerHTML += `
        <li>
        ${newText}
        <button onclick="copyText(event)" id="copy">copy</button>
      </li>`
    }

    clearText();
    hideImage();
}

function copyText(event) {
  const parentOfButton = event.target.parentNode;
  navigator.clipboard.writeText(parentOfButton.innerText.replace('copy', '').trim())
}