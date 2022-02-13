import getStringArrayFromArrayOrInteger from "./getStringArrayFromArrayOrInteger";

test("returns class from integer", () => {
  expect(getStringArrayFromArrayOrInteger("className", 1)).toEqual([
    "className-0-1",
  ]);
});

test("returns class from string", () => {
  expect(getStringArrayFromArrayOrInteger("className", "1")).toEqual([
    "className-0-1",
  ]);
});

test("returns classes from array", () => {
  expect(getStringArrayFromArrayOrInteger("className", [1, 2])).toEqual([
    "className-0-1",
    "className-1-2",
  ]);
});

test("returns classes from array", () => {
  expect(getStringArrayFromArrayOrInteger("className", [3, 2, 1])).toEqual([
    "className-0-3",
    "className-1-2",
    "className-2-1",
  ]);
});

test("returns null values interpreted", () => {
  expect(getStringArrayFromArrayOrInteger(null, null)).toEqual(["null-0-null"]);
});

test("returns null values interpreted", () => {
  expect(getStringArrayFromArrayOrInteger(null, [null])).toEqual([
    "null-0-null",
  ]);
});

test("returns empty array from passing undefined (defaults)", () => {
  expect(getStringArrayFromArrayOrInteger(undefined, undefined)).toEqual([]);
});

test("returns empty array from passing undefined (defaults)", () => {
  expect(getStringArrayFromArrayOrInteger(undefined)).toEqual([]);
});

test("returns nothing from empty array", () => {
  expect(getStringArrayFromArrayOrInteger("className", [])).toEqual([]);
});

test("returns bullshit as empty array", () => {
  expect(getStringArrayFromArrayOrInteger("className")).toEqual([]);
});

test("returns empty array when no parameters passed", () => {
  expect(getStringArrayFromArrayOrInteger()).toEqual([]);
});
