
export default function parseStringToFloat(propery) {
  const actual = propery.slice(3);
  const final = parseFloat(actual.replace(/\./gi, '').replace(/,/gi, '.'));
  return final;
}