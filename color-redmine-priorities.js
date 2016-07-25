var prioritiesList = {
  'baja': '#b3ff66',
  'low': '#b3ff66',
  'normal': '#ffff66',
  'alta': '#ffd966',
  'high': '#ffd966',
  'urgente': '#ff8c66',
  'urgent': '#ff8c66',
  'inmediata': '#ff6666',
  'immediate': '#ff6666'
};

var cells = document.getElementsByClassName('priority');
for (var i = 0, l = cells.length; i < l; i++) {
  value = cells[i].innerHTML.toLowerCase();
  if (value in prioritiesList)
    cells[i].style.backgroundColor = prioritiesList[value];
}
