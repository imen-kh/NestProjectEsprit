import { IsNumber, IsString } from "class-validator"

export class CreateMesaageDto{
   @IsString()
    nom:string 
     @IsString()
    prenom:string
    @IsNumber()
    age:number
}