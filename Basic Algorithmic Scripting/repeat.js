function repeatStringNumTimes(str, num) {
    // console.log(str.repeat(num))
  
  let newstr='';
    while (num >0){
    newstr=newstr.concat(str);
    num--;
    }
    return newstr;
  }
  
  repeatStringNumTimes("abc", 3);