// 이름을 너무 축약한 경우
function circum(radius) {
  return 2 * Math.PI * radius;
}

// 불필요한 데이터까지 받아오는 경우
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
