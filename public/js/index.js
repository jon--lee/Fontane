function handleFileSelect(){
    fireData(fileInput.files[0]);   
}


var fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', handleFileSelect, false);

createConnection();