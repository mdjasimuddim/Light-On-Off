let img = document.querySelectorAll('img');
let title = document.getElementById('title');
function btn(match)
{
    for(let i = 1; i <= img.length;i++){
        var pic;
        if(match == 0){
            pic = 'img/pic_bulboff.gif';
            title.innerHTML = 'Light Off';
        }else{
            pic = 'img/pic_bulbon.gif';
            title.innerHTML= 'Light On';
        }
        let selectImg = document.getElementById('light'+i);
        selectImg.src = pic;
    }
}