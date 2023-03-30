function increment(){
    var number = Number(document.getElementById('number').innerHTML)   //convert string to number 
    document.getElementById('number').innerHTML = number+1 ;

}
function decrement(){
    var number = Number(document.getElementById('number').innerHTML)   //convert string to number 
    document.getElementById('number').innerHTML = number-1 ;
}
function neutral(){
     
    document.getElementById('number').innerHTML = 0 ;
}