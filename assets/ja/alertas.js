function correcto(msg){
    document.getElementById("message").value = msg;
    document.getElementById("cb").value = "success"
    var obj = document.getElementById('showtoast');
    obj.click();
}
function error(msg){
    document.getElementById("message").value = msg;
    document.getElementById("cb").value = "error"
    var obj = document.getElementById('showtoast');
    obj.click();
}
function info(msg){
    document.getElementById("message").value = msg;
    document.getElementById("cb").value = "info"
    var obj = document.getElementById('showtoast');
    obj.click();
}
function advertencia(msg){
    document.getElementById("message").value = msg;
    document.getElementById("cb").value = "warning"
    var obj = document.getElementById('showtoast');
    obj.click();
}