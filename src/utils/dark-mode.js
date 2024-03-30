const darkMode = () => {
  const temaAtivarBtns = document.querySelectorAll('#tema-ativar');

  temaAtivarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    })
  })
};

export default darkMode;