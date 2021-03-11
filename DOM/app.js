let formEl1=document.createElement('form');

let button1=document.createElement('button');

let input1=document.createElement('input');
input1.placeholder='yasiniz';

formEl1.appendChild(input1);
formEl1.appendChild(button1);

let divForm=document.createElement('div');
divForm.className='div1';
divForm.style.border='4px solid blue';

divForm.appendChild(formEl1);

let divMain=document.querySelector('#main');
divMain.appendChild(divForm);

//

let div2=document.createElement('div');

div2.style.width='300px';
div2.style.height='300px';
div2.style.border='2px solid red';

divMain.appendChild(div2);

let ul=document.createElement('ul');

let li=document.createElement('li');

ul.appendChild(li);
div2.appendChild(ul);

