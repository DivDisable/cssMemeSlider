const inputs = document.querySelectorAll("input");
const gallery = document.querySelector(".slider__gallery");
const imgWidth = document.querySelector("img").width;
const sliderTitle = document.querySelector(".slider__title");
let currentImgNumber = Number(document.querySelector("input:checked").value);

const titles = [
  "capitalism",
  "karl marx",
  "html vs html + css",
  "illusion of choice"
];

sliderTitle.innerHTML = titles[currentImgNumber];

const hideSliderTitle = () => {
  sliderTitle.classList.add("opacity-0");
};

const showSliderTitle = () => {
  sliderTitle.classList.remove("opacity-0");
  gallery.addEventListener("scroll", hideAndSetSliderTitle);
};

const setTitle = (titleNumber) => {
  sliderTitle.innerHTML = titles[titleNumber];
};

const hideAndSetSliderTitle = () => {
  gallery.removeEventListener("scroll", hideAndSetSliderTitle);
  const transitionendHandle = () => {
    setTitle(currentImgNumber);
    sliderTitle.removeEventListener("transitionend", transitionendHandle);
  };
  sliderTitle.addEventListener("transitionend", transitionendHandle);
  hideSliderTitle();
};

gallery.addEventListener("scroll", hideAndSetSliderTitle);
gallery.addEventListener("scrollend", showSliderTitle);


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
