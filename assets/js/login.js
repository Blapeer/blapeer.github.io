function login() {
    document.getElementById("loader").style.display="block";
    toastr.clear();
    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pass").value;
var respuesta = "";
    user = window.btoa(user);
    pwd = window.btoa(pwd);
    //alert(cn_ws + "Comando=Loginapp&User=" + user + "&Pwd=" + pwd );
    if(user != '' && pwd != ''){  
    
    $.ajax({
        type: "GET",
        url: cn_ws + "Comando=Loginapp&User=" + user + "&Pwd=" + pwd  ,
        success: function (result) {

            console.log(result);
          respuesta = result.split("<");
          
            if(respuesta[0] != "0") {
                info(user);    
                localStorage.setItem("sesion", 1);
                localStorage.setItem("usuario", user);
                localStorage.removeItem("registro");
                //setTimeout(window.location.href = "admin.html", 5000);	
                setTimeout(function(){window.top.location="admin.html"} , 2500);
                
            }
            else{

                error("Datos incorrectos");               
                setTimeout(loader, 2500);
            

            }
        },
        error: function (jqXmlHttpRequest, textStatus, errorThrown) {

            error("Verifique su conexión");
            setTimeout(loader, 2500);
            
        }
    });
    }
    else{
        advertencia("Agregue los datos solicitados");
        if(user.value == ""){
            user.style.border = '3px solid red';  
        }
        if(pwd.value == ""){
            pwd.style.border = '3px solid red';  
        }
        setTimeout(loader, 2500);
     
        
    }          
}
function entrar(){
    window.location.href = "dashboard.html";
}
function loader(){
    document.getElementById("loader").style.display="none";
}
function info(user){
    $.ajax({
        type: "GET",
        url: cn_ws + "Comando=Infouserapp&User=" + user,
        success: function (result) {
             
            var dato = result.split('|');
            localStorage.setItem("nombre", dato[0] + ' ' + dato[1] + ' ' + dato[2]);  
            localStorage.setItem("email", dato[17]);   
            localStorage.setItem("matricula", dato[12]);  
            localStorage.setItem("telefono", dato[13]); 
            localStorage.setItem("semestre", dato[11]); 
            localStorage.setItem("nss", dato[15]);   
            localStorage.setItem("carrera", dato[10]); 
            localStorage.setItem("curp", dato[14]); 
            localStorage.setItem("rol", dato[10]);
        },
        error: function (jqXmlHttpRequest, textStatus, errorThrown) {   
        }
    });
}
function registrarme(){
            localStorage.removeItem("nombre");  
            localStorage.removeItem("email");   
            localStorage.removeItem("matricula");  
            localStorage.removeItem("telefono"); 
            localStorage.removeItem("semestre"); 
            localStorage.removeItem("nss");   
            localStorage.removeItem("carrera"); 
            localStorage.removeItem("curp"); 
            localStorage.removeItem("domicilio");
            localStorage.removeItem("usuario");
    localStorage.setItem("registro", 1)
    window.location.href = "perfil.html";
}
