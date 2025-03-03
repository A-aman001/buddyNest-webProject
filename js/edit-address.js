function editAddress() {
    document.getElementById("editAddressModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editAddressModal").style.display = "none";
}

function saveAddress() {
    let newName = document.getElementById("edit-name").value.trim();
    let newPhone = document.getElementById("edit-phone").value.trim();
    let newAddress = document.getElementById("edit-address").value.trim();

    if (!newName || !newPhone || !newAddress) {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    // อัปเดตค่าที่อยู่ใหม่เฉพาะเมื่อกดบันทึก
    let addressContainer = document.querySelector(".address");
    addressContainer.innerHTML = `
        <strong style="font-size: medium;">${newName}</strong> (${newPhone})<br>
        ${newAddress}<br>
        <span class="edit-address" onclick="editAddress()">แก้ไข/เปลี่ยนที่อยู่</span>
    `;

    closeModal(); // ปิด Modal
}