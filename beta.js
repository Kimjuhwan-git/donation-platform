// ===============================
// 설문 제출
// ===============================

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

    const easy = document.querySelector('input[name="easy"]:checked');
    const join = document.querySelector('input[name="join"]:checked');

    // 응답 여부 확인
    if (!easy || !join) {

        alert("모든 질문에 응답해주세요.");

        return;

    }

    // 응답값
    const surveyData = {

        easy: easy.value,
        join: join.value

    };

    console.log("설문 응답 :", surveyData);

    // 제출 확인
    const ok = confirm(
        "설문을 제출하시겠습니까?"
    );

    if (!ok) return;

// Google Forms 전송
const formURL =
"https://docs.google.com/forms/d/e/1FAIpQLSeoKoQAgAuMAnlrLW1EEglF4Y_3Q5U5DJ6z4KANzq3O0HLb0Q/formResponse";

const formData = new FormData();

formData.append(
    "entry.1713239875",
    easy.parentNode.innerText.trim()
);

formData.append(
    "entry.981646072",
    join.parentNode.innerText.trim()
);

fetch(formURL,{
    method:"POST",
    mode:"no-cors",
    body:formData
});

// 제출 완료
alert(
    "소중한 의견 감사합니다!\n더 좋은 서비스로 찾아뵙겠습니다."
);

    // 제출 완료
    alert(
        "소중한 의견 감사합니다!\n더 좋은 서비스로 찾아뵙겠습니다."
    );

    // 버튼 비활성화
    submitBtn.disabled = true;

    submitBtn.innerText = "제출 완료";

    submitBtn.style.background = "#999";

    // 라디오 버튼 비활성화
    document
        .querySelectorAll("input[type=radio]")
        .forEach(input => {

            input.disabled = true;

        });

});

// ===============================
// 후원 페이지 이동
// ===============================

const donateBtn = document.getElementById("donateBtn");

donateBtn.addEventListener("click", function () {

    window.location.href = "index.html";

});