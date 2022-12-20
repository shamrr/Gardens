import "./sass/style.sass";
import LOGO from './img/logo.png';
import COMPOSITION from './img/composition.png'
import FLOWER from './img/flower.png'
import SERVICE_1 from './img/1service.jpg'
import SERVICE_2 from './img/2service.jpg'
import SERVICE_3 from './img/3service.jpg'
import SERVICE_4 from './img/4service.jpg'
import SERVICE_5 from './img/5service.jpg'
import SERVICE_6 from './img/6service.jpg'
import LEAFS from './img/leafs.png'
import WOMEN from './img/women.png'
import arrowDown from './img/arrowDown.png'
import INSTA from './img/insta.png'
import FACEBOOK from './img/facebook.png'
import TWITTER from './img/twitter.png'
import PINTEREST from './img/pinterest.png'


//функция для выпадающих блоков
const accordionButton = document.querySelectorAll('.accordion');
const allAccordionBlock = document.querySelectorAll('.accordion-block');
const allAccordionArrow = document.querySelectorAll('.arrow');

accordionButton.forEach((el) => {
    el.addEventListener('click', () => {
        let accordionBlock = el.lastElementChild;
        let accordionTitle = el.firstElementChild;
        if(accordionBlock.style.display === "block")
        {
            accordionBlock.style.display = "none";
            
            //меняем цвет аккордеона при его закрытии
            changeBackgroundForAllAccordions()
            //меняем цвет стрелки при закрытии аккордеона
            showStartArrowColor();
        } else{
            //скрываем все аккордеоны и показываем тот, который хотели открыть
            closeAllAccordionBlocks();
            accordionBlock.style.display = "block";
            //меняем цвета у всех аккордеонов
            changeBackgroundForAllAccordions();
            //меняем цвета у всех стрелок
            showStartArrowColor();
            accordionTitle.lastElementChild.style.backgroundColor = "#AEA1A1";
            accordionTitle.lastElementChild.style.color = "#fff";
            accordionTitle.lastElementChild.style.transform = "rotate(-90deg)";
            accordionBlock.closest("div[id]").style.backgroundColor = "#D6E7D2";

        }
    })
})

function showStartArrowColor (){
    allAccordionArrow.forEach((el) => {
        el.style.backgroundColor = "#D9D9D9";
        el.style.color = "#717171";
        el.style.transform = "rotate(90deg)";
    });
}

function changeBackgroundForAllAccordions() {
    allAccordionBlock.forEach((el) => {
        el.closest("div[id]").style.backgroundColor = "#EDF2EC";
    });
}

function closeAllAccordionBlocks(){
    allAccordionBlock.forEach((el) => {
        el.style.display = "none";
    });
}

//функция для выпадающего блока
const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownContent = document.querySelector('.dropdown__content');
const dropdownBtnArrow = document.querySelector('.dropdown__btn-arrow');

dropdownBtn.addEventListener('click', function(){
    if(dropdownContent.style.display === 'flex'){
        dropdownContent.style.display = 'none';
        dropdownBtn.style.backgroundColor = '#D6E7D2';
        dropdownBtnArrow.style.transform = 'rotate(90deg)';
        dropdownBtnArrow.style.backgroundColor = '#AEA1A1';
    } else{
        dropdownContent.style.display ='flex';
        dropdownBtn.style.backgroundColor = '#C1E698';
        dropdownBtn.style.border = '.1rem solid #D6E7D2'
        dropdownBtnArrow.style.transform = 'rotate(-90deg)';
        dropdownBtnArrow.style.backgroundColor = '#8BA07E';
    }
});
// const dropdownContentAll = document.querySelectorAll('.dropdown__content');
// const dropdownBlockContainer = document.querySelectorAll('.dropdown-block-container');

// dropdownContentAll.forEach((el) => el.addEventListener('click', function(){
//     dropdownBlockContainer.forEach((block) => {
//         const element = dropdownContentAll.indexOf(el);
//         const dropBlock = dropdownBlockContainer.indexOf(block);
//         if (element === dropBlock){
//             console.log('1')
//         }
//     })
// }));


