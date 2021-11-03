// when scroll images show 
{
    const square = document.getElementById("down");

    const scroll1 = (eo) => {
        const scroll = window.scrollY;

        if (scroll > 300) {
            square.style.opacity = "1";
        } else {

            square.style.opacity = "0";


        }
    }
    window.addEventListener("scroll", scroll1)
}

// when click icon dropdown icon 
{
    const icon = document.querySelector(".panelicon");
    const panel = document.querySelector(".top1");
    icon.onclick = function() {
        console.log(icon)
        panel.classList.toggle("top6");

    };
}


// when scroll arrow to up show 
{
    const arrow = document.querySelector(".arrow");

    const scrollY = (eo) => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {

            arrow.style.opacity = "0.50";


        } else {

            arrow.style.opacity = "0";


        }


    }


    window.addEventListener("scroll", scrollY)






}