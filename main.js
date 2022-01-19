const copy = document.getElementById("btn-copy");
const btnEncrypt = document.querySelector('.btn-encriptar');
const input = document.getElementById('input');
const output = document.getElementById('output');

const copyMessage = () => {
    console.log('message copied');
}

const encrypt = e => {
    e.preventDefault();
    let arrayString = input.value.split('');
    const encryptMessage = arrayString.map( l => l === 'a' ? 'ai': l === 'i' ? 'imes': l === 'e' ? 'enter' : l === 'o' ? 'ober': l === 'u' ? 'ufat': l);
    output.innerHTML = encryptMessage.join('');
}



copy.addEventListener('click', copyMessage);
btnEncrypt.addEventListener('click', encrypt);