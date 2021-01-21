var copy =  function copyObjdect(obj) {
    var cp = {};
    for (var o in obj) {
        cp[o] = obj[o];
    }
    return cp;
}

export { copy  }