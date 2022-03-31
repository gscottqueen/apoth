function setRange(start, end) {
  return [
    ...Array(end - start + 1).keys()
  ].map(x => x + start)
}
const DEPTH_RANGE_START = 8;
const DEPTH_RANGE_END = 20;
const DEPTH_RANGE = setRange(DEPTH_RANGE_START, DEPTH_RANGE_END);

const WIDTH_RANGE_START = 8;
const WIDTH_RANGE_END = 48;
const WIDTH_RANGE = setRange(WIDTH_RANGE_START, WIDTH_RANGE_END);

const HEIGHT_RANGE_START = 8;
const HEIGHT_RANGE_END = 36;
const HEIGHT_RANGE = setRange(HEIGHT_RANGE_START, HEIGHT_RANGE_END);

export {
  DEPTH_RANGE,
  WIDTH_RANGE,
  HEIGHT_RANGE
}
