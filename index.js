function calculateTax (amount){
    return amount * .1
}
function convertToUpperCase (text){
    return  text.toUpperCase();

}
function findMaximum (num1,num2){
    if (num1>num2){
        return num1
    }
    return num2
}
function isPalindrome (word){
    const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
  }



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };