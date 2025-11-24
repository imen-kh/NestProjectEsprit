import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMesaageDto } from './Dtos/create-message.Dtos';

@Controller('messages')
export class MessagesController {

    @Get()
    ListMessage(){
        return{"bonjour":"imen"}
    }

    @Get("/:id")
    GetMessage(@Param("id") id :string){
        return{id}
        console.log(id);
    }
    @Post()
    CreateMessage(@Body() body:CreateMesaageDto){
        console.log(body);
        return{body}
    }
    




}
