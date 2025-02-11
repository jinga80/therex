const text01 = "의사가 되기까지의 시간 약 "; // 출력할 텍스트
const years01 = 10; // 숫자 부분
const typingTextElement01 = document.getElementById("typingText01");

const text02 = "병원 개원시 초기비용 ";
const num02 = 4.2;
const typingTextElement02 = document.getElementById("typingText02");

let index01 = 0;
let index02 = 0;

function typeCharacter01() {
  if (index01 < text01.length) {
    typingTextElement01.textContent += text01[index01];
    index01++;
    setTimeout(typeCharacter01, 100); // 글자 하나당 100ms 딜레이
  } else {
    animateNumber01(0, years01, 1000, typeCharacter02); // 1초 동안 0에서 10까지 애니메이션 후 typeCharacter02 실행
  }
}

function typeCharacter02() {
  if (index02 < text02.length) {
    typingTextElement02.textContent += text02[index02];
    index02++;
    setTimeout(typeCharacter02, 100); // 글자 하나당 100ms 딜레이
  } else {
    animateNumber02(0, num02, 1000); // 1초 동안 0에서 4.2까지 애니메이션
  }
}

function animateNumber01(start, end, duration, callback) {
  const range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * range + start);
    typingTextElement01.innerHTML = text01 + `<span class="highlight">${value}년</span>`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (callback) {
      callback(); // 애니메이션 종료 후 콜백 실행
    }
  }

  requestAnimationFrame(step);
}

function animateNumber02(start, end, duration) {
  const range = end - start;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = (progress * range + start).toFixed(1); // 소수점 첫째 자리까지 표시
    typingTextElement02.innerHTML = text02 + `<span class="highlight">${value}억</span>`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

typeCharacter01();
