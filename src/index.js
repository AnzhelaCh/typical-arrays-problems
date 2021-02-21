exports.min = function min (array) {
    if(!array || !array.length){
        return 0;
    } else {
        return Math.min.apply(null, array);
    }

}

exports.max = function max (array) {
    if(!array || !array.length){
        return 0;
    } else {
        return Math.max.apply(null, array);
    }

}

exports.avg = function avg (array) {
    if(!array || !array.length){
        return 0;
    }else {
        var sum = 0;
        var count = array.length;
        for (let i=0; i<count; i++) {
            sum += array[i];
        }
        return sum/count;
    }

}
