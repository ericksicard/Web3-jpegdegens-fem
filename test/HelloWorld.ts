import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

// 1. setup
// 2. deploy our contract
// 3. call our function to test

describe("Hello World", () => {
    it("should get the hello world", async () => {
        const HW = await ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();

        expect(await hello.hello()).to.equal("Hello, World");
    });
});