import { expect } from "chai";
import { ethers } from "hardhat";

const getRandomNumber = () => {
  return Math.floor(Math.random() * (2 ** 25));
}

const getRandomNegativeNumber = () => {
  return getRandomNumber() * (-1)
}

describe("Calculator Minus", function () {


  it("should be able to calculate the difference between two positive numbers", async function () {
    const CalculatorFactory = await ethers.getContractFactory("Calculator");
    const CalculatorContract = await CalculatorFactory.deploy();
    const a = getRandomNumber();
    const b = getRandomNumber();
    const expected = a - b;
    const actual = await CalculatorContract.minus(a, b);
    expect(actual).to.equal(expected)
  })

  it("should be able to calculate the difference between two negative numbers", async function () {

    const CalculatorFactory = await ethers.getContractFactory("Calculator");
    const CalculatorContract = await CalculatorFactory.deploy();
    const a = getRandomNegativeNumber();
    const b = getRandomNegativeNumber();
    const expected = a - b;
    const actual = await CalculatorContract.minus(a, b);
    expect(actual).to.equal(expected)
  })
})

describe("Calculator Addition", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  it("should be able to add two positive values", async function () {
    const [owner] = await ethers.getSigners();

    const Calculator = await ethers.getContractFactory("Calculator");

    const CalculatorContract = await Calculator.deploy();

    const a = getRandomNumber()
    const b = getRandomNumber()

    const expectedValue = a + b

    const actualValue = await CalculatorContract.add(a, b);
    expect(actualValue).to.equal(expectedValue);
  });

  it("should be able to add two negative values", async function () {
    const [owner] = await ethers.getSigners();

    const Calculator = await ethers.getContractFactory("Calculator");

    const CalculatorContract = await Calculator.deploy();

    const a = -1 * getRandomNumber();
    const b = -1 * getRandomNumber();

    const expectedValue = a + b

    const actualValue = await CalculatorContract.add(a, b);
    expect(actualValue).to.equal(expectedValue);
  });

  it("should be able to add one positive and one negative value", async function () {
    const [owner] = await ethers.getSigners();

    const Calculator = await ethers.getContractFactory("Calculator");

    const CalculatorContract = await Calculator.deploy();

    const a = getRandomNumber();
    const b = -1 * getRandomNumber();

    const expectedValue = a + b;

    const actualValue = await CalculatorContract.add(a, b);
    expect(actualValue).to.equal(expectedValue);
  });
});
