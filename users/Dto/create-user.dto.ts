import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class UserDto{
   @IsNotEmpty({ message: 'Le nom d’utilisateur est obligatoire.' })
  @IsString({ message: 'Le nom d’utilisateur doit être une chaîne de caractères.' })
  username: string;

  @IsNotEmpty({ message: 'L’email est obligatoire.' })
  @IsEmail({}, { message: 'Veuillez entrer une adresse email valide.' })
  email: string;
}