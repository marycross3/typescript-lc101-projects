import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo"

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]= [];
    astronauts: Astronaut[] = [];
    constructor(name:string, totalCapacityKg: number,){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let index: number = 0; index < items.length; index ++){
            total += items[index].massKg;
        }
        return total 
    }
    currentMassKg(): number{
        let cargoTotal: number =0;
        cargoTotal = this.sumMass(this.cargoItems);
        let astronautsTotal: number = 0;
        astronautsTotal = this.sumMass(this.astronauts)
        return cargoTotal + astronautsTotal
        
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
        
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)== true){
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }
}
