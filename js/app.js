const panel1 = document.querySelector('.panel-1');
const panel2 = document.querySelector('.panel-2');
const panel3 = document.querySelector('.panel-3');
const panel4 = document.querySelector('.panel-4');
const panel5 = document.querySelector('.panel-5');

const app = document.querySelector('#app-container')

console.log(panel1,panel2,panel3,panel4,panel5)

var crntScreen = 'home'


panel1.addEventListener('click', function(){
  if(app.className === "sel-1"){
    app.className = 'home'
  }else {
    app.className = 'sel-1'
  }
})
panel2.addEventListener('click', function(){
  if(app.className === "sel-2"){
    app.className = 'home'
  }else {
    app.className = 'sel-2'
  }
})
panel3.addEventListener('click', function(){
  if(app.className === "sel-3"){
    app.className = 'home'
  }else {
    app.className = 'sel-3'
  }
})
panel4.addEventListener('click', function(){
  if(app.className === "sel-4"){
    app.className = 'home'
  }else {
    app.className = 'sel-4'
  }
})
panel5.addEventListener('click', function(){
  if(app.className === "sel-5"){
    app.className = 'home'
  }else {
    app.className = 'sel-5'
  }
})
