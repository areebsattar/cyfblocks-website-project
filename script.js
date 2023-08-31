var images, navigation2, NavX;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


images = ['https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'];
navigation2 = ['Groceries', 'Cart', 'Comment'];
NavX = [];

let element_navlist = document.getElementById('navlist');

element_navlist.addEventListener('click', (event) => {
  element_navlist.replaceChildren();
  let element_hamb = document.getElementById('hamb');
  element_hamb.innerText = '☰';

});

document.getElementById('hamb').addEventListener('click', (event) => {
  if (!navigation2.length) {
    let element_navlist2 = document.getElementById('navlist');
    while (!!NavX.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      navigation2.unshift(NavX.shift());
    }
    element_navlist2.replaceChildren();
    let element_hamb2 = document.getElementById('hamb');
    element_hamb2.innerText = '☰';
  } else {
    let element_navlist3 = document.getElementById('navlist');
    while (!!navigation2.length) {
      if(--window.LoopTrap <= 0) throw "Infinite loop.";
      NavX.unshift(navigation2[0]);
      let new_li = document.createElement('li');
      new_li.innerText = navigation2.shift();

      element_navlist3.appendChild(new_li);
    }
    let element_hamb3 = document.getElementById('hamb');
    element_hamb3.innerText = 'X';
  }

});

document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  images.shift();
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", images[0]);

});

document.getElementById('prev').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", images[0]);

});

document.getElementById('cab').addEventListener('click', (event) => {
  let element_cart = document.getElementById('cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Butter 🧈';

  element_cart.appendChild(new_li2);

});

document.getElementById('cam').addEventListener('click', (event) => {
  let element_cart2 = document.getElementById('cart');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Milk 🥛';

  element_cart2.appendChild(new_li3);

});

document.getElementById('cac').addEventListener('click', (event) => {
  let element_cart3 = document.getElementById('cart');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Cheese 🧀';

  element_cart3.appendChild(new_li4);

});

document.getElementById('cai').addEventListener('click', (event) => {
  let element_cart4 = document.getElementById('cart');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Ice-Cream 🍦';

  element_cart4.appendChild(new_li5);

});

document.getElementById('feedback').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li6 = document.createElement('li');
  new_li6.innerText = document.getElementById('text').value;

  element_list.appendChild(new_li6);

});
