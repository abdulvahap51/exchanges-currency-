

const currency1=document.getElementById("firstcurrency");
const currency2=document.getElementById("secondcurrency");
const amount=document.getElementById("miktar");
const result=document.getElementById("output");

const currency= new Exchange("USD","TRY");
const ui= new Ui();

allthings( );
function allthings(){
    amount.addEventListener("keyup",olacaklar);
    currency1.addEventListener("change",currency1change);
    currency2.addEventListener("change",currency2change);




}


 
function olacaklar(){
currency.changeamount(amount.value);
currency.donustur()
.then(result => {
    ui.changeresult(result);
    console.log(result);
})
.catch(err => console.log(err));
console.log(amount.value);

}
function currency1change(){
    console.log(currency1.value);
    currency.changefirstcurrency(currency1.options[currency1.selectedIndex].textContent);
    

}
function currency2change(){
    currency.changeseconcurrency(currency2.options[currency2.selectedIndex].textContent);

}
