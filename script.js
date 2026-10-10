// L8: the four window names build every id on the page
const names = ['about', 'projects', 'experience', 'contact'];

// L8: one object per project, in the same order as the CV
const projects = [
  { name: 'Antimony Cryptocurrency', platform: 'Desktop (Windows, UNIX)', summary: 'Free, open-source, decentralized peer-to-peer electronic cash system' },
  { name: 'Ujamaa', platform: 'Android, iOS, Web', summary: "Online and delivery service for my school's tuckshop; the online version contributed to a 30% increase in sales" },
  { name: 'MySosTimetable', platform: 'Web', summary: 'Timetable used daily by 350+ students; makes it easy to find empty classrooms' },
  { name: 'PytoExe', platform: 'Web', summary: 'Converts Python files to .exe in a first-in-first-out queue' }
];

// L9: show one window, hide the rest, update the taskbar text
function showWindow(name) {
  for (let i = 0; i < names.length; i++) {
    const win = document.getElementById('win-' + names[i]);
    win.hidden = names[i] !== name;
  }
  document.getElementById('welcome').hidden = name !== '';
  const status = document.getElementById('status');
  status.textContent = name === '' ? 'Desktop' : 'Open: ' + name;
}

// L9: connect one icon and its close button to showWindow
function wire(name) {
  const icon = document.getElementById('icon-' + name);
  const close = document.getElementById('close-' + name);
  icon.addEventListener('click', function () { showWindow(name); });
  close.addEventListener('click', function () { showWindow(''); });
}

for (let i = 0; i < names.length; i++) {
  wire(names[i]);
}

// L9: build one table row per project with createElement and appendChild
function renderProjects() {
  const tbody = document.getElementById('project-rows');
  for (let i = 0; i < projects.length; i++) {
    const row = document.createElement('tr');
    const cells = [projects[i].name, projects[i].platform, projects[i].summary];
    for (let j = 0; j < cells.length; j++) {
      const cell = document.createElement('td');
      cell.textContent = cells[j];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

// L5: validate on submit, then thank the sender and reset the form
const form = document.getElementById('contact-form');
const message = document.getElementById('message');
const counter = document.getElementById('counter');

function updateCounter() {
  counter.textContent = message.value.length + ' / ' + message.maxLength;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formStatus = document.getElementById('form-status');
  if (form.checkValidity()) {
    const name = document.getElementById('name').value;
    formStatus.textContent = 'Thanks, ' + name + '! This demo does not send messages. Email me directly.';
    form.reset();
    updateCounter();
  } else {
    form.reportValidity();
  }
});

// L9: the counter follows every keystroke in the textarea
message.addEventListener('input', updateCounter);

showWindow('');
renderProjects();
updateCounter();
console.log('Portfolio OS ready');
