let x=0;
let o=0
let aux=0
const colocaElemento=(ids)=>{
   let quadrado=document.getElementById(ids);
   if(document.getElementById(ids).innerHTML!=''){
        alert('Posição ja esta preenchida')
   }else{
    if(x===0){
        quadrado.innerHTML='X';
        console.log('x')
        console.log(quadrado.value)
            x+=1;
            o=0;
    }
    else if(o===0){
        quadrado.innerHTML='O';
        console.log('o')
        o+=1;
        x=0        
         }
   }
        verificaGanhou()
}
const verificaGanhou=()=>{
    let campo=document.getElementById('campo').innerHTML
    let campo2=document.getElementById('campo2').innerHTML
    let campo3=document.getElementById('campo3').innerHTML
    let campo4=document.getElementById('campo4').innerHTML
    let campo5=document.getElementById('campo5').innerHTML
    let campo6=document.getElementById('campo6').innerHTML
    let campo7=document.getElementById('campo7').innerHTML
    let campo8=document.getElementById('campo8').innerHTML
    let campo9=document.getElementById('campo9').innerHTML
    if((campo===campo2) && (campo2===campo3 )|| (campo===campo4) && (campo4===campo7)){
       document.getElementById('result').innerHTML=`O vencendor foi: ${campo}`
    }
     if(campo4==campo5 && campo5==campo6){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo4}`
    }    
     if(campo7==campo8&& campo8==campo9){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo7}`
    }
    if(campo2==campo5&& campo5==campo8){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo2}`
    }
    if(campo3==campo6&& campo6==campo9){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo3}`
    }
    if(campo==campo5&& campo5==campo9){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo}`
    }
    if(campo3==campo5&& campo5==campo7){
        document.getElementById('result').innerHTML=`o vencendor foi: ${campo3}`
    }
}