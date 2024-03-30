const darkMode = () => {
  const temaAtivarBtns = document.querySelectorAll('#tema-ativar');
  const icones = document.querySelectorAll('#icone');
  let darkMode = false;

  temaAtivarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    })
  })

  icones.forEach(icone => {
    icone.addEventListener('click', () => {
      darkMode = !darkMode;

      console.log(darkMode)

      if(darkMode) {
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
      } else {
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
      }
    })
  })
};

export default darkMode;