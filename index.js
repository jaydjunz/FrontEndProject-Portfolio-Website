let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function contact(event) {
  // prevent form refresh the page
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_5a7yhgi",
      "template_l79okgk",
      event.target,
      "2xI_baORmpy_SNOrY"
    )
    .then(() => {
      //   throw new Error("error");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove(" modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on ljunze2806@gmail.com"
      );
    });

  setTimeout(() => {
    console.log("it worked 1");
  }, 500);
}

function toggleModal() {
  if (isModalOpen === false) {
    document.body.classList += " modal--open";
    isModalOpen = true;
  } else {
    document.body.classList.remove("modal--open");
    isModalOpen = false;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`;
  }
}
