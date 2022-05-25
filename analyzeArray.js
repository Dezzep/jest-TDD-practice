const arrayToTestWith = [-9, -5, 22, 96, 55, 105, -69, 1000, 222, 59, 0, 0, 10293, -998, -5000];

const average = (arr) => {
  let sum = 0;
  let average;
  let lastIteration = 0;
  arr.forEach((element, index) => {
    sum += element;
    lastIteration = index + 1;
    
  })
  average = sum / lastIteration;
  return average;
}

const min = (arr) => {
  let lowestNumber;
  arr.forEach((element, index) => {
    if(index === 0){
      lowestNumber = element;
    }
    else if(element < lowestNumber){
      lowestNumber = element;
    }
    
  });
  return lowestNumber;
};

const max = (arr) => {
  let highestNumber;
  arr.forEach((element, index) => {
    if(index === 0) {
      highestNumber = element;
    } else if (highestNumber < element) {
      highestNumber = element;
    }
    
  });
  return highestNumber;
}

const len = (arr) => {
  let arrLen = arr.length;
  return arrLen;
}


export {analyzeArray, min, max, len, average};

const analyzeArray = (arr) => {
  const coolObjectThatHasStuffInIt = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    len: len(arr),
  }
  return coolObjectThatHasStuffInIt
};