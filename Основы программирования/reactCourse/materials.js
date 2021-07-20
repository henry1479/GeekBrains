
//lesson-1
// React js main information
//самый востребованный фреймворк в фронтенде
// подход Single Page Application
// клиент отрисовывает все сам
// раскидываем логику
// быстрая работа
// экономия трафика
// запросов на сервер больше, но они проще
// простые способы реализовать кеширование  

//минусы:
// долгая первая загрузка
// нужно уметь хорошо программировать
// проблемы с SEO(плохая индксация поисковиками)

//плюсы Webpack

//генерация нескольких файлов
// динамическая подгрузка файлов
// масса плагинов
// динмамическое обновление кода программы во время разработки

//аналоги 
//gulp - не используется
//grant - не используется
//Parcel -простой и быстро работает
//Browserify

//Babel
//преобразовывет один вид кода в другой - транспиляция
// как правило в старый формат


//create-react-app
//  библиотека, создает и настаривает необходимые  инструменты для начала разработки на React. webpack, babel, jest
// create component
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement ('h1',
{className: "element"},
'React',
);

ReactDOM.render(
    element,
    document,getElementById('root'),
)

//jsx - шаблонизатор, способ вызова функций

const element = <h1 className="element">React</h1>;

// классовые компоненты имеют логику и жизненные циклы в отличие от функциональных компонентов

//state - объект в котором хранятся данные для компонентов

// props - через него передаем данные, методы или другие компоненты  

// стилизация 

// инлайновые стили
// style={{marginTop: '20px'}}
// className
// sass нужна небольшая доностройка

function App() {
    return (
        <div className="wrapper">
            <div style={{paddingTop: '25px'}}>
                Inline Styles
            </div>
        </div>
    )
}

//React devtools
// помогает искать элементы на странице
// можно увидеть свойства, кто отрендерил и где это файл лежит
// есть вкладка профайлер просмотр того как компоненет ренедерится и найти проблемы

// sandbox - тренировка для React
// иммутабельность перезапись одного объекта в другой - функциональное программирование

// useState - это хук 


//lesson-2 Жизненный цикл компонента
const [count,setCount] = useState(0);
// same
const countState = useState(0);
const count = countState[0];
const setCount = countStatet[1];
// willunmount - очень важный 
// отписки - про это забывать не стоит 


//lesson-3 Virtual DOM
//Согласование
//Объектное представление DOM в памяти компьютера

// помогает компьтеру работать 
//быстрее, снижая с него нагрузку,создавая новое дерево и сравнивает его со страрым.
//Если есть изменения, то они вносятся в реальный DOM

//Реконсиляция - это непосредственно сверка. Для него используется свойство key. Либо индекс элемента в массиве или id в объекте. Индексы подходят только для списков без удаления элементов

//асинхронность достигается движком Fiber

//библиотеки компонентов

//Material UI
// Bootstrap
//AntDesign
// Готовые компоненты

//materialUI

//npm install @material-ui

// import Button from '@material-ui/core/Button'

//faker - библиотека для генерация фэйковых данных

// function Button () {
//     return (

//     )
// }


//Статическая типизация 

//TypeScript

//Типизация - это описание объектов в рамках языка. Раскрывает типы данных в перемменой.

//tsx

interface Iprops {
    name: string,
    phone: number[],
    isActive: Boolean,
}


type Props = {
    name: string,
    description: string,
    isActive: Boolean,
    phone: Array<number>
}

class Test import IProps {
   constructor () {
    this.name = '';
    this.description = '';
    this.isActive = false;
    this.phone =[];
   }
}

//Ref 
//мутируемый объект. У него eсть свойство current, в котором можно хранить свойство на DOM или объекты
// не меняет свойство current при рендере

//при скролле и фокусе обычно
//где нужен доступ к элементу

const Input = (props) => {
    const inputRef = useRef(null);
    useEffect(()=> {
        inputRef.current?.focus();
    }, []);

    return (
        <input ref={inputRef}/>
    )
}

//Чатик

import Paper from '...'
import Faker from '....'


