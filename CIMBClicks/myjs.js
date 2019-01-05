function validasi(){
    var xnim = document.myform.kd.value;
    if(xnim == 0){
        alert("Kode tidak boleh kosong !!");
        return false;
    }
}