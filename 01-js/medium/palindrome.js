/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length === 0 || str.length === 1) 
    return true;
  str = str.toLowerCase();
  str_rev = "";
  str1 = "";
  for(let i = 0; i < str.length; i++)
  {
    if(str.charAt(i)!=' ' || str.charAt(i)!='!'  || str.charAt(i)!='?' || str.charAt(i)!='.'  || str.charAt(i)!=',')
    {
      str1 = str1 + str[i];
    }
  }
  for(let i = str1.length - 1; i >= 0; i--)
  {
    str_rev = str_rev + str1[i];
  }
  console.log(str_rev);
  console.log(str1);
  if(str_rev === str1)
    return true;
  else
    return false;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));

module.exports = isPalindrome;
