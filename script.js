/*mobile menu displayer*/
var buttons = document.getElementsByClassName('trigger');
var menu = document.getElementById("mobile-menu");
var totalButtons = buttons.length;
var i;
for(i = 0; i < totalButtons; i++){
    buttons[i].addEventListener('click', ()=>{
        menu.classList.toggle('show_hide_menu');
    });
}



/*Read More button*/
var moreButton = document.getElementById('more_button');
var moreText = document.getElementById('more_text');
function showMore(){
    if(moreButton.innerHTML == 'Read More'){
        moreButton.innerHTML = "Read Less";
        moreText.style.display = 'block';
    } else{
        moreButton.innerHTML = "Read More";
        moreText.style.display = 'none'
    }
}


/*portfolio section displayer*/
var buttons = document.getElementsByClassName('works');
length = buttons.length;
var buttonIndex = 0;
var i;
function removeActiveClass(){
    for(i = 0; i < length; i++){
        buttons[i].classList.remove('active');
    }
}
function showChoosenWork(choice){
    var allworks = document.getElementsByClassName('all');
    for(i = 0; i < allworks.length; i++){
        allworks[i].style.display = 'none';
    }
    var works = document.getElementsByClassName(choice);
    var wlen = works.length;
    for(i = 0; i < wlen; i++){
        works[i].style.display = 'block';
    }
}
buttons[0].addEventListener('click', ()=>{
    removeActiveClass();
    showChoosenWork('all');
    buttons[0].classList.add('active');
});
buttons[1].addEventListener('click', ()=>{
    removeActiveClass();
    showChoosenWork('website');
    buttons[1].classList.add('active');
});
buttons[2].addEventListener('click', ()=>{
    removeActiveClass();
    showChoosenWork('brand');
    buttons[2].classList.add('active');
});
buttons[3].addEventListener('click', ()=>{
    removeActiveClass();
    showChoosenWork('app');
    buttons[3].classList.add('active');
});
buttons[4].addEventListener('click', ()=>{
    removeActiveClass();
    showChoosenWork('social');
    buttons[4].classList.add('active');
});

/*team slider area*/

var mainCont = document.getElementsByClassName('main-container')[0];
var cont = document.getElementById('cardContainer');
var cards = document.getElementsByClassName('cards');
totalCard = cards.length;

var totalWidth = parseFloat(mainCont.offsetWidth) - (parseFloat(mainCont.offsetWidth) * 5 * 2/*as there is 5% padding on main container*/ * 1 / 100);
var cardWidth = parseFloat(cards[0].offsetWidth) + 4/*dont know why*/;
var canContain = parseInt(totalWidth / cardWidth);
if(canContain % 2 == 0){
    canContain--;
}
var margin = parseFloat(((totalWidth - canContain * cardWidth) / canContain) / 2);
var newWidth = (cardWidth + 2 * margin) * totalCard;
cont.style.width = newWidth + "px";
for(i = 0; i < totalCard; i++){
    cards[i].style.marginLeft = margin + "px";
    cards[i].style.marginRight = margin + "px";
}
var step = cardWidth + 2 * margin;
var middle = parseInt(canContain / 2);
var pos = 0;


window.addEventListener('resize', ()=>{
    totalWidth = parseFloat(mainCont.offsetWidth) - (parseFloat(mainCont.offsetWidth) * 5 * 2/*as there is 5% padding on main container*/ * 1 / 100);
    cardWidth = parseFloat(cards[0].offsetWidth) + 4/*dont know why*/;
    canContain = parseInt(totalWidth / cardWidth);
    if(canContain % 2 == 0){
        canContain--;
    }
    margin = parseFloat(((totalWidth - canContain * cardWidth) / canContain) / 2);
    newWidth = (cardWidth + 2 * margin) * totalCard;
    cont.style.width = newWidth + "px";
    for(i = 0; i < totalCard; i++){
        cards[i].style.marginLeft = margin + "px";
        cards[i].style.marginRight = margin + "px";
    }
    step = cardWidth + 2 * margin;
    middle = parseInt(canContain / 2);
});


makeBigger();
var maxPos = parseInt(canContain / 2) * step + 1;
var minPos = -1 * (totalCard - parseInt(canContain / 2)) * step + 1;


function previous(){
    if((pos + step) >= minPos && (pos + step) <= maxPos){
        pos += step;
        cont.style.left = pos + "px";
        middle--;
        makeBigger();
    }
}
function next(){
    if(pos - step >= minPos && pos - step <= maxPos){
        pos -= step;
        cont.style.left = pos + "px";
        middle++;
        makeBigger();
    }
}
function makeBigger(){
    for(i = 0; i < totalCard; i++){
        cards[i].style.transform = 'scale(1, 1)';
    }
    cards[middle].style.transform = 'scale(1.15, 1.15)';
}

/*subscribe button*/

var button = document.getElementById('subs_button');
var email = document.getElementById('email');
function expand(){
    email.style.width = '280px';
    email.style.paddingRight = '50px';
    button.removeAttribute('onclick');
    button.setAttribute('onclick', 'openSubscribePage()');
}
function openSubscribePage(){
    window.open();
}