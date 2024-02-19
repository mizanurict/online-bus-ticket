/** @format */

document.getElementById("buy-ticket").addEventListener("click", function () {
  const showParibahanPart = document.getElementById("paribahan");
  showParibahanPart.scrollIntoView();
});

let count = 1;
let totalPrice = 0;

const allBtn = document.getElementsByClassName("seat-btn");
for (const btn of allBtn) {
  
  btn.addEventListener("click", function (e) {

    // const repeatSeat = btn.innerText;
    // const alreadySeat = div.childNodes[0].innerText;
    // if (alreadySeat === repeatSeat) {
    //   alert("Already selected");
    //   return false;
    // }

    const bookingSeatNumber = document.getElementById("booking-seat").innerText;
    if (bookingSeatNumber === "4") {
      alert("Please don't select seat");
      return false;
    }
    e.target.style.backgroundColor = "orange";
    e.target.style.color = "White";


    const totalSeat = parseInt(document.getElementById("total-seat").innerText);
    const newTotalSeat = totalSeat - 1;
    document.getElementById("total-seat").innerText = newTotalSeat;
    document.getElementById("booking-seat").innerText = count;
    count++;
    const btnClass = btn.innerText;

    const toAddSeat = document.getElementById("to-add-seat");
    const div = document.createElement("div");
    div.classList.add("new-class");
    const p = document.createElement("p");
    p.innerText = btnClass;
    const p2 = document.createElement("p");
    p2.innerText = "Economoy";
    const p3 = document.createElement("p");
    p3.innerText = "550";

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);

    toAddSeat.appendChild(div);
    totalPrice = totalPrice + 550;
    document.getElementById("total-price").innerText = totalPrice;
    grandTotal(totalPrice);

  });

}

function grandTotal(event) {
  document.getElementById("coupon-button").addEventListener("click", function () {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "NEW 15") {
      event = event - event * 0.15;
      document.getElementById("grand-total").innerText = event;
      document.getElementById("coupon-section").classList.add("hidden");
    } else if (couponCode === "Couple 20") {
      event = event - event * 0.2;
      document.getElementById("grand-total").innerText = event;
      document.getElementById("coupon-section").classList.add("hidden");
    } else {
      alert("Invalid Coupon Code");
    }
  });

  document.getElementById("grand-total").innerText = event;

  
}
