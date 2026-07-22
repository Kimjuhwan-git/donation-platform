// ------------------------------
// 카테고리 필터
// ------------------------------

const filterButtons = document.querySelectorAll(".category-menu button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // 버튼 활성화
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if(filter === "전체"){

                card.style.display = "block";

            }else if(card.dataset.category === filter){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

});


// ------------------------------
// 프로젝트 보기 버튼
// ------------------------------

const projectButtons =
    document.querySelectorAll(".projectBtn");

projectButtons.forEach(button => {

    button.addEventListener("click", function () {

        const projectType =
            this.getAttribute("data-project");

        window.location.href =
            "project.html?project=" + projectType;

    });

});


// ------------------------------
// 카드 애니메이션
// ------------------------------

cards.forEach((card,index)=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";

    setTimeout(()=>{

        card.style.transition=".5s";
        card.style.opacity="1";
        card.style.transform="translateY(0)";

    },index*150);

});
