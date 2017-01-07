window.onload = () => {
  const addRed = document.getElementById('addRed')
  const removeRed = document.getElementById('removeRed')
  const addYellow = document.getElementById('addYellow')
  const removeYellow = document.getElementById('removeYellow')
  const addBlue = document.getElementById('addBlue')
  const removeBlue = document.getElementById('removeBlue')
  const addToPalette = document.getElementById('addToPalette')
  const removeFromPalette = document.getElementById('palette')

  let redDrops = 0, yellowDrops = 0, blueDrops = 0

  function calcRYB(red, yellow, blue) {
    let max = Math.max(red, yellow, blue) || 1
    let proportions = [red/max*255, yellow/max*255, blue/max*255]
    return proportions
  }

  function isDisabled(element) {
    return element.className.includes('disabled')
  }

  function getPaints(rgbMiddle) {
    let stepsWhite = [
      (255 - rgbMiddle[0]) / 5,
      (255 - rgbMiddle[1]) / 5,
      (255 - rgbMiddle[2]) / 5,
    ]
    let stepsBlack = [
      rgbMiddle[0] / 5,
      rgbMiddle[1] / 5,
      rgbMiddle[2] / 5,
    ]
    return [
      null,
      '255, 255, 255',
      rgbMiddle.map((value, i) => Math.floor(value + stepsWhite[i] * 4)).join(),
      rgbMiddle.map((value, i) => Math.floor(value + stepsWhite[i] * 3)).join(),
      rgbMiddle.map((value, i) => Math.floor(value + stepsWhite[i] * 2)).join(),
      rgbMiddle.map((value, i) => Math.floor(value + stepsWhite[i])).join(),
      rgbMiddle.join(),
      rgbMiddle.join(),
      rgbMiddle.map((value, i) => Math.floor(value - stepsBlack[i])).join(),
      rgbMiddle.map((value, i) => Math.floor(value - stepsBlack[i] * 2)).join(),
      rgbMiddle.map((value, i) => Math.floor(value - stepsBlack[i] * 3)).join(),
      rgbMiddle.map((value, i) => Math.floor(value - stepsBlack[i] * 4)).join(),
      '0, 0, 0'
    ]
  }

  function updateColors () {
    document.getElementById('totalRed').innerHTML = redDrops
    document.getElementById('totalYellow').innerHTML = yellowDrops
    document.getElementById('totalBlue').innerHTML = blueDrops
    if (redDrops == 1 && isDisabled(removeRed)) removeRed.className = removeRed.className.split('disabled').join('')
    if (yellowDrops == 1 && isDisabled(removeYellow)) removeYellow.className = removeYellow.className.split('disabled').join('')
    if (blueDrops == 1 && isDisabled(removeBlue)) removeBlue.className = removeBlue.className.split('disabled').join('')
    if (redDrops == 0 && !isDisabled(removeRed)) removeRed.className = removeRed.className + (' disabled')
    if (yellowDrops == 0 && !isDisabled(removeYellow)) removeYellow.className = removeYellow.className + (' disabled')
    if (blueDrops == 0 && !isDisabled(removeBlue)) removeBlue.className = removeBlue.className + (' disabled')
    let ryb = calcRYB(redDrops, yellowDrops, blueDrops)
    window.rgb = window.ryb2rgb(ryb)
    if (redDrops + yellowDrops + blueDrops == 0) {
      window.rgb = [127, 127, 127]
      addToPalette.className = addToPalette.className + ' disabled'
    } else if (redDrops + yellowDrops + blueDrops == 1) {
      if ( document.getElementById('logo') ) document.getElementById('logo').remove()
      if ( isDisabled(addToPalette) ) addToPalette.className = addToPalette.className.split(' disabled').join('')
    }
    let paints = getPaints(window.rgb)
    document.getElementById('paint1').setAttribute('style', `background-color: rgb(${paints[1]}); color: rgb(${paints[1]});`)
    document.getElementById('paint2').setAttribute('style', `background-color: rgb(${paints[2]}); color: rgb(${paints[2]});`)
    document.getElementById('paint3').setAttribute('style', `background-color: rgb(${paints[3]}); color: rgb(${paints[3]});`)
    document.getElementById('paint4').setAttribute('style', `background-color: rgb(${paints[4]}); color: rgb(${paints[4]});`)
    document.getElementById('paint5').setAttribute('style', `background-color: rgb(${paints[5]}); color: rgb(${paints[5]});`)
    document.getElementById('paint6').setAttribute('style', `background-color: rgb(${paints[6]}); color: rgb(${paints[6]});`)
    document.getElementById('paint7').setAttribute('style', `background-color: rgb(${paints[7]}); color: rgb(${paints[7]});`)
    document.getElementById('paint8').setAttribute('style', `background-color: rgb(${paints[8]}); color: rgb(${paints[8]});`)
    document.getElementById('paint9').setAttribute('style', `background-color: rgb(${paints[9]}); color: rgb(${paints[9]});`)
    document.getElementById('paint10').setAttribute('style', `background-color: rgb(${paints[10]}); color: rgb(${paints[10]});`)
    document.getElementById('paint11').setAttribute('style', `background-color: rgb(${paints[11]}); color: rgb(${paints[11]});`)
    document.getElementById('paint12').setAttribute('style', `background-color: rgb(${paints[12]}); color: rgb(${paints[12]});`)
  }

  function removeColorRow (button) {
    button.target.parentNode.parentNode.parentNode.remove()
  }

  addRed.onclick = () => {
    redDrops += 1
    updateColors()
  }
  removeRed.onclick = () => {
    if (redDrops > 0) redDrops -= 1
    updateColors()
  }
  addYellow.onclick = () => {
    yellowDrops += 1
    updateColors()
  }
  removeYellow.onclick = () => {
    if (yellowDrops > 0) yellowDrops -= 1
    updateColors()
  }
  addBlue.onclick = () => {
    blueDrops += 1
    updateColors()
  }
  removeBlue.onclick = () => {
    if (blueDrops > 0) blueDrops -= 1
    updateColors()
  }
  addToPalette.onclick = () => {
    if (redDrops + yellowDrops + blueDrops !== 0) {
      let newRow = document.getElementById('palette').firstChild.cloneNode(true)
      newRow.removeAttribute('style')
      newRow.childNodes[0].childNodes[1].setAttribute('style', `background-color: rgb(${window.rgb.join()});`)
      newRow.childNodes[1].firstChild.innerHTML = redDrops
      newRow.childNodes[2].firstChild.innerHTML = yellowDrops
      newRow.childNodes[3].firstChild.innerHTML = blueDrops
      document.getElementById('palette').append(newRow)
    }
  }
  removeFromPalette.onclick = (button) => {
    if (button.target.className.includes('deleteFromPalette')) {
      removeColorRow (button)
    }
  }
}
