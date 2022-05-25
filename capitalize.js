  const capitalize = (str) => {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    
    return str;
}

const reverseString = (str) => {
  str = str.trim();
  const stringArray = str.split('');
  let reversedString = '';
 
  for (let i = stringArray.length -1; i >= 0; i--){
    reversedString += stringArray[i];
  }
  
  return reversedString;

}

export {capitalize, reverseString};