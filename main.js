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

//функция для выпадающих блоков
const accordionButton = document.querySelectorAll('.accordion');
const allAccordionBlock = document.querySelectorAll('.accordion-block');
const allAccordionArrow = document.querySelectorAll('.accordion-arrow');

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


