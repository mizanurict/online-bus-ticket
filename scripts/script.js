document.getElementById("buy-ticket").addEventListener('click', function(){
   const showParibahanPart = document.getElementById("paribahan");
    showParibahanPart.scrollIntoView();
})

let count = 1;
let totalPrice = 0;

const allBtn = document.getElementsByClassName("seat-btn");
for (const btn of allBtn){
    btn.addEventListener('click', function(e){
      e.target.style.backgroundColor = "orange";

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
    })
}
