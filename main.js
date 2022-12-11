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

//функция для выпадающих блоков
const accordionButton = document.querySelectorAll('.accordion');
const allAcordionBlock = document.querySelectorAll('.accordion-block');
accordionButton.forEach((el) => {
    el.addEventListener('click', () => {
        let accordionBlock = el.lastElementChild;
        console.log(accordionBlock.closest("div[id]"))
        if(accordionBlock.style.display === "block")
        {
            accordionBlock.style.display = "none";
            accordionBlock.closest("div[id]").style.backgroundColor = "#EDF2EC"
        } else{
            allAcordionBlock.forEach((el) => {
                el.style.display = "none";
                el.closest("div[id]").style.backgroundColor = "#EDF2EC";
            })
            accordionBlock.style.display = "block";
            accordionBlock.closest("div[id]").style.backgroundColor = "#D6E7D2"
        }
    })
})


