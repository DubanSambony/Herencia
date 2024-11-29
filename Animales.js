class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    haceSonido() {
      console.log("El animal hace sonido");
    }
  }
  
  
  class Perro extends Animal {
    constructor(nombre, edad) {
      super(nombre, edad); 
      this.raza = [];
    }
    
        Raza(raza) {
        this.raza.push(raza); 
    }
  
    haceSonido() {
      console.log("El perro hace guaaau");
    }
  }
  
 
  const animal = new Animal("nuevo animal", 7 ,);
  animal.haceSonido(); 
  
  const perro = new Perro("skyper", 1);
  perro.haceSonido(); 
  console.log(perro);
  perro.Raza("criollo");
  console.log(perro);