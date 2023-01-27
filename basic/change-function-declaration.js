// 이름을 너무 축약한 경우
// 한글로 예를 들면 "원주율"이라는 함수가 있는데 "원"이라는 함수를 생성한 것과 같다.
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 불필요한 데이터까지 받아오는 경우
// state에 대한 정보만 필요하므로 호출하는 곳에서 함수로 state만 넘겨준다.
// 즉, 함수 내부에서 필요로 하는 것만 받아와서 외부 다른 객체에 대한 의존도를 낮춘다.
function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
