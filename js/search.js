const mockData = [
    { province: "กรุงเทพมหานคร", petType: "สุนัข", service: "บริการกรูมมิ่งสำหรับสุนัขในกรุงเทพฯ" },
    { province: "เชียงใหม่", petType: "แมว", service: "ฝากเลี้ยงแมวในเชียงใหม่" },
    { province: "ภูเก็ต", petType: "กระต่าย", service: "ดูแลกระต่ายรายวันในภูเก็ต" },
    { province: "ชลบุรี", petType: "แฮมสเตอร์", service: "บริการรับส่งแฮมสเตอร์ในชลบุรี" },
];

const searchServices = () => {
    const province = document.getElementById("province").value;
    const petType = document.getElementById("pet-type").value;
    const resultsList = document.getElementById("resultsList");
    const resultsDiv = document.getElementById("results");

    resultsList.innerHTML = "";

    const filteredResults = mockData.filter(item =>
        (!province || item.province === province) &&
        (!petType || item.petType === petType)
    );

    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.service;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "ไม่พบผลลัพธ์ที่ตรงกับการค้นหาของคุณ";
        resultsList.appendChild(li);
    }

    resultsDiv.style.display = "block";
};

// เชื่อมปุ่มค้นหากับฟังก์ชัน
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".search-area-button button").addEventListener("click", searchServices);
});