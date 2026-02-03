//Ejercicio 1
class Gym {
  constructor(
    public peso: number,
    public estatura: number,
  ) {}

  IMC() {
    const IMC = this.peso / Math.pow(this.estatura, 2);

    if (IMC < 18.5) {
      console.log(`Su índice de masa corporal es: ${IMC}. Indica peso bajo`);
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      console.log(`Su índice de masa corporal es: ${IMC}. Indica peso normal`);
    } else if (IMC >= 25 && IMC <= 29.9) {
      console.log(`Su índice de masa corporal es: ${IMC}. Indica sobrepeso`);
    } else {
      console.log(`Su índice de masa corporal es: ${IMC}. Indica obesidad`);
    }
  }
}

const cliente = new Gym(105, 1.76);
//cliente.IMC();

//Ejercicio 2

class Conversor {
  constructor(public temp: number) {}

  fahrenheitToCelcius() {
    const celcius = (this.temp - 32) / 1.8;
    console.log(`${celcius} grados celcius`);
  }

  celciusToFahrenheit() {
    const fahrenheit = (this.temp * 9) / 5 + 32;
    console.log(`${fahrenheit} grados fahrenheit`);
  }

  celciusToKelvin() {
    const kelvin = this.temp + 273.15;
    console.log(`${kelvin} grados kelvin`);
  }

  kelvinToFahrenheit() {
    const fahrenheit = (this.temp - 273.15) * 1.8 + 32;
    console.log(`${fahrenheit} grados fahrenheit`);
  }

  kelvinToCelcius() {
    const celcius = this.temp - 273.15;
    console.log(`${celcius} grados celcius`);
  }
}

//Ejercicio 3
class Infraccion {
  constructor(
    public infraccion: number,
    public nombre: string,
  ) {}

  tipoInfraccion() {
    if (this.infraccion === 1) {
      console.log(`${this.nombre} llegaste tarde. Deberás cancelar $1`);
      
    } else if (this.infraccion === 2) {
      console.log(
        `${this.nombre} caminaste por los pasillos en horas de clase. Deberás cancelar $3`,
      );
    } else if (this.infraccion === 3) {
      console.log(
        `${this.nombre} no trajiste vestimenta apropiada. Deberás cancelar $5`,
      );
    } else if (this.infraccion === 4) {
      console.log(
        `${this.nombre} hiciste uso inapropiado de las instalaciones. Deberás cancelar $10`,
      );
    }
  }
}

const infraccion1 = new Infraccion(1, 'Stan')
const infraccion2 = new Infraccion(2, 'Jose')
const infraccion3 = new Infraccion(3, 'Manuel')
const infraccion4 = new Infraccion(4, 'Carlos')

infraccion1.tipoInfraccion()
infraccion2.tipoInfraccion()
infraccion3.tipoInfraccion()
infraccion4.tipoInfraccion()