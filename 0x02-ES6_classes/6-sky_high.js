import Building from './5-building';

export default class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft);
        this._floors = floors;
    }

    set sqft(value){
        if(typeof(sqft) !== "number"){
            throw new TypeError("Sqft must be a number");
        } else{
            this._sqft = value;
        }
    }

    get sqft(){
        return this._sqft;
    }

    set floors(value){
        if(typeof(sqft) !== "number"){
            throw new TypeError("Floors must be a number");
        } else{
            this._floors = value;
        }
    }

    get floors(){
        return this._floors;
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this._floors} floors`;
    }
}