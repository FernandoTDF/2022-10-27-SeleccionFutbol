import { Persona } from "./00-Persona";
import { Futbolista } from "./01-Futbolista";
import { Entrenador } from "./01-Entrenador";
import { Masajista } from "./01-Masajista";


let Marado:Futbolista = new Futbolista("Diego Marado",14111222,100,100,100)
let Zanetti:Futbolista = new Futbolista("Pupi Zanetti",15111222,100,100,100)
let Rugieri:Futbolista = new Futbolista("Cabezon Rugieri",16111222,100,100,100)

let Beckham:Futbolista = new Futbolista("David Beckham",99111222,100,100,100)

let Basile:Entrenador = new Entrenador ("Coco Basile",10111222,100)

let Medico:Masajista = new Masajista ("Wololooo",5111222)

let arregloFutbolistas:Futbolista[]=[Marado, Zanetti, Rugieri]


console.log(`La salud de ${Zanetti.getNombresYapellidos()} es ${Zanetti.getSalud()} y el animo es ${Zanetti.getAnimo()}`)
console.log("------------------------------------------------------")

console.log("Beckham le pega al jugador y baja su salud y su animo")
Beckham.fajar(Zanetti,-60)
Beckham.gambetear(Zanetti,-70)
console.log("------------------------------------------------------")

console.log(`La salud de ${Zanetti.getNombresYapellidos()} es ${Zanetti.getSalud()} y el animo es ${Zanetti.getAnimo()}`)

console.log("El entrenador levanta el animo del/de los jugador/es con valor menor a 50 y se lo sube 20")
Basile.animar(arregloFutbolistas,20)
console.log("El entrenador levanta el animo del/de los jugador/es con valor menor a 60 y se lo sube 30")
Medico.masajear(arregloFutbolistas,30)
console.log("------------------------------------------------------")

console.log(`La salud de ${Zanetti.getNombresYapellidos()} es ${Zanetti.getSalud()} y el animo es ${Zanetti.getAnimo()}`)

