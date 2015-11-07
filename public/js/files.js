function trace(s){
    console.log(s)
}


function fireData(file){
    trace('name: ' + file.name + ' size: ' + file.size);
    var chunkSize = 16384;
    var sliceFile = function(offset){
        var reader = new window.FileReader();
        reader.onload = (function() {
            return function(e) {
                /*fireChannel(e.target.result)
                if (file.size > offset + e.target.result.byteLength) {
                    window.setTimeout(sliceFile, 0, offset + chunkSize);
                }*/
                trace('acknowledged fire');
            };
        })(file);
        var slice = file.slice(offset, offset + chunkSize);
        reader.readAsArrayBuffer(slice)
    };
    sliceFile(0)
}

