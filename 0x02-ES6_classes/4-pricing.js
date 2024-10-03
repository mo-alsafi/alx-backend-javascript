import Currency from './3-currency';

export default class Pricing{
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
    }

    set amount(value){
        if(typeof(value) !== "number"){
            throw new TypeError("Amount must be a number");
        } else{
            this._amount = value;
        }
    }

    get amount(){
        return this._amount;
    }

    set currency(value){
        if(typeof(value) !== "object"){
            throw new TypeError("Amount must be a object");
        } else{
            this._currency = value;
        }
    }

    get currency(){
        return this._currency;
    }

    displayFullPrice(){
        return `${this._amount} ${this._currency.name} ${this._currency.code}`
    }

    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}