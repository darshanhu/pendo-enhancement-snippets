(function(id) {
    const sel = document.getElementById(id), opts = Array.from(sel.options);
    opts.sort(() => Math.random() - 0.5);
    sel.innerHTML = '';
    opts.forEach(opt => sel.add(opt));
    
    sel.selectedIndex = Math.floor(Math.random() * opts.length);
  })('pendo-select-f7355954');