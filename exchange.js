class Exchange{
    constructor(currency1,currency2){
        this.currency1=currency1;
        this.currency2=currency2;
        this.amount=null;
        this.url=" add your api key to here";
    }
    donustur(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.currency1)
            .then(response => response.json())
            .then(data => {
            const deger=data.conversion_rates[this.currency2];
            const amunt=this.amount;
            const sonuc=amunt*deger;
            resolve(sonuc);
            })
            .catch(err => reject(err));

        });
        fetch(this.url + this.currency1)
        .then(response => response.json())
        .then(data => {
            const deger=data.conversion_rates[this.currency2];
            const amunt=this.amount;
            const sonuc=amunt*deger;
            console.log(sonuc);
        })
        .catch(err => console.log(err));

    }
    changeamount(amount){
        this.amount=amount;
    }
    changefirstcurrency(firstcurrency){
        this.currency1=firstcurrency;
    }
    changeseconcurrency(secondcurrency){
        this.currency2=secondcurrency;
    }
}
