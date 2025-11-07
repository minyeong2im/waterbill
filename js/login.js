document.getElementById("loginForm").addEventListener("submit",function(e) {
    e.preventDefault();
    const input = document.getElementById("username").value;

    if (input === "임민영님 만세") {
        alert("접속 성공🎉");
        window.location.href = "/WaterBill/main.html";
    } else {
        alert("다시 시도해주세요");
    }
});