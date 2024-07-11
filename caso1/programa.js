//Variables Públicas

var n, u, d;
var rpta = "S" //Variable que indicará si desea continuar ingresando mas numeros
//======================= 2 =======================
function general() {//Invocará otras funciones ==== 2 ====
    var xm;
    ingreso(); //Solicitará ingresar el número
    separa(); //Identificar el dígito de las unidades y de las decenas
    xm = proceso(n, d, u); //Calcular la potencia de los dígitos y el menor o mayor dígito
    alert(xm); //Mostrar resultados en ventana
    document.write(xm)
}
//======================= 3 =======================
function ingreso() {
    n = parseInt(prompt("Ingrese un numero de 2 dígitos"));
}
//======================= 4 =======================
function separa() {
    d = Math.floor(n / 10) //Decenas
    u = n % 10; // Unidades 
}
//======================= 5 =======================
function proceso(v1, v2, v3) {//v1 es el número, v2 es decenas y v3 unidades
    var x, y, mx, mx, m;
    if (v1 % 2 != 0) {//Si es impar
        x = Math.pow(v3, v2);//Elevar las unidades a las decenas
        mn = Math.min(v3, v2);//Hallar la cifra menor
        m = n + " Es un número impar," + "\n" +
            " El dígito de la unidad es " + u + "\n" +
            " El dígito de las decenas es " + d + "\n" +
            u + " elevado a " + d + "=" + x + "\n" +
            " y el dígito de menor valor es: " + mn + "<br>";
    } else {//Si el número es par
        y = Math.pow(v2, v3);//Elevar las decenas a las unidades
        mx = Math.max(vx, v3);//Hallar la cifra mayor
        m = n + "Es un número par," + "\n" +
            " El dígito de la unidad es " + u + "\n" +
            " El dígito de las decenas es " + d + "\n" +
            d + " elevado a " + u + "=" + y + "\n" +
            " y el dígito de mayor valor es: " + mx;
    }
    return m;
}
//======================= 1 =======================
while (rpta.toUpperCase() != "N") {
    general();//Llama a la función general Inicio 
    rpta = prompt("Desea continuar [S/N]");

}