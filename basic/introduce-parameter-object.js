function readingsOutsideRange(readings, range) {
  return readings.filter((r) => !range.contains(r.temp));
}

class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan = new NumberRange(51, 53);

// station.readings 값만 필요로 하기 때문에 station.readings를 전달해준다.
// min, max를 따로 풀어서 전달하는 것보다 객체 자체를 전달해준다.
readingsOutsideRange(station.readings, operationPlan);
