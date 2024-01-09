function nextPalindrome(num) {
  //your JS code here.
  num++;
  let str = num.toString();
  let isPalindrome = false;

  while (!isPalindrome) {
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
      isPalindrome = true;
    } else {
      num++;
      str = num.toString();
    }
  }
  return num;
}

function isPalindrome(num) {
  let str = num.toString();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
