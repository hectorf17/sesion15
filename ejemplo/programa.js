function suma() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var sumar = parseInt(num1) + parseInt(num2);
    document.getElementById("resultado").innerHTML=sumar;
}

function resta(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var restar = parseInt(num1) - parseInt(num2);
    document.getElementById("resultado").innerHTML=restar;
}
function color(){
    var etiqueta=document.getElementById("resultado");
    etiqueta.style.color="red";
    etiqueta.style.backgroundColor="yellow";
    etiqueta.style.fontSize="20px";
}