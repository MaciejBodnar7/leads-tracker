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
// tab save button
tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  });
});

// listen for double click from delete button and wipe all linnk
deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  ulEl.textContent = null;
});

// save input button with if that prevent saving empty text input
inputBtn.addEventListener('click', function () {
  if (inputEl.value === '') {
    console.log('nothing');
  } else {
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
  }
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
