/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    A = A.map((val) => {
        return val.split('').sort().join('');
    });
     
     const output = [];
     const counters = new Array(A.length).fill(0);
     for(let i = 0; i < A[0].length; i++) {
         const currentChar = A[0].charAt(i);
         const currentASCII = A[0].charCodeAt(i);
         let j = 1;
         let characterExists = true;
         
         while(j < A.length) {
             if(counters[j] >= A[j].length) {
                 return output;
             }
             const iteratedASCII = A[j].charCodeAt(counters[j]);
             if(iteratedASCII < currentASCII) {
                 counters[j]++;
             } else if(iteratedASCII > currentASCII) {
                 characterExists = false;
                 break;
             } else {
                 counters[j]++;
                 j++;
             }
         }
         
         if(characterExists) {
             output.push(currentChar);
         }
     }
     
     return output;
};

module.exports = {
    "name": "Find Common Characters",
    program: commonChars
};