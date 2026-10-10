// L8: the four window names build every id on the page
const names = ['about', 'projects', 'experience', 'contact'];

// L9: show one window, hide the rest, update the taskbar text
function showWindow(name) {
  for (let i = 0; i < names.length; i++) {
    const win = document.getElementById('win-' + names[i]);
    win.hidden = names[i] !== name;
  }
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

showWindow('');
console.log('Portfolio OS ready');
