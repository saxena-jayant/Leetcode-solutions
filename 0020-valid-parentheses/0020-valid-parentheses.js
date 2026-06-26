/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = ""

    for(let i = 0;i<s.length;i++){
        if((s[i]==")"&&result[result.length-1]=="(") || (s[i]=="]"&&result[result.length-1]=="[" || (s[i]=="}"&&result[result.length-1]=="{"))){
            result = result.slice(0,-1)
        }else{
            result = result+s[i]
        }
    }

    return result.length==0
};