class POO {
  codigo: string;
  nombre: string;
  edad: number;
  laboratorio: number;
  parcial: number;

  constructor(
    _codigo: string,
    _nombre: string,
    _edad: number,
    _laboratorio: number,
    _parcial: number,
  ) {
    this.codigo = _codigo;
    this.nombre = _nombre;
    this.edad = _edad;
    this.laboratorio = _laboratorio;
    this.parcial = _parcial;
  }

  public mostrarDatos(): void {
    console.log("El estudiante: " + this.nombre);
    console.log("Codigo: " + this.codigo);
    console.log(
      "Tiene las siguientes notas - Laboratorios: " +
        this.laboratorio +
        " Parcial: " +
        this.parcial,
    );
  }

  public mostrarNotas() {
    console.log();
  }
}

class Redes {
  codigo: string;
  nombre: string;
  laboratorio1: number;
  laboratorio2: number;
  laboratorio3: number;
  parcial1: number;
  parcial2: number;
  parcial3: number;

  constructor(
    _codigo: string,
    _nombre: string,
    _edad: number,
    _laboratorio1: number,
    _laboratorio2: number,
    _laboratorio3: number,
    _parcial1: number,
    _parcial2: number,
    _parcial3: number,
  ) {
    this.codigo = _codigo;
    this.nombre = _nombre;

    this.laboratorio1 = _laboratorio1;
    this.laboratorio2 = _laboratorio2;
    this.laboratorio3 = _laboratorio3;
    this.parcial1 = _parcial1;
    this.parcial2 = _parcial2;
    this.parcial3 = _parcial3;
  }

  public mostrar() {
    let prom1 = (this.laboratorio1 * 0.6 + this.parcial1 * 0.4) / 3;
    let prom2 = (this.laboratorio1 * 0.6 + this.parcial1 * 0.4) / 3;
    let prom3 = (this.laboratorio1 * 0.6 + this.parcial1 * 0.4) / 3;
    let notaFinal = prom1 + prom2 + prom3

    console.log(`Primer computo : ${prom1}`);
    console.log(`Segundo computo : ${prom2}`);
    console.log(`Tercer computo : ${prom3}`);
    console.log(`Nota final : ${notaFinal}`)
  }
}

let estudiante2 = new Redes(
  "u20250366",
  "Jose Ramon Alvarado",
  10,
  8,
  7,
  8,
  8,
  9,
  2
);

estudiante2.mostrar();
