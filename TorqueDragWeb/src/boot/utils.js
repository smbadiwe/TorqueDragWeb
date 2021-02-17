var copy =  function copyObjdect(obj) {
    var cp = {};
    for (var o in obj) {
        cp[o] = obj[o];
    }
    return cp;
}

var convertToNumber = function(obj){
    var ans  = parseFloat(obj);
    return ans
}

export { copy, convertToNumber  }