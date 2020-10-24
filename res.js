'use strict'; //biar kode js lebih diketat-in

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
}