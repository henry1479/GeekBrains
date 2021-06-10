const changeQuote = (text,event) => {
    console.log(event);
    let change = text.innerText;
    change = change.replace(/'(?=[A-Z])/g, '"');// левая кавычка 
    change = change.replace(/(?<=[\!\?\w])'(?=[\,\-\.])/g, '"');//правая кавычка
    const newChange = change.replace(/"(?=[a-z])/g, "'");//апострофы в словах
    text.innerText = newChange;
}


const validation = (event)=> {
    event.preventDefault();
    let names =''
    const info = document.getElementById('info');
    const name = document.feedback.name;
    const tel = document.feedback.tel;
    const email = document.feedback.email;
    const text = document.feedback.text;
    names = changeStyle(/^([A-Z][a-z]+)$/.test(name.value),name,names);
    names = changeStyle(/^\+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(tel.value),tel,names);
    names = changeStyle(/^[a-z]{2}[\-\.]|[^\-\.][a-z0-9]+@mail\.ru$/.test(email.value),email,names);
    names = changeStyle(/(\w+)/.test(text.value),text,names);
    if(names===undefined) {
        info.innerText =`All fields is good!`
    } else {
        info.innerText =`Fields: ${names} is not valid!`
    }

}

const changeStyle = (func,elem,names)=>{
    if(func === true) {
        elem.style.borderColor = 'green';   
         
    } else {
        names += `${elem.getAttribute('name')} `;
        names = names.replace(/undefined/, '');
        elem.style.borderColor = 'red';
        return names   
    } 
}





const init = () => {
    const text = document.querySelector('.text');
    const btn = document.querySelector('.edit');
    console.log(btn)
    btn.addEventListener('click', changeQuote.call(this,text));
    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click',validation)
}


window.onload = init;