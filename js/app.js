// 발표자를 선정하는 함수
function getRandomNumber(number, count) {
  let selectedNumber = [];
  while (selectedNumber.length < count) {
    let randomIndex = Math.floor(Math.random() * number.length);
    let person = number[randomIndex];
    if (!selectedNumber.includes(person)) {
      selectedNumber.push(person);
    }
  }
  return selectedNumber;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
var plus = "+ ";

// 클릭 버튼이 발생할 때 마다 실행할 함수 -> 추첨 버튼
btn.addEventListener("click", function () {
  let selectedNumber = getRandomNumber(number, 7); // 새로운 배열에 미리 랜덤으로 돌렸던 결과를 복사
  result1.innerHTML = ""; // 추첨 버튼을 다시 눌렀을때 내용을 비우기 위함
  btn.style.visibility = "hidden";
  for (let i = 0; i < selectedNumber.length; i++) {
    // 추첨된 공의 개수만큼 반복
    setTimeout(() => {
      // 0.3초 마다 공이 하나씩 나오도록 setTimeout 선언
      if (i == 6) {
        // 마지막 공은 보너스 공이기 때문에 + 삽입을 해줌
        result1.innerHTML += `<div class ="plus">${plus}</div>`;
      }
      // 그 외의 경우는 랜덤한 색깔의 공을 in-line css로 공 색을 다르게 해줌
      // 그리고 미리 복사해둔 i번째 공을 추출함
      result1.innerHTML +=
        `<div class = "ball" style ="background:  ` +
        lottoColors[i] +
        `"> ${selectedNumber[i]} </div>`;
    }, (i + 1) * 300); // 각 공별로 0.3초의 딜레이 후에 출력하기
  }
  setTimeout(() => {
    btn.style.visibility = "visible";
  }, 2100); // 공들이 나오는 동안 버튼이 보이지 않도록 설정
});

// 45까지의 숫자를 담을 배열 생성
const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
];

// 랜덤한 색깔을 담을 배열 선언
var lottoColors = [
  "#21fe09",
  "#ff8700",
  "#0967f4",
  "#ff0014",
  "#ffc200",
  "#f906eb",
  "#35d125",
  "#db8a2f",
  "#3e85f0",
  "#f04452",
  "#face42",
  "#f563ec",
  "#439939",
  "#b9864d",
  "#71a5f5",
  "#f47680",
  "#f5d87c",
  "#f1a5ed",
  "#426b3e",
  "#7c6346",
  "#9dbff2",
  "#f59ea5",
  "#faebba",
  "#f2bdef",
  "#486545",
  "#604e3a",
  "#c0d6f6",
  "#f9c3c7",
  "#b1a378",
  "#a781a5",
  "#749571",
  "#9e876d",
  "#8ca2c2",
  "#c89195",
  "#8b7c4e",
  "#834d80",
  "#abcda7",
  "#d2ba9f",
  "#c0d6f6",
  "#74383d",
  "#6c5b27",
  "#582055",
  "#bbf1b6",
  "#e8d2b8",
  "#2c3b52",
  "#401619",
  "#52410f",
  "#4d0749",
];
