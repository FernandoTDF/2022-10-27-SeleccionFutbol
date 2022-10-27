import { Persona } from "./00-Persona";
import { Futbolista } from "./01-Futbolista";

export class Entrenador extends Persona {

  public constructor(paramNombYapell: string, paramDni: number, paramSalud: number) {
    super(paramNombYapell, paramDni)
  }


  public animar(pArrayFutbolistas: Futbolista[], pSubirAnimo: number) {

     for (let i: number = 0; i < pArrayFutbolistas.length; i++) {
      if (pArrayFutbolistas[i].getAnimo() < 50) {
        pArrayFutbolistas[i].setAnimo(pSubirAnimo)
      }

    }
  }
}