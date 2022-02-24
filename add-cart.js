document.getElementById('phone-minus-btn').addEventListener('click',function(){
    inputValue('phone',1219,false)
   
  
})
document.getElementById('phone-plus-btn').addEventListener('click',function(){
    inputValue('phone',1219,true)
   
  
})
document.getElementById('case-minus-btn').addEventListener('click',function(){
    inputValue('case',59,false)
   
  
})
document.getElementById('case-plus-btn').addEventListener('click',function(){
    
    inputValue('case',59,true)
  
})

function inputValue(product,price,isIncreasing){
    let inputValues=  document.getElementById( product+ "-input")
    let userInputValues=inputValues.value ;//
    inputValues.value =parseFloat(userInputValues)+isIncreasing
    if(isIncreasing==true){
        userInputValues =parseFloat(userInputValues)+1//
    }
    else if(userInputValues>0){
        userInputValues =parseFloat(userInputValues)-1//
    }
    inputValues.value=userInputValues
    //update price
    const productPrice=document.getElementById(product+'-price')
    productPrice.innerText=userInputValues*price
    totalAmount()
}

function getInputValue(product){
    const productInput=document.getElementById(product+'-input').value;
    return parseInt(productInput);
}
function totalAmount(){
    const phoneTotal=getInputValue('phone')*1219
    const caseTotal=getInputValue('case')*59
    const subTotal=phoneTotal+caseTotal
    document.getElementById('sub-total').innerText=subTotal
    const tax=subTotal/20;
    document.getElementById('tax').innerText=tax.toFixed(2);
    document.getElementById('total-price').innerText=subTotal+tax
}