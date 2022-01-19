const copy = document.getElementById("btn-copy");
const btnEncrypt = document.querySelector('.btn-encriptar');
const btnDecrypt = document.querySelector('.btn-decencriptar');
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

const decrypt = e => {
    e.preventDefault();
    let value = input.value;
    value = value.replace('ai', 'a');
    value = value.replace('enter', 'e');
    value = value.replace('imes', 'i');
    value = value.replace('ober', 'o');
    value = value.replace('ufat', 'u');
    output.innerHTML = value;
}


copy.addEventListener('click', copyMessage);
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);