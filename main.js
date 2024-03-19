console.log('extension by MB.');

let myLeads = ['dummy1', 'dummy2', 'dummy3'];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function () {
  const getValue = inputEl.value;
  myLeads.push(getValue);

  console.log(myLeads);
});

let listItems = '';

for (let i = 0; i < myLeads.length; i++) {
  listItems += '<li>' + myLeads[i] + '</li>';
}

ulEl.innerHTML = listItems;
