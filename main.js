console.log('extension by MB.');

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  //ulEl.innerHTML += '<li><a href=" ' + inputEl.value + ' " target=”_blank”>' + inputEl.value + '</a></li>';
  ulEl.innerHTML += `
                      <li>
                        <a href="${inputEl.value}" target=”_blank”>${inputEl.value}</a>
                      </li>
                    `;
  inputEl.value = '';
});

//Old way of rendering but not efficient beacuse its looping evry item in array every time

// function renderLeads() {
//   let listItems = '';
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += '<li>' + myLeads[i] + '</li>';
//   }
//   ulEl.innerHTML = listItems;
// }
