for(i=1; i<=5; i++){                    
    document.writeln("Esta es la linea 1:  "+i+"<br>");                  
}
let numero = 5;
for(i=1; i<=12; i++){
    document.writeln(i + " x " + numero + " = " + numero*i+"<br>");
} 
for (i=10; i<=99; i++){
    document.writeln(i,"<br>")
}
for (i=2; i<=99; i=i+2){
    document.writeln(i, "<br>")
}
for (i=1; i<=99; i=i+2){
    document.writeln(i, "<br>")
}
for (i=1; i<=50; i++ ){
    if(i % 2 == 0){
        document.writeln (i,"Par<br>");
    }else{   
        document.writeln(i,"Impar<br>");
    }
}