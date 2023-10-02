

mensagem = (msg) => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = x => Math.sqrt(x);

let a = "";
let b = "";
let valor = ""
let temponto = false; 

//função para mostrar numeros no display 
function escrever_display(num){
    document.getElementById("resultado").value = num;
}
//função para receber teclas númericas e o ponto.
function digitando(tecla){
    if( tecla =="."){
        if (!temponto){
            temponto = true;
            valor += tecla;
            escrever_display(valor );
        }
        return
    }
    valor += tecla;
    escrever_display(valor );

}
let executa = "";
function operacao (op){
    executa = op;
    a = valor;
    valor = "";
    temponto = false;
}
function calcular(){
    if(executar != ""){
        b=valor;
        if(executar == "mult")escrever_display(mult(a,b));
        if(executar == "div")escrever_display(div(a,b));
        if(executar == "sub")escrever_display(sub(a,b));
        if(executar == "soma")escrever_display(soma(Number(a),Number (b)));
        let a = "";
        let b = "";
        let valor = ""
        let temponto = false; 
    }   
}