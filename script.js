document.addEventListener("DOMContentLoaded", ()=> {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const troll = document.querySelector(".troll");
    const hands = document.querySelector('.hands');
    const num = document.querySelectorAll('.num');

    if (btn1 || btn2) {
        btn1.addEventListener('click', ()=> {
            window.location.href = "troll.html";
        })

        btn2.addEventListener('click', ()=> {
            window.location.href = "https://google.com";
        })
    }


    troll.classList.add("anim");
    hands.classList.add("anim");
    num.forEach(number => {
        number.classList.add("anim");
    });
});