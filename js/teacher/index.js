document.addEventListener('DOMContentLoaded', function () {
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
});