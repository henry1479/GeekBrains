const changeQuote = (text) => {
    let change = text.innerText;
    change = change.replace(/'/g, '"');
    const newChange = change.match(/"[a-z]/g);
    console.log(newChange)
    
    text.innerText = change;
}








const init = () => {
    const text = document.querySelector('.text');
    const btn = document.querySelector('.edit');
    btn.addEventListener('click', changeQuote.call(this,text));
}


window.onload = init;