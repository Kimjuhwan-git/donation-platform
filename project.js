// ===============================
// 프로젝트 데이터
// ===============================

const projects = {

    // ===============================
    // 교통
    // ===============================

    traffic: {

        category: "🚸 교통",

        title: "횡단보도 LED 바닥신호등 설치",

        subTitle:
            "야간 교통사고 예방을 위해 LED 바닥신호등을 설치하는 프로젝트입니다.",

        description:
            "야간에는 횡단보도를 건너는 보행자가 차량과 신호를 확인하기 어려워 사고 위험이 높습니다. 시민 여러분의 후원으로 LED 바닥신호등을 설치하여 운전자와 보행자가 서로를 쉽게 확인할 수 있는 안전한 보행환경을 만들고자 합니다.",

        // 교통 이미지
        image: "images/traffic.png",

        currentAmount: 15200000,

        goalAmount: 20000000,

        participants: 824

    },


    // ===============================
    // 환경
    // ===============================

    environment: {

        category: "🌳 환경",

        title: "공원 벤치 설치",

        subTitle:
            "시민들이 편안하게 쉬어갈 수 있는 쾌적한 공원을 만들기 위해 벤치를 설치하는 프로젝트입니다.",

        description:
            "공원을 이용하는 시민들이 잠시 쉬어갈 수 있는 공간이 부족한 곳이 있습니다. 시민 여러분의 후원으로 공원 곳곳에 편안하게 이용할 수 있는 벤치를 설치하여 누구나 쉬어갈 수 있는 쾌적한 휴식 공간을 만들고자 합니다.",

        // 환경 이미지
        image: "images/environment.png",

        currentAmount: 8500000,

        goalAmount: 10000000,

        participants: 512

    },


    // ===============================
    // 안전
    // ===============================

    safety: {

        category: "🛡️ 안전",

        title: "골목길 CCTV 설치",

        subTitle:
            "안전한 귀갓길과 범죄 예방을 위해 CCTV가 필요한 골목길에 CCTV를 설치하는 프로젝트입니다.",

        description:
            "늦은 밤 어두운 골목길을 이용하는 시민들은 안전에 대한 불안감을 느낄 수 있습니다. 시민 여러분의 후원으로 CCTV가 부족한 골목길에 안전시설을 마련하여 주민들이 더욱 안심하고 생활할 수 있는 환경을 만들고자 합니다.",

        // 안전 이미지
        image: "images/safety.png",

        currentAmount: 12300000,

        goalAmount: 15000000,

        participants: 691

    },


    // ===============================
    // 복지
    // ===============================

    welfare: {

        category: "❤️ 복지",

        title: "독거노인 냉방 지원",

        subTitle:
            "무더운 여름을 보내는 독거노인에게 시원하고 안전한 생활환경을 지원하는 프로젝트입니다.",

        description:
            "여름철 무더위는 혼자 생활하는 어르신들에게 더욱 큰 어려움이 될 수 있습니다. 시민 여러분의 후원으로 독거노인 가정에 냉방용품과 필요한 지원을 제공하여 어르신들이 건강하고 시원한 여름을 보낼 수 있도록 돕고자 합니다.",

        // 복지 이미지
        image: "images/welfare.png",

        currentAmount: 6800000,

        goalAmount: 10000000,

        participants: 437

    }

};


// ===============================
// URL에서 프로젝트 종류 가져오기
// ===============================

const params =
    new URLSearchParams(window.location.search);

const projectType =
    params.get("project");


// ===============================
// 프로젝트 데이터 선택
// ===============================

// URL이 잘못되었을 경우
// 기본값으로 교통 프로젝트 표시

const project =
    projects[projectType] || projects.traffic;


// ===============================
// 숫자 콤마 표시 함수
// ===============================

function formatNumber(number) {

    return number.toLocaleString("ko-KR");

}


// ===============================
// 프로젝트 기본 정보 표시
// ===============================

// 카테고리

document.getElementById("projectCategory").innerText =
    project.category;


// 제목

document.getElementById("projectTitle").innerText =
    project.title;


// 한 줄 설명

document.getElementById("projectSubTitle").innerText =
    project.subTitle;


// 프로젝트 소개

document.getElementById("projectDescription").innerText =
    project.description;


// ===============================
// 프로젝트 이미지 표시
// ===============================

const projectImage =
    document.getElementById("projectImage");


// 이미지 경로 설정

projectImage.src =
    project.image;


// 이미지 로딩 실패 확인

projectImage.onerror = function () {

    console.error(
        "이미지를 불러오지 못했습니다:",
        project.image
    );

};


// ===============================
// 모금액 표시
// ===============================

document.getElementById("currentAmount").innerText =
    formatNumber(project.currentAmount) + "원";


document.getElementById("goalAmount").innerText =
    formatNumber(project.goalAmount) + "원";


// ===============================
// 달성률 계산
// ===============================

const targetPercent =
    Math.round(
        (project.currentAmount /
            project.goalAmount) * 100
    );


// ===============================
// 참여자 수 표시
// ===============================

const percentText =
    document.getElementById("projectPercent");


// ===============================
// 달성률 애니메이션
// ===============================

const progressBar =
    document.getElementById("progressBar");


// 처음에는 0%

progressBar.style.width = "0%";


// 애니메이션 시작

setTimeout(function () {

    progressBar.style.width =
        targetPercent + "%";

}, 300);


// ===============================
// 달성률 숫자 애니메이션
// ===============================

let currentPercent = 0;


// 애니메이션 속도

const animationDuration = 1200;


// 시작 시간

const startTime =
    performance.now();


function animatePercent(currentTime) {

    const elapsed =
        currentTime - startTime;


    const progress =
        Math.min(
            elapsed / animationDuration,
            1
        );


    // 부드러운 증가 효과

    currentPercent =
        Math.floor(
            progress * targetPercent
        );


    // 화면 표시

    percentText.innerText =
        `${currentPercent}% 달성 · ${project.participants}명이 함께했습니다.`;



    // 아직 애니메이션이 끝나지 않았다면 반복

    if (progress < 1) {

        requestAnimationFrame(
            animatePercent
        );

    }

}


// 애니메이션 시작

requestAnimationFrame(
    animatePercent
);


// ===============================
// 후원 금액 선택
// ===============================

const amountButtons =
    document.querySelectorAll(".amount");


const customAmount =
    document.getElementById("customAmount");


// 금액 버튼 클릭

amountButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            // 모든 버튼 선택 해제

            amountButtons.forEach(btn => {

                btn.classList.remove(
                    "selected"
                );

            });


            // 현재 버튼 선택

            this.classList.add(
                "selected"
            );


            // 직접 입력 초기화

            customAmount.value = "";

        }
    );

});


// ===============================
// 직접 입력 금액
// ===============================

customAmount.addEventListener(
    "input",
    function () {

        // 직접 입력하면
        // 버튼 선택 해제

        amountButtons.forEach(button => {

            button.classList.remove(
                "selected"
            );

        });

    }
);


// ===============================
// 결제 버튼
// ===============================

const paymentButtons =
    document.querySelectorAll(
        ".naver, .kakao, .toss"
    );


paymentButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            alert(
                "아직 초기 모델입니다!\n더 나은 서비스로 다시 찾아뵙겠습니다."
            );

        }
    );

});
