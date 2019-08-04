// // EXAMINE THE DOCUMENT OBJECT

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); //all means all elements n the document
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//  SELECTORS:
// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME   //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME     //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// // QUERYSELECTOR    //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); //By default grabs the first one
// input.value = 'Hello WOrld';
// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';
// // select first by default
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// // for selecting last item use css lastchild
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTALL   -> returns a NodeList(which is like an array)//
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//  DOM CRASH COURSE PART - 2
// TRAVERSING THE DOM   //
// var itemList = document.querySelector('#items');
// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// Child NOdes
// console.log(itemList.childNodes); //Not suggested as give spaces(in the form of empty text) in between

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // First Child
// console.log(itemList.firstChild); //gives empty space
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// Last Child
// console.log(itemList.lastChild); //gives empty space
// LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4

// // nextSiblings
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // createElement

// // Create a div
// var newDiv = document.createElement('div');

// // add class to div
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // (Insert content in div)
// // create a text node
// var newDivText = document.createTextNode('Hello World');

// // add text to div
// newDiv.appendChild(newDivText);

// //Put element in DOM
// var container = document.querySelector('header .container'); //In the header we will grab container class
// var h1 = document.querySelector('header h1'); //From the header select h1

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';

// console.log(newDiv);

// EVENTS

// function buttonClick() {
//   console.log('Button Clicked');
// }

// var button = document
//   .getElementById('button')
//   .addEventListener('click', function() {
//     console.log('One way');
//   });

// EVENTS:
// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
//   console.log('Second way');
//   document.getElementById('header-title').textContent = 'changed';
// //   document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id + '</h3>';
// console.log(e.type);  //type of event
//POSITION FROM THE BROWSER WINDOW
// console.log(e.clientX);
// console.log(e.clientY);
// POSITION FROM THE ELEMENT ITSELF
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseenter', runEvent);

function runEvent(e) {
  console.log('EVENT TYPE: ' + e.type);
}
