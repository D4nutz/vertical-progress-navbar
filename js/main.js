
document.addEventListener("DOMContentLoaded", () => {
    
let indicator = document.getElementById("indicator");
let containerTarget = document.getElementById("container-target");
let documentHeight = containerTarget.scrollHeight;

let pinanimation = document.querySelectorAll('.iconcontainer .icontarget');
let showtextnav = document.querySelectorAll('.text-scrollbar');
let playblob = document.querySelectorAll('.blob');

for (let i = 0; i < pinanimation.length; i++){
        pinanimation[0].classList.add('animatiepin');   
        pinanimation[0].style.opacity = '1';
        playblob[0].classList.add('pulse');
        playblob[0].classList.add('blob-active');
        showtextnav[0].classList.add('showtextnav');
        showtextnav[0].style.opacity = "1";
}

containerTarget.addEventListener("scroll", evt => {
    let percentagescroller = (evt.target.scrollTop / documentHeight) * 100;
    var heightindicator = percentagescroller + "%";
    indicator.style.height = heightindicator;

    // Convert heightindicator to a number for numerical comparison
    var numericHeight = parseFloat(heightindicator);

    for (let i = 0; i < pinanimation.length; i++) {
        if (numericHeight <= 33) {
            if (i === 0) {
                pinanimation[i].classList.add('animatiepin');
                pinanimation[i].style.opacity = '1';
                playblob[i].classList.add('pulse');
                playblob[i].classList.add('blob-active');
                showtextnav[i].classList.add('showtextnav');
                showtextnav[i].style.opacity = "1";
            } else {
                pinanimation[i].classList.remove('animatiepin');
                pinanimation[i].style.opacity = null;
                playblob[i].classList.remove('pulse');
                playblob[1].classList.remove('blob-active');
                playblob[2].classList.remove('blob-active');
                showtextnav[i].classList.remove('showtextnav');
                showtextnav[i].style.opacity = null;
            }
        } else if (numericHeight >= 33 && numericHeight <= 66) {
            if (i === 1) {
                pinanimation[i].classList.add('animatiepin');
                pinanimation[i].style.opacity = '1';
                playblob[i].classList.add('pulse');
                playblob[i].classList.add('blob-active');
                showtextnav[i].classList.add('showtextnav');
                showtextnav[i].style.opacity = "1";
            } else {
                pinanimation[i].classList.remove('animatiepin');
                pinanimation[i].style.opacity = null;
                playblob[i].classList.remove('pulse');
                playblob[2].classList.remove('blob-active');
                showtextnav[i].classList.remove('showtextnav');
                showtextnav[i].style.opacity = null;
            }
        } else if (numericHeight >= 66 && numericHeight <= 99) {
            if (i === 2) {
                pinanimation[i].classList.add('animatiepin');
                pinanimation[i].style.opacity = '1';
                playblob[i].classList.add('pulse');
                playblob[i].classList.add('blob-active');
                showtextnav[i].classList.add('showtextnav');
                showtextnav[i].style.opacity = "1";
            } else {
                pinanimation[i].classList.remove('animatiepin');
                pinanimation[i].style.opacity = null;
                playblob[i].classList.remove('pulse');
                showtextnav[i].classList.remove('showtextnav');
                showtextnav[i].style.opacity = null;
            }
        }
    }
});
});


