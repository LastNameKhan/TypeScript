class Employee {
    #id: number;
    name: string;
    address:string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name
        this.address = address;
    }

    // getNamewithAddress():string {
    //     return this.name + " " + this.address;
    // }

    getNamewithAddress():string {
        return `${this.name} stays at ${this.address}`;
    }

}

let aman = new Employee(1,"Aman","Vimalshree Classic");

let address = aman.getNamewithAddress();

// aman.id = 1;
// aman.name = "Aman";
// aman.address = "VimalShree Classic";

console.log(aman)
console.log(address)