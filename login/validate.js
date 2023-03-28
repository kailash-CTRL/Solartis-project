const form = document.getElementById("register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements["text"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const confirmPassword = form.elements["confirm-password"].value;

  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all the fields");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  } else {
    form.submit();
  }
});

// window.onload = function () {
//   const form = document.getElementById("login-form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const username = form.elements["text"].value;
//     const password = form.elements["password"].value;

//     if (username === "" || password === "") {
//       alert("Please fill in all fields");
//     } else {
//       // If all fields are valid, submit the form
//       form.submit();
//     }
//   });
// };
//declearing html elements

// const imgDiv = document.querySelector(".profile-pic-div");
// const img = document.querySelector("#photo");
// const file = document.querySelector("#file");
// const uploadBtn = document.querySelector("#uploadBtn");

// //if user hover on img div

// imgDiv.addEventListener("mouseenter", function () {
//   uploadBtn.style.display = "block";
// });

// //if we hover out from img div

// imgDiv.addEventListener("mouseleave", function () {
//   uploadBtn.style.display = "none";
// });

// //lets work for image showing functionality when we choose an image to upload

// //when we choose a foto to upload

// file.addEventListener("change", function () {
//   //this refers to file
//   const choosedFile = this.files[0];

//   if (choosedFile) {
//     const reader = new FileReader(); //FileReader is a predefined function of JS

//     reader.addEventListener("load", function () {
//       img.setAttribute("src", reader.result);
//     });

//     reader.readAsDataURL(choosedFile);

//     //Allright is done

//     //please like the video
//     //comment if have any issue related to vide & also rate my work in comment section

//     //And aslo please subscribe for more tutorial like this

//     //thanks for watching
//   }
// });
