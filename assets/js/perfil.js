
function subirImagen(){
		document.getElementById("file-input").click();
}
    
function EditarPerfil() {   
var email = document.getElementById("email").value;

      email = window.btoa(email);

     
 	    var pwd = document.getElementById("pass").value;
 			var n =  document.getElementById("nombre").value;
       var telefono = document.getElementById("telefono").value;

 			var ap = "";
 			var am = "";
 			var nom = n +"|"+ ap +"|"+ am;
 
 			var depto = "";
		    var cargo = "1";
		    var matricula = "";
		    
		    var  semestre = "";
		    var nss = "";
		    var carrera = "";
		    var curp = "BLAP230103";
        var fecha = "2022-12-16";
	console.log(cn_ws + "Comando=Editperfil&Email=" + email + "&Pwd="+pwd+"&Nom="+nom+"&Ap="+nom+"&Am="+nom+"&Cargo="+cargo+"&Tel2="+telefono+"&Curp="+curp+"&Nss="+nss+"&Sueldo="+matricula+"&Depto="+depto + "&Fecha=" + fecha);
          $.ajax({
                type: "GET",
                url: cn_ws + "Comando=Editperfil&Email=" + email + "&Pwd="+pwd+"&Nom="+nom+"&Ap="+nom+"&Am="+nom+"&Cargo="+cargo+"&Tel2="+telefono+"&Curp="+curp+"&Nss="+nss+"&Sueldo="+matricula+"&Depto="+depto + "&Fecha=" + fecha,
                success: function (result) {  

			console.log(result);
             var fecha = "";

               correcto('Datos Agregados');   
               setTimeout(loader, 2500); 
               setTimeout('login()', 2600);
           
               			   
                },
                error: function (jqXmlHttpRequest, textStatus, errorThrown) {
                
                }
            });
        }  
        
        function login(){
          window.location.href = "login.html";
      }

      function loader(){
        document.getElementById("loader").style.display="none";
    }

function init() {
  document.getElementById("inputFile1").click();
  var inputFile = document.getElementById('inputFile1');
  inputFile.addEventListener('change', mostrarImagen, false);
}
function mostrarImagen(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
  	
    var img = document.getElementById('imgx');
    img.src= event.target.result;
    img.style.display = 'block';
    document.getElementById('imgCapturar').style.display = 'none';
    var sampleImage = document.getElementById('imgx');
    convertImageToCanvas(sampleImage);

  }
  reader.readAsDataURL(file);
}
function convertImageToCanvas(image) {
        setTimeout(function () {
            var MAX_WIDTH = 500;
            var MAX_HEIGHT = 500;
            var tempW = image.width;
            var tempH = image.height;
            if (tempW > tempH) {
                if (tempW > MAX_WIDTH) {
                    tempH *= MAX_WIDTH / tempW;
                    tempW = MAX_WIDTH;
                }
            } else {
                if (tempH > MAX_HEIGHT) {
                    tempW *= MAX_HEIGHT / tempH;
                    tempH = MAX_HEIGHT;
                }
            }
            var canvas = document.createElement("canvas");
            canvas.width = tempW;
            canvas.height = tempH;
            canvas.getContext("2d").drawImage(image, 0, 0, tempW, tempH);
            var dataURL = canvas.toDataURL("image/jpeg");
            var base64 = dataURL.split(",");
            console.log(dataURL);
         guardarfoto(dataURL);
            return canvas;
        }, 1000);
    }
    function guardarfoto(base){
           $.ajax({
                type: "get",
                  url: cn_ws + "Comando=P64",
                crossDomain: true,
                data: '{' + 'Base64=' + base +'}',               
                headers: {
                  'contentType': "application/json; charset=utf-8",
                  'dataType': "json"
                },                
                success: function (data) {
                    var dato = result.split('|');
                    localStorage.setItem("rol", dato[9]);
                    var r = localStorage.getItem("rol");
                if(r != "Estudiante"){      
                }             
                },
                error: function (jqXmlHttpRequest, textStatus, errorThrown) {
                    alert("Datos Incorrectos");
                },
            });
    }
