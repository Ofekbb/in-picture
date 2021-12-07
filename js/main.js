'use strict'

var gQuests = [
    { id: 1, options: ['On Tiger', 'On Zebra', 'On monkey'], correctOptIndex: 1 },
    { id: 2, options: ['On Turtle', 'On Fish', 'On Shark'], correctOptIndex: 0 },
    { id: 3, options: ['On Giraffe', 'On Tiger', 'On Elephant'], correctOptIndex: 2 }
]
var gCurrQuestIdx = 0
var elRestart = document.querySelector('.restart')



//InitGame
function initGame() {
    gCurrQuestIdx = 0
    var elStart = document.querySelector('.start')
    renderQuests()
    elStart.style.display = 'none'


}


//PutAnswer
function renderQuests() {
    var elBtnContainer = document.querySelector('.btn-container');
    var str = ''
    elBtnContainer.style.display = 'block'
    elRestart.style.display = 'none'

    var elImg = document.querySelector('img');
    for (var i = 0; i < gQuests[gCurrQuestIdx].options.length; i++) {
        str += `<div class= "ans" onclick ="checkAns(${i})">${gQuests[gCurrQuestIdx].options[i]}</div>`
    }
    elBtnContainer.innerHTML = str;

    elImg.src = "img/" + gCurrQuestIdx + ".jpg";

}


//Check Answer
function checkAns(userAns) {
    var elBtnContainer = document.querySelector('.btn-container')

    if (userAns === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        if (gCurrQuestIdx === gQuests.length) {

            openModal('Victory!')
            elRestart.style.display = 'block'
            elBtnContainer.style.display = 'none'

        } else {
            renderQuests()
        }


    } else {
        openModal('Wrong answer!')
    }
}



//Modal
function openModal(insideMes) {
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'block'
    elModal.innerText = insideMes
    setTimeout(closeModal, 3000)
}
function closeModal() {
    var elModal = document.querySelector('.modal');
    elModal.style.display = 'none';
}


