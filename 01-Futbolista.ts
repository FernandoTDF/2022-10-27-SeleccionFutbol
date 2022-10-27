import { Persona } from "./00-Persona";

export class Futbolista extends Persona {
  private habilidad:number;
  private animo:number;
  protected salud:number;

  public constructor (paramNombYapell:string, paramDni:number, paramSalud:number, paramHabilidad:number, paramAnimo:number){
    super(paramNombYapell, paramDni)
    this.habilidad =paramHabilidad;
    this.animo =paramAnimo;
    this.salud =paramSalud;
  }


  public setHabilidad(pHabilidad:number){
    this.habilidad = pHabilidad;
  }

  public getHabilidad():number{
    return this.habilidad;
  }

  public setAnimo(pAnimo:number){
    this.animo =  this.animo + pAnimo;
  }

  public getAnimo():number{
    return this.animo;
  }

  public setSalud(pSalud:number){
    this.salud = this.salud + pSalud;
  }

  public getSalud():number{
    return this.salud;
  }

  public gambetear(pFutbolista:Futbolista, pMojadaDeOreja:number){
    pFutbolista.setAnimo(pMojadaDeOreja);
  }

  
  public fajar(pFutbolista:Futbolista, pPatada:number){
    pFutbolista.setSalud(pPatada);
  }

}


