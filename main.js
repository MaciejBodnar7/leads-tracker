console.log('extension by MB.');

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  const getValue = inputEl.value;
  myLeads.push(getValue);
  inputEl.value = '';
  console.log(myLeads); //console logging
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItems += '<li>' + myLeads[i] + '</li>';
  }
  ulEl.innerHTML = listItems;
}
