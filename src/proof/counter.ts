export class Counter {
    constructor(private count: number){}
    increment(){
        return this.count++
    }
    getCount(){
        return this.count
    }
}