window.onload = () => {
  const addRed = document.getElementById("addRed");
  const removeRed = document.getElementById("removeRed");
  const addYellow = document.getElementById("addYellow");
  const removeYellow = document.getElementById("removeYellow");
  const addBlue = document.getElementById("addBlue");
  const removeBlue = document.getElementById("removeBlue");

  addRed.onclick = () => {
    console.log("Add Red!");
  };
  removeRed.onclick = () => {
    console.log("Remove Red!");
  };
  addYellow.onclick = () => {
    console.log("Add Yellow!");
  };
  removeYellow.onclick = () => {
    console.log("Remove Yellow!");
  };
  addBlue.onclick = () => {
    console.log("Add Blue!");
  };
  removeBlue.onclick = () => {
    console.log("Remove Blue!");
  };
}
