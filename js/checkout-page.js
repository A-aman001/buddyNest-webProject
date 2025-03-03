// ตัวแปรเก็บส่วนลด
let discountAmount = 0;

// ฟังก์ชันคำนวณส่วนลด
function applyDiscount() {
    const discountCode = document.getElementById('discount-code').value;
    const discountMessage = document.getElementById('discount-message');

    // ตัวอย่างโค้ดส่วนลด
    const validDiscountCodes = {
        "DISCOUNT10": 10, // ส่วนลด 10 บาท
        "DISCOUNT20": 20, // ส่วนลด 20 บาท
        "FREESHIP": 50,   // ส่วนลด 50 บาท
        "Gift": 200, // // ส่วนลด 50 บาท
    };

    if (validDiscountCodes[discountCode]) {
        discountAmount = validDiscountCodes[discountCode];
        discountMessage.textContent = `ใช้โค้ดส่วนลดสำเร็จ: ส่วนลด ${discountAmount} บาท`;
        discountMessage.style.color = "green";
    } else {
        discountAmount = 0;
        discountMessage.textContent = "โค้ดส่วนลดไม่ถูกต้อง";
        discountMessage.style.color = "red";
    }

    // อัปเดตส่วนลดในทั้งสองส่วน
    document.getElementById('discount-price').textContent = `฿${discountAmount.toFixed(2)}`;
    document.getElementById('discount-summary').textContent = `฿${discountAmount.toFixed(2)}`;

    // คำนวณราคารวมใหม่หลังจากใช้ส่วนลด
    calculateTotal();
}

// ฟังก์ชันคำนวณราคารวม
function calculateTotal() {
    const servicePrice = parseFloat(document.getElementById('service').value) || 0;
    const petTypePrice = parseFloat(document.getElementById('pet-type').value) || 0;
    const addons = document.querySelectorAll('.addon:checked');
    let addonTotal = 0;

    addons.forEach(addon => {
        addonTotal += parseFloat(addon.value);
    });

    // คำนวณราคาก่อนส่วนลด
    const subtotal = servicePrice + petTypePrice + addonTotal;

    // คำนวณราคาหลังหักส่วนลด
    const totalPrice = subtotal - discountAmount;

    // แสดงผลราคา
    document.getElementById('service-price').textContent = `฿${subtotal.toFixed(2)}`;
    document.getElementById('total-price').textContent = `฿${totalPrice.toFixed(2)}`;
}

// ฟังก์ชันตรวจสอบข้อมูลก่อนชำระเงิน
function validateForm() {
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const service = document.getElementById('service').value;
    const petType = document.getElementById('pet-type').value;

    if (!bookingDate || !bookingTime || service === "0" || petType === "0") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return false;
    }
    return true;
}

// ฟังก์ชันไปยังหน้าชำระเงิน
function goToPayment() {
    if (validateForm()) {
        window.location.href = "../../pages/payment/payment.html";
    }
}

// ฟังก์ชันยกเลิก
function goBack() {
    window.history.back();
}

// เพิ่ม Event Listener สำหรับการคำนวณราคา
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('service').addEventListener('change', calculateTotal);
    document.getElementById('pet-type').addEventListener('change', calculateTotal);
    document.querySelectorAll('.addon').forEach(addon => {
        addon.addEventListener('change', calculateTotal);
    });
});