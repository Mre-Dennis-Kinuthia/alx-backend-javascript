export default function cleanSet(set, startString) {
  if (!startString || typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }
  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((elem) => elem.slice(startString.length))
    .join('-');
}
