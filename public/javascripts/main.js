window.onload = () => {
  const addRed = document.getElementById("addRed");
  const removeRed = document.getElementById("removeRed");
  const addYellow = document.getElementById("addYellow");
  const removeYellow = document.getElementById("removeYellow");
  const addBlue = document.getElementById("addBlue");
  const removeBlue = document.getElementById("removeBlue");

  let redDrops = 0, yellowDrops = 0, blueDrops = 0;

  function calcRYB(red, yellow, blue) {
    let max = Math.max(red, yellow, blue) || 1
    let proportions = [red/max*255, yellow/max*255, blue/max*255]
    return proportions
  }

  function isDisabled(element) {
    return element.className.includes('disabled')
  }

  function updateColors () {
    document.getElementById("totalRed").innerHTML = redDrops
    document.getElementById("totalYellow").innerHTML = yellowDrops
    document.getElementById("totalBlue").innerHTML = blueDrops
    if (redDrops == 1 && isDisabled(removeRed)) removeRed.className = removeRed.className.split('disabled').join('')
    if (yellowDrops == 1 && isDisabled(removeYellow)) removeYellow.className = removeYellow.className.split('disabled').join('')
    if (blueDrops == 1 && isDisabled(removeBlue)) removeBlue.className = removeBlue.className.split('disabled').join('')
    if (redDrops == 0 && !isDisabled(removeRed)) removeRed.className = removeRed.className + (' disabled')
    if (yellowDrops == 0 && !isDisabled(removeYellow)) removeYellow.className = removeYellow.className + (' disabled')
    if (blueDrops == 0 && !isDisabled(removeBlue)) removeBlue.className = removeBlue.className + (' disabled')
    let ryb = calcRYB(redDrops, yellowDrops, blueDrops)
    let rgb = window.ryb2rgb(ryb).join()
    document.getElementById("paint").setAttribute('style', 'background-color: ' + `rgb(${rgb})`)
  }

  addRed.onclick = () => {
    redDrops += 1
    updateColors()
  };
  removeRed.onclick = () => {
    if (redDrops > 0) redDrops -= 1
    updateColors()
  };
  addYellow.onclick = () => {
    yellowDrops += 1
    updateColors()
  };
  removeYellow.onclick = () => {
    if (yellowDrops > 0) yellowDrops -= 1
    updateColors()
  };
  addBlue.onclick = () => {
    blueDrops += 1
    updateColors()
  };
  removeBlue.onclick = () => {
    if (blueDrops > 0) blueDrops -= 1
    updateColors()
  };
}
