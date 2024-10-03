export default class Currency{
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    set name(value){
        if(typeof(value) !== "string"){
            throw new TypeError("Name must be a string");
        } else{
            this._name = value;
        }
    }

    get name(){
        return this._name;
    }

    set code(value){
        if(typeof(value) !== "string"){
            throw new TypeError("Code must be a string");
        } else{
            this._code = value;
        }
    }

    get code(){
        return this._code;
    }

    displayFullCurrency(){
        return `${this._name} (${this._code})`
    }
}