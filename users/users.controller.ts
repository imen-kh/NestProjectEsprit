import { Body, Controller, Get, Param, Post, Query ,Headers,Put,Delete} from '@nestjs/common';

@Controller('users')
export class UsersController {
  
    users = [
{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
{ id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
{ id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
{ id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
]

@Get()
getAlltUsers(
@Query ('status') status: string,
){
   
if (status){
    return this.users.filter(user=> user.status === status);

}
return this.users
;

}
@Get('/:id')
  getUserById(@Param('id') id: string) {
  return this.users.find(user => user.id === Number(id));
   
  }

@Post()
  createUser(@Body() body: any, @Headers('authorization') authHeader: string) {
    console.log('Authorization:', authHeader);

    const newUser = {
      id: this.users.length + 1,
      username: body.username,
      email: body.email,
      status: body.status || 'active',
    };

    this.users.push(newUser);

    return {
      message: 'Utilisateur ajouté avec succès ✅',
      user: newUser,
      auth: authHeader,
    };
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: any) {
    const userIndex = this.users.findIndex((u) => u.id === parseInt(id));

    if (userIndex === -1) {
      return { message: 'Utilisateur non trouvé ❌' };
    }

    // Mettre à jour les champs
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...body, 
    };

    return {
      message: 'Utilisateur mis à jour avec succès ✅',
      user: this.users[userIndex],
    };
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    const userIndex = this.users.findIndex((u) => u.id === parseInt(id));

    if (userIndex === -1) {
      return { message: 'Utilisateur non trouvé ❌' };
    }

    const deletedUser = this.users.splice(userIndex, 1); 
    return {
      message: 'Utilisateur supprimé avec succès ✅',
      deletedUser,
    };
  }

}
