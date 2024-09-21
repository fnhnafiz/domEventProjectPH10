document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log("clicked button"
  const phoneNum = document.getElementById("input-phone-Number").value;
  const pinNumber = document.getElementById("input-password").value;
  //   console.log(phoneNum, pinNumber);\
  if (phoneNum === "01786695242" && pinNumber === "12345") {
    console.log("You are Write");
    window.location.href = "./homePage.html";
  } else {
    alert("Wrong Username & Pin Number");
  }
});
