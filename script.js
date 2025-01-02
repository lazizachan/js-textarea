const textareaContainer = document.querySelector(".textarea_container");
const txtBox = document.querySelector(".txt_box");
const charCounter = document.querySelector(".char_counter");
const maxLength = 50;

const txtCounter = () => {
  const currentLenght = txtBox.textContent.length;
  if (currentLenght > maxLength) {
    txtBox.style.border = "2px solid red";
    charCounter.style.color = "red";
  } else {
    txtBox.style.border = "2px solid greenyellow";
    charCounter.style.color = "greenyellow";
  }
  charCounter.textContent = `${currentLenght}/${maxLength}`;
};
txtBox.addEventListener("input", txtCounter);
