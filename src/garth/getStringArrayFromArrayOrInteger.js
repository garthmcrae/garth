export default function getStringArrayFromArrayOrInteger(
  prefix = "",
  input = []
) {
  const array = Array.isArray(input) ? input : [input];
  return array.map((value, index) => `${prefix}-${index}-${value}`);
}
