class Player{
    constructor(){
        this._hp = 1;
    }

    setHP(hp){
        this._hp = hp;
    }

    get hp(){
        return this._hp;
    }
}
