const cipherCode = ['n','m','v','r','b','c','x','z','l','k','q','g','p','a','o','f','i','d','u','s','t','h','j','y', 'w', 'e'];
const alphabet = ['a','b','c','d','e','f','g','h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t','u','v','w','x','y','z']


const ciphererThingy = (str, key) => {
  const cipherCodeUpper = []; 
 key.forEach(element => {
  cipherCodeUpper.push(element.toUpperCase());
});
const alphabetUpper = [];

alphabet.forEach(element => {
  alphabetUpper.push(element.toUpperCase());
})
  let cipheredString = '';
  str = str.split('');
  str.forEach(element => {
    let indexOfCurrentLetter;
    if (element === element.toUpperCase()) {
      indexOfCurrentLetter = alphabetUpper.indexOf(element);
    } else if (element === element.toLowerCase()){
      indexOfCurrentLetter = alphabet.indexOf(element);
    }


    if(element.toLowerCase() === element.toUpperCase()){
      cipheredString += element;    
    } else if(element === element.toUpperCase()){
      cipheredString += cipherCodeUpper[indexOfCurrentLetter];
    } else if (element === element.toLowerCase()){
        cipheredString += key[indexOfCurrentLetter];
    }
    
      
    
    
    
  });
  return cipheredString;
  
}
export {cipherCode, alphabet, ciphererThingy};