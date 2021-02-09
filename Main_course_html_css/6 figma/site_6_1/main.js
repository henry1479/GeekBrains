var listItems = document.querySelectorAll('.list-link');
console.log(listItems);
//функция для создания переключателя классов в навбар.
for (let list of listItems) {
    list.onclick = function (e) {
        e.preventDefault();
        listItems.forEach(element => element.classList.remove('list-link_active')); // удаляем у все элементов активный класс
        this.classList.add('list-link_active'); // добавляем нужному элементу активный класс
    }

}

