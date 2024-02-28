//Dom manipulation


// const title = document.getElementById('Heading');
// console.log(title);

// const classitems = document.getElementsByClassName('list-items');
// console.log(classitems);

// const qs = document.querySelector('div');
// console.log(qs);


const title = document.querySelector('#Heading')
title.style.color = 'red';
console.log(title);
//can only apply to one id
//If many, run a for loop

const ul = document.querySelector('ul');
const li = document.createElement('li');

//add elements using append method

ul.append(li)

// const text = document.querySelector('.list-items')
// console.log(text.innerText);
// console.log(text.textContent)
// console.log(text.innerHTML);
// li.innerText = 'Redmi'

li.setAttribute('id', 'Heading')


//Event Listeners
//Load, touch, key, click etc events

// element.addEventListner("click", function);

// const Button = document.querySelector('.btn');

// function alertBtn(){
//     alert("I also triggered an event");
// }

// Button.addEventListener("click", alertBtn)

//Mouseover

// const newbgclr = document.querySelector('.btn');
// function changeColor(){
//     newbgclr.style.color = 'green';
// }
// newbgclr.addEventListener("mouseover",changeColor)


const moreBtn = document.querySelector('.more-btn');

const hiddenContent = document.querySelector('.hidden-content');

function show() {
    if (hiddenContent.classList.contains('more-btn')) {
        hiddenContent.classList.remove('more-btn');
    } else {
        hiddenContent.classList.add('more-btn');
    }
}
moreBtn.addEventListener("click", show)
//Event Propogation

