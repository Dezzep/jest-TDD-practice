import {cipherCode, alphabet, ciphererThingy, } from './cipher';


test('cipher working with chars that are non alphabetical', () => {

  expect(ciphererThingy('.a!*@(*#(@*#*@#(*@#(*@#//!!!!!!!239812398123', cipherCode)).toBe('.n!*@(*#(@*#*@#(*@#(*@#//!!!!!!!239812398123');
})

test('cipher working with uppercase and lowercase', () => {

  expect(ciphererThingy('abcDefgHijklmnopqrstuvwxyZ', cipherCode)).toBe('nmvRbcxZlkqgpaofidusthjywE')
})


test('cipher code each item is alphabetical', () => {
  const confirmAlphabetical = (arr) => {
    let isAlphabetical = true;
    arr.forEach(element => {
      if(element.toLowerCase() === element.toUpperCase()){
        isAlphabetical = false;
      }
    })
    return(isAlphabetical);
  };
  expect(confirmAlphabetical(cipherCode)).toBeTruthy();
  expect(confirmAlphabetical(alphabet)).toBeTruthy();

})


test('cipher code max char for each item is 1', () => {
  const elementLenChecker = (arr) => {
    let allCharsAre1InLen = true;
    arr.forEach(element => {
    
      if (element.length !== 1){
        allCharsAre1InLen = false;
    } 
  });
  return allCharsAre1InLen;
}
  expect(elementLenChecker(cipherCode)).toBeTruthy();
  expect(elementLenChecker(alphabet)).toBeTruthy();
})

test('cipher code has 26 items', () => {
  expect(cipherCode.length).toBe(26);
  expect(alphabet.length).toBe(26);
})
test('cipher code is only lowercase or uppercase', () => {
  const checkCaseValuesForAll = (arr) => {
    let lowerValues = false;
    let upperValues = false;
    arr.forEach(element => {
      if(element === element.toUpperCase()){
        upperValues = true;
      }
      else if(element === element.toLowerCase()){
        lowerValues = true;
      }
    })
    if (lowerValues === true && upperValues === true){
      return false;
    }
    else return true;
  }
  expect(checkCaseValuesForAll(cipherCode)).toBeTruthy()
  expect(checkCaseValuesForAll(alphabet)).toBeTruthy()
})

test('no duplicate chars in cipher', () => {
  const findDuplicates = (array) => {
    const noDupes = new Set(array);

    if (array.length === noDupes.size){
      return true;
    }
  }
  expect(findDuplicates(cipherCode)).toBeTruthy();
  expect(findDuplicates(alphabet)).toBeTruthy();
})