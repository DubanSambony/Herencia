function Vehiculo(marca){
    this.marca = marca;


this.Arrancar = function (){
    console.log("El vehículo arranco");
}
} 

function ConstructoraC (marca,Modelo) {

    const vehiculo = new Vehiculo (marca);
  
    this.marca = vehiculo.marca;
    this.Arrancar = vehiculo.Arrancar;
    this.modelo = Modelo;

    this.mostrarInfo = function() {
        console.log("Marca: " + this.marca + ", Modelo: " + this.modelo);
    };
}

const carro = new ConstructoraC ("Nissan", "skyline r34");
carro.Arrancar();
carro.mostrarInfo(); 