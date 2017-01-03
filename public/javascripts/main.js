window.onload = () => {
  const addRed = document.getElementById("addRed");
  const removeRed = document.getElementById("removeRed");
  const addYellow = document.getElementById("addYellow");
  const removeYellow = document.getElementById("removeYellow");
  const addBlue = document.getElementById("addBlue");
  const removeBlue = document.getElementById("removeBlue");

  let redDrops = 0, yellowDrops = 0, blueDrops = 0;

  addRed.onclick = () => {
    console.log("Add Red!");
    redDrops += 1
    document.getElementById("totalRed").innerHTML = redDrops
    if (redDrops == 1) removeRed.className = removeRed.className.split('disabled').join('')
  };
  removeRed.onclick = () => {
    console.log("Remove Red!");
    if (redDrops > 0) redDrops -= 1
    document.getElementById("totalRed").innerHTML = redDrops
    if (redDrops == 0) removeRed.className = removeRed.className + (' disabled')
  };
  addYellow.onclick = () => {
    console.log("Add Yellow!");
    yellowDrops += 1
    document.getElementById("totalYellow").innerHTML = yellowDrops
    if (yellowDrops == 1) removeYellow.className = removeYellow.className.split('disabled').join('')
  };
  removeYellow.onclick = () => {
    console.log("Remove Yellow!");
    if (yellowDrops > 0) yellowDrops -= 1
    document.getElementById("totalYellow").innerHTML = yellowDrops
    if (yellowDrops == 0) removeYellow.className = removeYellow.className + (' disabled')
  };
  addBlue.onclick = () => {
    console.log("Add Blue!");
    blueDrops += 1
    document.getElementById("totalBlue").innerHTML = blueDrops
    if (blueDrops == 1) removeBlue.className = removeBlue.className.split('disabled').join('')
  };
  removeBlue.onclick = () => {
    console.log("Remove Blue!");
    if (blueDrops > 0) blueDrops -= 1
    document.getElementById("totalBlue").innerHTML = blueDrops
    if (blueDrops == 0) removeBlue.className = removeBlue.className + (' disabled')
  };
}
