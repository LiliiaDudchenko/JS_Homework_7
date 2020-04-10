"use strict"

//1

window.addEventListener("mousemove", showCoordinates);

function showCoordinates() {
    let coordinates = document.querySelector(".coordinates");
    coordinates.innerHTML = 'X: ' + event.clientX + ' Y: ' + event.clientY;
}


//2 
document.addEventListener("click", moveSquare);

function moveSquare() {
    let square = document.querySelector(".square");
    square.style.left = event.pageX + "px";
    square.style.top = event.pageY + "px";

}

//4

let firstInput = document.getElementById('input_1');
firstInput.addEventListener("keypress", getKeyCode);

function getKeyCode() {

    document.querySelector(".key_code").innerHTML = event.which;

}

//5

let secondInput = document.getElementById('input_2');
secondInput.addEventListener("keypress", getKey);

function getKey() {

    document.querySelector(".key").innerHTML = String.fromCharCode(event.which);

}

//6  Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.

let blueSquare = document.querySelector(".element");

blueSquare.addEventListener("click", changeStyle);

function changeStyle() {
    if (event.ctrlKey) {
        blueSquare.style.backgroundColor = "red";
    }
}

//7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.

let whiteSquare = document.querySelector(".element_1");

whiteSquare.addEventListener("click", fillByText);

function fillByText() {
    if (event.ctrlKey) {
        whiteSquare.innerHTML = "1";
    } else if (event.altKey) {
        whiteSquare.innerHTML = "2";
    } else if (event.shiftKey) {
        whiteSquare.innerHTML = "3";
    }
}

//8. Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

let thirdInput = document.querySelector("#input_3");
let showText = document.querySelector(".show_text");

thirdInput.addEventListener('keypress', showResult);

function showResult() {
    if (event.keyCode == 13) {
        showText.innerHTML = showText.innerHTML + thirdInput.value;
        thirdInput.value = ' ';
    }
}

//9 Дан ul, в нем несколько li.Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.Это должно работать и для вновь добавленных li.Задачу решите с помощью делегирования(то есть событие должно быть навешано на ul).
let ulList = document.querySelector('.ul_list');


let button = document.querySelector('.button');
button.addEventListener('click', addLi);

function addLi() {
    let li = document.createElement('li');
    li.innerHTML = 'пункт';
    ulList.appendChild(li);
}

ulList.addEventListener('click', addExclamationPoint);

function addExclamationPoint() {
    event.target.innerHTML = event.target.innerHTML + '!';
}

//10  Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).

let inputForName = document.getElementById("name");
let inputForSurname = document.getElementById("surname");
let entryBtn = document.getElementById("entry_btn");
let table = document.querySelector("#table");



entryBtn.addEventListener('click', newTr);

function newTr() {

    let arr = [inputForName.value, inputForSurname.value];

    let arrTh = document.querySelectorAll('#table tr th');
    let parent = document.getElementById('table');

    let tr = document.createElement('tr');
    parent.appendChild(tr);
    for (let i = 0; i < arrTh.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = arr[i];
        tr.appendChild(td);
    }
}

table.addEventListener("click", editValue);

function editValue() {
    let target = event.target;
    if (target.tagName == 'TD') {
        target.innerHTML = prompt('Укажите новую информацию');
    }
}

entryBtn.addEventListener('click', deleteInfo);

function deleteInfo() {
    inputForName.value = "";
    inputForSurname.value = "";
}


//11 Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttonToHide = document.querySelector("#hide");

buttonToHide.addEventListener("click", hideButton);

function hideButton() {
    buttonToHide.style.display = "none";
}

//12. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id=hide;

let btn = document.querySelector(".btn");

btn.addEventListener("click", hideButtonByID);

function hideButtonByID() {
    document.querySelector("#hide").style.display = "none";
}

// Напишите код, который запрещает прокрутку страницы при помощи мыши и клавиш.

document.onmousewheel = function () {
    return false;
};

document.onwheel = function () {
    return false;
};

document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return false;
}


//задача переместить элемент в координаты клика мышки. Т.е. пользователь кликает и элемент (div, например) передвигается туда.

document.addEventListener("click", moveElement);

function moveElement() {
    let ElemToMove = document.querySelector(".element_to_move");
    ElemToMove.style.left = event.pageX + "px";
    ElemToMove.style.top = event.pageY + "px";

}