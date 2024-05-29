function showAlert() {
  Swal.fire({
    title: "Do you want to add  the product  to the cart?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Add",
    denyButtonText: "No ",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Successfully added!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Product not added to cart ", "", "info");
    }
  });
}
let closeIcons = document.getElementsByClassName("cartBtn");

for (i = 0; i < closeIcons.length; i++) {
  closeIcons[i].addEventListener("click", showAlert);
}
function check() {
  if (
    document.getElementsByName("email").length < 5 &&
    document.getElementsByName("pswd").length < 8
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Entered Email-id  and Password is wrong",
    });
  } else if (document.getElementsByName("email").length < 5) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Entered Email-id is wrong",
    });
  } else if (document.getElementsByName("pswd").length < 8) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Entered Password is wrong",
    });
  } else {
    document
      .getElementById("LoginSucees")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Good job!",
          text: "Successfully logined",
          icon: "success",
        });
        console.log("SS");
      });
  }
}
