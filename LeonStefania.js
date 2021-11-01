<<<<<<< HEAD
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
        console.log(this.mascotas);
        return this.mascotas;
    }
    countMascotas(){
        console.log(this.mascotas.length);
        return this.mascotas.length;
    }
    addBook({Nombre, Autor}){
        this.libros.push({Nombre, Autor});
        console.log(this.libros);
        return this.libros;
    }
    getBookNames(){
        let nombresDeLibros = []
        for(let i = 0; i<this.libros.length; i++){
            nombresDeLibros.push(this.libros[i].Nombre);
        }
        console.log(nombresDeLibros);
        return nombresDeLibros;
    }
}

const usuario1 = new Usuario('Santiago', 'Rodriguez', [{Nombre: 'El Alquimista', Autor:'Paulo Coelho'}], ['Firulais', 'Toto']);
usuario1.getFullName();
usuario1.addMascota('Pepe');
usuario1.countMascotas();
usuario1.addBook({Nombre:'Harry Potter', Autor:'J.K.Rowling'})
usuario1.getBookNames();
=======
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBook({Nombre, Autor}){
        this.libros.push({Nombre, Autor});
        console.log(this.libros);
    }
    getBookNames(){
        let nombresDeLibros = []
        for(let i = 0; i<this.libros.length; i++){
            nombresDeLibros.push(this.libros[i].Nombre);
        }
        console.log(nombresDeLibros);
    }
}

const usuario1 = new Usuario('Santiago', 'Rodriguez', [{Nombre: 'El Alquimista', Autor:'Paulo Coelho'}], ['Firulais', 'Toto']);
usuario1.getFullName();
usuario1.addMascota('Pepe');
usuario1.countMascotas();
usuario1.addBook({Nombre:'Harry Potter', Autor:'J.K.Rowling'})
usuario1.getBookNames();

>>>>>>> ce7c9bdd1d6b3984fc65b72dae577c613f5562a3
