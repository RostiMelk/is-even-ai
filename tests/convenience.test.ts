import { expect, it } from "vitest";
import {
  areEqual,
  areNotEqual,
  isEven,
  isGreaterThan,
  isLessThan,
  isOdd,
  setApiKey,
} from "../src/index";

it("should work with key as a environmental variable", async () => {
  expect(await isEven(2)).toBe(true);
  expect(await isEven(3)).toBe(false);
  expect(await isOdd(4)).toBe(false);
  expect(await isOdd(5)).toBe(true);
  expect(await areEqual(6, 6)).toBe(true);
  expect(await areEqual(6, 7)).toBe(false);
  expect(await areNotEqual(6, 7)).toBe(true);
  expect(await areNotEqual(7, 7)).toBe(false);
  expect(await isGreaterThan(8, 7)).toBe(true);
  expect(await isGreaterThan(7, 8)).toBe(false);
  expect(await isLessThan(8, 9)).toBe(true);
  expect(await isLessThan(9, 8)).toBe(false);
}, 60000);

it("should work with key passed to setKey", async () => {
  const tempOpenAiApiKey = process.env.OPENAI_API_KEY!;

  delete process.env.OPENAI_API_KEY;

  setApiKey(tempOpenAiApiKey);

  expect(await isEven(2)).toBe(true);
  expect(await isEven(3)).toBe(false);
  expect(await isOdd(4)).toBe(false);
  expect(await isOdd(5)).toBe(true);
  expect(await areEqual(6, 6)).toBe(true);
  expect(await areEqual(6, 7)).toBe(false);
  expect(await areNotEqual(6, 7)).toBe(true);
  expect(await areNotEqual(7, 7)).toBe(false);
  expect(await isGreaterThan(8, 7)).toBe(true);
  expect(await isGreaterThan(7, 8)).toBe(false);
  expect(await isLessThan(8, 9)).toBe(true);
  expect(await isLessThan(9, 8)).toBe(false);

  process.env.OPENAI_API_KEY = tempOpenAiApiKey;
}, 60000);
