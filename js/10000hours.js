const startButton = document.querySelector('.start_btn');
const openButton = document.querySelector('.modal_btn');
const closeButton = document.querySelector('.close_btn');
const shareButton = document.querySelector('.share_btn');
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    }else if(timeValue.value == ""){
        alert('입력되지 않았습니다.');
        return false;
    } else if(timeValue_int > 24){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.')
        return false;
    }

    result.style.display = 'none';

    setTimeout(function () {
        result.style.display = 'flex';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((10000 / timeValue_int), 10);

    },1800)
}

// setTimeout callback 함수를 통해 결과가 나올때까지의 시간 지연을 일으킴
// parameter 중 timeout은 ms 단위 (1800이면 1.8초 뒤라는 의미)
// parseInt를 통해 소수점을 절사함

function openModal() {
    modal.style.display = 'flex';
}


function closeModal(){
    modal.style.display = 'none';
}

function copyUrl(){

}



shareButton.addEventListener('click', copyUrl)
openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
startButton.addEventListener('click', calculator)