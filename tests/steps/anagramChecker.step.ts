import { Given, When, Then } from '@cucumber/cucumber';
import { AnagramChecker } from '../../src/app/anagramChecker';
import { expect } from '@playwright/test';

let input1: string;
let input2: string;
let actualResult: boolean;
const checker = new AnagramChecker();

Given('the input strings {string} and {string}', 
    async function(str1: string, str2: string){
        input1 = str1;
        input2 = str2;
    });

When('I check if they are anagrams', async function(){
    actualResult = checker.isAnagram(input1,input2);
});

Then('the result should be {string}', async function (expected: string){
    const expectedResult = expected === 'true';
    expect(actualResult,`ExpectedResult:${expectedResult} not equal to ActualResult: ${actualResult}`)
            .toEqual(expectedResult);
})