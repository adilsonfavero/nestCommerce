import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
//import { UsuarioRepository } from './usuario.repository';


@Controller('usuario')
export class UsuarioController {

    constructor(private repo: UsuarioRepository){

    }

    @Post()
    async criar(@Body() usuario:Usuario){
        
        const _usuario = await this.repo.create(usuario);
        return _usuario;
    }

    @Get()
    async obterTodos(){
        return await this.repo.findAll();
    }

    @Get(':uuid')
    async obterPorId(@Param('uuid') uuid: string){
        return await this.repo.findOne(+uuid);
    }

    @Patch(':uuid')
    async atualizar(@Param('uuid') uuid:string, @Body() usuario: Usuario){
       
        const _usuario = await this.repo.update({
            ...usuario,  
            uuid : +uuid});
        return _usuario;
    }

    @Delete(':uuid')
    async delete(@Param('uuid') uuid: string){
        return await this.repo.delete(+uuid);
    }

}
