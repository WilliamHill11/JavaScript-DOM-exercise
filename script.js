const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-context!';

const para = document.createElement('p');
para.textContent = "Hey i'm red!"
para.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

const content2 = document.createElement('div');
content2.setAttribute('style', 'background: pink; border: 2px solid;')

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
content2.appendChild(h1);
content2.appendChild(para2);
container.appendChild(content2);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});