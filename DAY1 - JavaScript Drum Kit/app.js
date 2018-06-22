window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop function from running
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

window.addEventListener('keyup', function (e) {
  const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!keys) return;
    keys.classList.remove('playing');
  })
