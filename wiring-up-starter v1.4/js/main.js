'use strict'
var gQuests = [
    { id: 1, options: ['yofi', 'tofi', 'toda'], correctOptIndex: 1 },
    { id: 2, options: [], correctOptIndex: 0 }
]
var gCurrQuestIdx = 1



function init() {
    // TODO: change the h1 txt

}
putQuest(0)

//PutAns
function putQuest(questNum) {
        var elAns1 = document.querySelector('.ans1')
        var elAns2 = document.querySelector('.ans2')
        var elAns3 = document.querySelector('.ans3')
        elAns1.innerText = gQuests[questNum].options[0]
        elAns2.innerText = gQuests[questNum].options[1]
        elAns3.innerText = gQuests[questNum].options[2]

        
    

}
function mark(elBtn) {
    // TODO: change text in the button

    var elBoxSpans = document.querySelectorAll('.box span')
    console.log(elBoxSpans)
    for (var i = 0; i < elBoxSpans.length; i++) {
        elBoxSpans[i].classList.toggle('mark')
    }
    if (gIsMark) {
        elBtn.innerText = 'Mark'
        gIsMark = false
    } else {
        elBtn.innerText = 'Unmark'
        gIsMark = true
    }

}


function whenMouseOnImg(elImg) {
    // TODO: change the image
    // console.log(elImg)
    elImg.src = "img/ca.png"
}

function whenMouseOutImg(elImg) {
    // TODO: change the image
    elImg.src = "img/ninja.png"
}

function imgClicked() {
    bless()
}

function changeSubHeader(elSpan) {
    // alert('hi')
    // elSpan.classlist
    // TODO: change the text in the span inside the h2
    var elH2 = document.querySelector('h2 span')
    elH2.innerText = elSpan.innerText

    elH2.style.color = getRandomColor();
    elH2.style.backgroundColor = getRandomColor();
}

function handleKey(ev) {
    // TODO: close the modal if escape is pressed
    console.log('ev:', ev);
    if (ev.key === 'Escape') closeModal()

}

function openModal() {
    // Todo: show the modal and schedule its closing
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
    setTimeout(closeModal, 5000)
}
function closeModal() {
    // Todo: hide the modal
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';
}


function bless() {
    // Todo: update the modal content and use openModal
    var elBlessBtn = document.querySelector('.modal h2')
    elBlessBtn.innerText = 'You were blessed at ' + getTime()
    openModal()
}


function getTime() {
    return new Date().toString().split(' ')[4];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

