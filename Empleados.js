class Empleado {
    constructor(nombre,salario){
        this.nombre = nombre;
        this.salario = salario;
    
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre},
         Salario: ${this.salario}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario); 
        this.departamento = [];   
    }

    Departamento (departamento){
        this.departamento.push(departamento); 
    }


    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}


const empleado = new Empleado("ceraingo", 90000000);
console.log(empleado.obtenerDetalles()); 

const gerente = new Gerente("Angel", 45000);
gerente.Departamento("Ventas");
console.log(gerente.obtenerDetalles());