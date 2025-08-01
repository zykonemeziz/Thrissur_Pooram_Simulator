function toggleAudio(id, btn) {
  const audio = document.getElementById(id);
  if (audio.paused) {
    audio.play();
    btn.textContent = '||';
  } else {
    audio.pause();
    btn.textContent = '▷';
  }
}

function setVolume(id, value) {
  const audio = document.getElementById(id);
  audio.volume = value;
}
