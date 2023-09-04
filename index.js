const inputs = document.querySelectorAll("input");
const gallery = document.querySelector(".slider__gallery");
const imgWidth = document.querySelector("img").width;
let currentImgNumber = Number(document.querySelector("input:checked").value);

const moveSlider = (direction) => {
  if (direction === "left") {
    gallery.scrollLeft = imgWidth * currentImgNumber;
  }
  if (direction === "right") {
    gallery.scrollLeft = imgWidth * currentImgNumber;
  }
};

inputs.forEach((input) => {
  const imgNumber = Number(input.value);
  input.addEventListener("click", () => {
    if (currentImgNumber > imgNumber) {
      currentImgNumber = imgNumber
      moveSlider("right");
    } else if (currentImgNumber < imgNumber) {
      currentImgNumber = imgNumber
      moveSlider("left");
    } else {
      return;
    }
  });
})
