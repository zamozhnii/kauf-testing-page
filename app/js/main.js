window.addEventListener('DOMContentLoaded', init);

function init() {

    const d = document;

    const slider = d.querySelector('.slider-video-wrap');
    const list = d.querySelectorAll('#list');
    const divAlphabet = d.querySelector('.alphabet-letters');
    const btnsAlphabet = d.querySelectorAll('#alpha');
    const hearts = d.querySelectorAll('#heart');

    slider.addEventListener('click', (e) => {
        let target = e.target;
        if(target.classList.contains('right')) {
            for(let i = 0; i < list.length; i++) {
                if(list[i].classList.contains('active')) {
                    let active = list[i];
                    active.classList.remove('active');
                    let nextActive = active.nextElementSibling;
                    if(nextActive === null) {
                        list[list.length-1].classList.remove('active');
                        list[0].classList.add('active');
                        break;
                    } 
                    if(nextActive !== null) {
                        nextActive.classList.add('active');
                        break;
                    }
                }
            }
        }
        if(target.classList.contains('left')) {
            for(let i = 0; i < list.length; i++) {
                if(list[i].classList.contains('active')) {
                    let active = list[i];
                    active.classList.remove('active');
                    let prevActive = active.previousElementSibling;
                    if(prevActive === null) {
                        list[0].classList.remove('active');
                        list[list.length-1].classList.add('active');
                        break;
                    } 
                    if(prevActive !== null) {
                        prevActive.classList.add('active');
                        break;
                    }
                }
            }
        }
    });
    
    divAlphabet.addEventListener('click', (e) => {
        let target = e.target;
        if(target.tagName === 'BUTTON') {
            if(target.classList.contains('btn-active')) {
                return;
            } else {
                for(let i = 0; i < btnsAlphabet.length; i++) {
                    if(btnsAlphabet[i].classList.contains('btn-active')) {
                        btnsAlphabet[i].classList.remove('btn-active');
                        break;
                    }
                }
                target.classList.add('btn-active');
            }
        }
    });
}