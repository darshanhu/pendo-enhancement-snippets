((id, fixedValue) => {
    const sel = document.getElementById(id);
    const opts = [...sel.options];
    const fixedOption = opts.find(opt => opt.value === fixedValue);
  
    if (fixedOption) {
      sel.innerHTML = '';
      sel.add(fixedOption);
      opts.filter(opt => opt !== fixedOption).forEach(opt => sel.add(opt));
      sel.value = fixedValue;
    }
  })("pendo-select-298f11e0", "003tt0iinrpx4");