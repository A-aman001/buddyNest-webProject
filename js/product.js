document.addEventListener("DOMContentLoaded", function () {
    const productElement = document.querySelector(".product");
    productElement.addEventListener("click", function () {
        openModal();
    });
});

// เปิด Modal
function openModal() {
    document.getElementById("productModal").style.display = "block";

    // ข้อมูลร้าน (ตัวอย่าง)
    const shopData = {
        name: "KIMFAM",
        logo: "../../img/ร้าน-1.png",
        petType: "แมว 1-4 เดือน - ขนยาว",
        serviceType: "ตู้เป่าขนอัตโนมัติ + แชมพูบำรุงขน",
        servicePrice: 170,
        latitude: 19.029, // พิกัดตัวอย่าง
        longitude: 99.923
    };

    // แสดงข้อมูลร้านค้า
    document.getElementById("shopName").innerText = shopData.name;
    document.getElementById("shopLogo").src = shopData.logo;
    document.getElementById("petType").innerText = shopData.petType;
    document.getElementById("serviceType").innerText = shopData.serviceType;
    document.getElementById("servicePrice").innerText = shopData.servicePrice;

    // แสดง Google Map
    showGoogleMap(shopData.latitude, shopData.longitude);
}

// ปิด Modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// แสดง Google Map
function showGoogleMap(lat, lng) {
    const mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `<iframe width="100%" height="200" frameborder="0"
        src="https://www.google.com/maps?q=${lat},${lng}&output=embed">
    </iframe>`;
}

// บันทึกการจอง
function saveBooking() {
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;

    if (!date || !time) {
        alert("กรุณาเลือกวันและเวลาให้ครบถ้วน");
        return;
    }

    alert(`การจองของคุณถูกบันทึกแล้ว:\nวันที่: ${date}\nเวลา: ${time}`);
    closeModal();
}