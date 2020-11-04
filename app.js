//Movement Animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');


//Items

const title = document.querySelector('.title');
const tshirt = document.querySelector('.tshirt img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('sizes');

//Moving animation event
container.addEventListener("mousemove", (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
//animate in
container.addEventListener('mouseenter', e=>{
    card.style.transition = 'all 0.2s ease';
    //poput
    title.style.transform = "translateZ(150px)";
    tshirt.style.transform = "translateZ(200px) rotateZ(-35deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(150px)";
})

//animate out
container.addEventListener('mouseleave', e=>{
    card.style.transition = "all 0.5s ease";

    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    tshirt.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})
