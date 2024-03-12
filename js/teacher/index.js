const btn = document.querySelector('#btn');
const selectID1 = document.querySelectorAll('.selectID');
const table1 = document.querySelector('.table1');
btn.addEventListener('click', (e) => {
     e.preventDefault();
     selectID1.forEach((element, index) => {
          if (element.value != '') {
               table1.classList.add('show')
          }
     });
})
// tabs
const button_item = document.querySelectorAll(".button_item li");
const tabPanel = document.querySelectorAll(".tabPanel");

function show(index, color) {
     console.log(index);
     button_item.forEach(Element => {
          Element.style.backgroundColor = '';
          Element.style.color = '';
     });
     button_item[index].style.backgroundColor = color;
     button_item[index].style.color = 'white';

     tabPanel.forEach(Element => {
          Element.style.display = 'none';
     });

     tabPanel[index].style.backgroundColor = color;
     tabPanel[index].style.display = 'block';


}
button_item.forEach((element, index) => {
     element.addEventListener('click', () => {
          localStorage.setItem('tabPanel', index)
     });
});
show(localStorage.getItem('tabPanel'), '#FFE4C4')
   
