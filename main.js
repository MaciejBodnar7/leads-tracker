console.log('extension by MB.');

let myLeads = [];
let oldMyLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

//get from local storage
const leadsFromLocaleStorage = JSON.parse(localStorage.getItem('myLeads'));
console.log(leadsFromLocaleStorage);

if (leadsFromLocaleStorage) {
  myLeads = leadsFromLocaleStorage;
  render(myLeads);
  console.log('true' + ' -local storage');
} else {
  console.log('false' + ' -local storage');
}
// listen for tabsave button and store link from tab
const tabs = [{ url: 'https://www.linkedin.com/in/per-harald-borgen/' }];

tabBtn.addEventListener('click', function () {
  console.log('tabbtn');
  console.log(tabs[0].url);

  myLeads.push(tabs[0].url);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  ulEl.innerHTML += `
                      <li>
                        <a href="${tabs[0].url}" target=”_blank”>${tabs[0].url}</a>
                      </li>
                    `;
});

// listen for double click from delete button and wipe all linnk
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

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
          </li>
      `;
  }
  ulEl.innerHTML = listItems;
}
