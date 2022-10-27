export class Persona{
  protected nombreYapellidos:string;
  protected dni:number;
  

  public constructor (paramNombYapell:string, paramDni:number){
    this.nombreYapellidos = paramNombYapell;
    this.dni = paramDni;
  }

  public setNombresYapellidos(pNombreYapellido:string){
    this.nombreYapellidos=pNombreYapellido;
  }

  public getNombresYapellidos():string{
    return this.nombreYapellidos;
  }

  public setDni(pDni:number){
    this.dni = pDni;

  }
  public getDni():number{
    return this.dni;

  }

 

}