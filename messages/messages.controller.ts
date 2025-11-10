import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
    CreateMessage(@Body() body:any){
        console.log(body);
        return{body}
    }
    




}
