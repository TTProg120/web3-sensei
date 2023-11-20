const wrapper = document.querySelector('.cards-wrapper');
    const dots = document.querySelectorAll('.dot');
    let activeDotNum = 0;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    dots.forEach((dot, idx) => {
        dot.setAttribute('data-num', idx);
        dot.addEventListener('click', (e) => {
            let clickedDotNum = e.target.dataset.num;
            if (clickedDotNum == activeDotNum) {
                return;
            } else {
                let displayArea = wrapper.parentElement.clientWidth;
                let pixels = -displayArea * clickedDotNum;
                wrapper.style.transform = 'translateX(' + pixels + 'px)';
                dots[activeDotNum].classList.remove('active');
                dots[clickedDotNum].classList.add('active');
                activeDotNum = clickedDotNum;
                updatePrevNextBtnVisibility();
            }
        });
    });

    function nextSlide() {
        if (activeDotNum < dots.length - 1) {
            activeDotNum++;
            let displayArea = wrapper.parentElement.clientWidth;
            let pixels = -displayArea * activeDotNum;
            wrapper.style.transform = 'translateX(' + pixels + 'px)';
            updateActiveDot();
            prevBtn.style.opacity = '100%';
            nextBtn.style.opacity = '0';
        }
    }

    function prevSlide() {
        if (activeDotNum > 0) {
            activeDotNum--;
            let displayArea = wrapper.parentElement.clientWidth;
            let pixels = -displayArea * activeDotNum;
            wrapper.style.transform = 'translateX(' + pixels + 'px)';
            updateActiveDot();
            prevBtn.style.opacity = '0';
            nextBtn.style.opacity = '100%';
        }
    }

    function updateActiveDot() {
        dots.forEach((dot, idx) => {
            dot.classList.remove('active');
            if (idx === activeDotNum) {
                dot.classList.add('active');
            }
        });
    }

    function updatePrevNextBtnVisibility() {
        prevBtn.style.opacity = activeDotNum === 0 ? '0' : '100%';
        nextBtn.style.opacity = activeDotNum === 1 ? '0' : '100%';
    }