const params = new URLSearchParams(window.location.search);

const category = params.get("category");

const image = document.getElementById("projectImage");

switch(category){

    case "traffic":

        image.src="images/traffic.png";
        break;

    case "environment":

        image.src="images/environment.png";
        break;

    case "safety":

        image.src="images/safety.png";
        break;

    case "welfare":

        image.src="images/welfare.png";
        break;

    default:

        image.src="images/traffic.png";

}
// ==========================
// 진행률 애니메이션
// ==========================

const progressBar = document.querySelector(".bar");

window.addEventListener("load", () => {
    progressBar.style.width = "0%";

    setTimeout(() => {
        progressBar.style.width = "76%";
    }, 300);
});

// ==========================
// 후원 금액 선택
// ==========================

const amountButtons = document.querySelectorAll(".amount");
const customAmount = document.getElementById("customAmount");

let selectedAmount = 0;

amountButtons.forEach(button => {

    button.addEventListener("click", () => {

        amountButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        customAmount.value = "";

        selectedAmount = parseInt(
            button.innerText.replace(/[^0-9]/g, "")
        );

    });

});

// ==========================
// 직접 입력
// ==========================

customAmount.addEventListener("input", () => {

    amountButtons.forEach(btn =>
        btn.classList.remove("active")
    );

    selectedAmount = Number(customAmount.value);

});

// ==========================
// 결제 버튼
// ==========================

const paymentButtons = document.querySelectorAll(
    ".paymentCard button"
);

paymentButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (selectedAmount <= 0 || isNaN(selectedAmount)) {

            alert("후원 금액을 선택해주세요.");

            return;

        }

        const payMethod = button.innerText;

        const ok = confirm(

`${selectedAmount.toLocaleString()}원을

${payMethod}

로 후원하시겠습니까?`

        );

        if(ok){

            // 나중에 실제 결제 API 호출

            window.location.href = "complete.html";

        }

    });

});