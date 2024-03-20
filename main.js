console.log('extension by MB.');

let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');

//get from local storage
const leadsFromLocaleStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocaleStorage);

if (leadsFromLocaleStorage) {
  myLeads = leadsFromLocaleStorage;
  renderLeads();
  console.log('true');
} else {
  console.log('false');
}

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  ulEl.textContent = null;
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  localStorage.setItem('myLeads', JSON.stringify(myLeads)); //saving leads to locla storage and turnig to string
  //ulEl.innerHTML += '<li><a href=" ' + inputEl.value + ' " target=”_blank”>' + inputEl.value + '</a></li>';
  ulEl.innerHTML += `
                      <li>
                        <a href="${inputEl.value}" target=”_blank”>${inputEl.value}</a>
                      </li>
                    `;
  inputEl.value = '';
  console.log(myLeads);
  console.log(localStorage.getItem('myLeads'));
});

//Old way of rendering but not efficient beacuse its looping evry item in array every time

// function renderLeads() {
//   let listItems = '';
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += '<li>' + myLeads[i] + '</li>';
//   }
//   ulEl.innerHTML = listItems;
// }

function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
          <li>
              <a target='_blank' href='${myLeads[i]}'>
                  ${myLeads[i]}
              </a>
          </li>
      `;
  }
  ulEl.innerHTML = listItems;
}
