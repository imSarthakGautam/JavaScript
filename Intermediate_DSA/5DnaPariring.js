//DNA pairing
/*
DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
*/


function pairElement(str) {
    let newArr=[]
    function compliment(str){
      if (str==="A"){ return [str,"T"] }
      if (str==="T"){ return [str,"A"] }
      if (str==="G"){ return [str,"C"] }
      if (str==="C"){ return [str,"G"] }
    }
    
    for (let i=0; i<str.length; i++)
    {
      console.log(str[i])
     newArr.push(compliment(str[i]))
     
    }
      return newArr;
    }
    
    pairElement("GCG");
    
    // string length
    // for each string return [string, compliment]
    // push to new Array.