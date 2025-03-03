function updateTotal() {
    let service = parseInt(document.getElementById("service").value) || 0;
    let petType = parseInt(document.getElementById("pet-type").value) || 0;
    let addons = document.querySelectorAll(".addon:checked");
    let addonTotal = 0;
    addons.forEach(a => addonTotal += parseInt(a.value));

    let total = service + petType + addonTotal;
    document.getElementById("total").innerText = total;
}

document.getElementById("service").addEventListener("change", updateTotal);
document.getElementById("pet-type").addEventListener("change", updateTotal);
document.querySelectorAll(".addon").forEach(el => el.addEventListener("change", updateTotal));

function goToPayment() {
    alert("ไปหน้าชำระเงิน (ยังไม่กำหนด URL)");
}