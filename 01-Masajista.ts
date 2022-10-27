import { Persona } from "./00-Persona";
import { Futbolista } from "./01-Futbolista";

export class Masajista extends Persona {

  public constructor(paramNombYapell: string, paramDni: number) {
    super(paramNombYapell, paramDni)
  }

  public masajear(pArrayFutbolistas: Futbolista[], pSubirSalud: number) {

    for (let i: number = 0; i < pArrayFutbolistas.length; i++) {
      if (pArrayFutbolistas[i].getSalud() < 60) {
        pArrayFutbolistas[i].setSalud(pSubirSalud);

      }
    }
  }
}