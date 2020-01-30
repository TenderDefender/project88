let slider=document.querySelector('.slider');
let prev=document.querySelector('.Prev__slide');
let next=document.querySelector('.Next__slide');
let sliderImg=document.querySelector('.safetyGlass__img');
let sliderText=document.querySelector('.slider__text');
let sliderHeading=document.querySelector('.img__heading');
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);
let sliderCounter=0;


let imgArr=[
`img/homePage/safetyGlassOleoff.jpg`,
`img/homePage/safetyGlass3D.jpg`,
`img/homePage/safetyGlassAntiSpy.jpg`,
];

let imgDescriptionArr=[
`Защитное стекло с олеофобным покрытием – простейший способ защитить мобильный телефон или другой гаджет от жира и загрязнений.
 Такое покрытие представляет собой смесь силикона, алкилсилана и растворителя.
 Эти химические вещества наносятся на экран мобильного устройства с помощью специального распылителя.
 Защитное стекло с олеофобным покрытием поможет предотвратить появление загрязнений и солнечных бликов на экране телефона.
 Это, в свою очередь, сделает его использование более комфортным в дневное время.
 Производители защитных стекол с подобным покрытием постоянно совершенствуют технологические процессы.
 Вот почему срок эксплуатации таких приспособлений может достигать 12 месяцев.`,//1
 `Защитное 3d-стекло активно используют не только в смартфонах, но и в телевизорах и другой бытовой электронике.
 Главным отличием подобных приспособлений от обычных пленок и стекол является наличие закругленных краев, которые 
 делают мобильный гаджет визуально более объемным.
 Помимо этого такие стекла обладают рядом других преимуществ.
 Они эргономичны. Пользователь может носить телефон в своем кармане, не боясь порезаться об острые углы.
 Защитное 3d-стекло обладает повышенной прочностью.
 Владелец телефона может не бояться, что он выйдет из строя после случайного падения.
 Кроме того, многообразие дизайнерских решений стекол с трехмерным эффектом облегчает 
 выбор функциональной модели на любой вкус и кошелек.`,//2
 `Если вам необходимо не просто защитить экран, но и спрятать информацию на нем,
  надо… наклеить стекло защиты информации. Как ни странно, 
  но этот достаточно простой вариант не приходит в голову, 
  даже когда кто-то читает переписку из-за плеча в транспорте. 
  Мы исследовали рынок и готовы предложить вам несколько очень неплохих 
  девайсов такого рода в различных ценовых категориях, а также рассказать, 
  чем они отличаются от обычных защитных стекол.`,//3
];

let imgHeadingArr=[
`Защитное стекло с олеофобным покрытием`,
`Защитное 3d-стекло`,
`Стекло Анти-шпион`,
]
 function nextSlide(){
 if(sliderCounter>=2){
   sliderCounter=0;
     sliderImg.src=imgArr[sliderCounter];
     sliderText.innerHTML=imgDescriptionArr[sliderCounter];
	 sliderHeading.innerHTML=imgHeadingArr[sliderCounter];
 }else{
   sliderText.innerHTML=imgDescriptionArr[++sliderCounter];
   sliderImg.src=imgArr[sliderCounter];
   sliderHeading.innerHTML=imgHeadingArr[sliderCounter];
  }
}

function prevSlide(){
 if(sliderCounter<=0){
   sliderCounter=2;
    sliderText.innerHTML=imgDescriptionArr[sliderCounter]
    sliderImg.src=imgArr[sliderCounter];
	sliderHeading.innerHTML=imgHeadingArr[sliderCounter];
 }else{
   sliderImg.src=imgArr[--sliderCounter];
   sliderText.innerHTML=imgDescriptionArr[sliderCounter];
   sliderHeading.innerHTML=imgHeadingArr[sliderCounter];
   }
 }
