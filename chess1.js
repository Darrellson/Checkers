function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let targetSlot = ev.target;

    // Check if the target slot or its parent already has a child
    if (!targetSlot.hasChildNodes() && targetSlot.classList.contains('black') || !targetSlot.parentNode.hasChildNodes()) {
      targetSlot.appendChild(document.getElementById(data));
    } else {
      alert("Cannot move a piece onto another piece!");
    }
  }

// const numbers = document.querySelector(".numbers");
// const letters = document.querySelector(".letters");

// let letter = "ABCDEFGH";

// for (let i = 1; i <= 8; i++) {
//     let numberli = document.createElement("li");
//     numberli.textContent = i;
//     numbers.appendChild(numberli);
//     let letterli = document.createElement("li");
//     letterli.textContent = letter[i - 1]; 
//     letters.appendChild(letterli);
// }

