// document
//   .getElementById("pressAddMoneyBtn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const bkashAddMoney = document.getElementById("input-addMoney").value;
//     const pinNumberBkash = document.getElementById("input-pinNumber").value;
//     // console.log(bkashAddMoney, pinNumberBkash);
//     // balce
//     if (pinNumberBkash === "1234") {
//       console.log("Added your money");
//     } else {
//       alert("Wrong you Pin number");
//     }
//     const myCurrentBalance =
//       document.getElementById("my-current-balance").innerText;

//     // const myBalance = myCurrentBalance + bkashAddMoney;
//     const myBalance = parseFloat(bkashAddMoney);
//     const myAddNewMoney = parseFloat(myCurrentBalance);
//     const myNewBlance = myBalance + myAddNewMoney;

//     document.getElementById("my-current-balance").innerText = myNewBlance;
//     document.getElementById("input-addMoney").value = "";
//     document.getElementById("input-pinNumber").value = "";
//   });
document
  .getElementById("pressAddMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-addMoney").value;
    const newAddBalance = parseFloat(addMoneyInput);
    const pinNumber = document.getElementById("input-pinNumber").value;
    if (pinNumber === "1234") {
      console.log("added your money in your balence");
      const myCurrentBalance =
        document.getElementById("my-current-balance").innerText;
      const myNumberBalance = parseFloat(myCurrentBalance);
      const totalBkashMoney = newAddBalance + myNumberBalance;
      document.getElementById("my-current-balance").innerText = totalBkashMoney;
      document.getElementById("input-addMoney").value = "";
      document.getElementById("input-pinNumber").value = "";
    } else {
      alert("Try Again");
    }
  });
document
  .getElementById("pressCashOutMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("input-cashout").value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById("input-cashout-pinnumber").value;
    if (cashOutPin === "1234") {
      console.log("Succesfully Cash Out");
      const currentBalance =
        document.getElementById("my-current-balance").innerText;
      const myCurrentNumberBalance = parseFloat(currentBalance);
      const newCashOutBalance = myCurrentNumberBalance - cashOutNumber;
      document.getElementById("my-current-balance").innerText =
        newCashOutBalance;
      document.getElementById("input-cashout").value = "";
      document.getElementById("input-cashout-pinnumber").value = "";
    } else {
      alert("Wrong Pin Number");
    }
  });

document.getElementById("cashOutBtn").addEventListener("click", function () {
  document.getElementById("cashout-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
});
document.getElementById("addMoneyBtn").addEventListener("click", function () {
  document.getElementById("add-money-form").classList.remove("hidden");
  document.getElementById("cashout-form").classList.add("hidden");
  const btn = document.getElementById("pressCashOutMoneyBtn");
  btn.style.backgroundColor = "red";
  btn.style.border = "none";
});
