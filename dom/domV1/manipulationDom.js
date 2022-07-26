/**we get the first element */
const h1=document.querySelector('h1');
const p=document.querySelector('p');

/** we get the element whit content class */
const parrafito=document.getElementsByClassName('content');

/** we get the element whit id class */
const subTitle=document.getElementById('subTitle');
const assets=document.getElementById('assets');


/** we get the element type input */
const input=document.querySelector('input');

console.log(input.value);

/**modifying the content for the element h1 
converting all at html code  */
h1.innerHTML='Isabel <br> life';

/**modifying the content for the element h1 
converting all at html code  */
h1.innerText='Isabel <br> life';

h1.classList.add('rojo');

h1.classList.remove('verde');
/** asigned default value for the input  */
input.value="456"
/** we create a new elemnet img */
const img=document.createElement('img');
/** asign properties for img elemenr */
img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZGjCjFYYiNFpp45YmuM3z9wCfCyNkgJn-g&usqp=CAU');

assets.appendChild(img);