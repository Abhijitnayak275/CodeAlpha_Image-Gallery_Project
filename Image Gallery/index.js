let nextDone = document.getElementById('next');
let prevDone = document.getElementById('prev');
let crouselDon = document.querySelector('.crousel');
let listItemDon = document.querySelector('.crousel .list')
let thumbnailDon = document.querySelector('.crousel .thumbnail');


nextDone.onclick = function(){
    showSlider('next');
}
prevDone.onclick = function(){
    showSlider('prev')
}
let timeRunning =1000;
let  runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.crousel .list .item');
    let itemThumbnail = document.querySelectorAll('.crousel .thumbnail .item');


    if(type === 'next'){
        listItemDon.appendChild(itemSlider[0]);
        thumbnailDon.appendChild(itemThumbnail[0])
        crouselDon.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length -1;
        listItemDon.prepend(itemSlider[positionLastItem]);
        thumbnailDon.prepend(itemThumbnail[positionLastItem]);
        crouselDon.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        crouselDon.classList.remove('next');
        crouselDon.classList.remove('next');
    }, timeRunning);
}