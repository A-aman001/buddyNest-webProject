
function viewDetails() {
    alert("แสดงรายละเอียดสินค้า");
}

function selectOption(button, group) {
    document.querySelectorAll('.' + group + ' button').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    validateSelection();
}

function validateSelection() {
    const paymentSelected = document.querySelector('.payment-options button.selected');
    const deliverySelected = document.querySelector('.delivery-options button.selected');
    const payBtn = document.getElementById('pay-btn');

    payBtn.disabled = !(paymentSelected && deliverySelected);
}

function editAddress() {
    alert("แก้ไขหรือเปลี่ยนที่อยู่");
}

function selectOption(button, group) {
    document.querySelectorAll('.' + group + ' button').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');

    // ถ้าเป็นตัวเลือกการจัดส่ง ให้เปลี่ยนค่าจัดส่ง
    if (group === 'delivery-options') {
        const deliveryPriceElement = document.getElementById('delivery-price');
        const deliverySummaryElement = document.getElementById('delivery-price-summary');

        if (button.innerText === 'รับ-ส่งด้วยตัวเอง') {
            deliveryPriceElement.innerText = '฿0.00';
            deliverySummaryElement.innerText = '฿0.00';
        } else if (button.innerText === 'รับ-ส่งโดยร้าน') {
            deliveryPriceElement.innerText = '฿45.00';
            deliverySummaryElement.innerText = '฿45.00';
        }

        // คำนวณยอดรวมใหม่
        calculateTotal();
    }

    validateSelection();
}

function calculateTotal() {
    try {
        // ดึงราคาสินค้าจากรายละเอียดสินค้า
        const productPrices = document.querySelectorAll('.product-info');
        let totalServicePrice = 0;

        productPrices.forEach(product => {
            const priceTexts = product.innerHTML.match(/฿[0-9]+/g);
            if (priceTexts) {
                priceTexts.forEach(priceText => {
                    const priceValue = parseFloat(priceText.replace('฿', ''));
                    if (!isNaN(priceValue)) {
                        totalServicePrice += priceValue;
                    }
                });
            }
        });

        // อัปเดตยอดรวมบริการใน HTML
        document.getElementById('total-service-price').innerText = `฿${totalServicePrice.toFixed(2)}`;
        document.getElementById('service-price').innerText = `฿${totalServicePrice.toFixed(2)}`;

        // ดึงส่วนลดและค่าจัดส่งจากรายละเอียดการจอง
        const discount = parseFloat(document.getElementById('discount-price').innerText.replace('฿', '')) || 0;
        const deliveryPrice = parseFloat(document.getElementById('delivery-price').innerText.replace('฿', '')) || 0;

        // คำนวณยอดชำระเงินทั้งหมด
        const totalPrice = (totalServicePrice - discount) + deliveryPrice;

        // แสดงผลลัพธ์ใน HTML
        document.getElementById('discount-summary').innerText = `฿${discount.toFixed(2)}`;
        document.getElementById('delivery-price-summary').innerText = `฿${deliveryPrice.toFixed(2)}`;
        document.getElementById('total-price').innerText = `฿${totalPrice.toFixed(2)}`;
    } catch (error) {
        console.error("Error in calculateTotal:", error);
    }
}

// เรียกฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
window.onload = calculateTotal;
function goBack() {
    window.history.back(); // กลับไปหน้าที่แล้ว
}

document.getElementById('pay-btn').onclick = function () {
    const paymentSelected = document.querySelector('.payment-options button.selected');
    if (!paymentSelected) return;

    if (paymentSelected.textContent === "QR PromptPay") {
        window.location.href = "../../pages/qr_promptpay.html";
    } else if (paymentSelected.textContent === "บัตรเครดิต/บัตรเดบิต") {
        window.location.href = "../../pages/credit_card.html";
    } else if (paymentSelected.textContent === "เงินสด") {
        window.location.href = "../../pages/my_booking/mybooking-0.html";
    }
};
