import eruda from 'eruda';

eruda.init();

const btn = document.getElementById('btn')! ;
btn.addEventListener('click', () => {
  console.log('btnclick');
});

const model = document.getElementById('model')!;

model.addEventListener('message', (event) => {
  console.log(event);
});


