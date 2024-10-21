import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {

    constructor(private prismaService: PrismaService){

    }

    async findAll(){
        return this.prismaService.usuario.findMany();
    }

    async findOne(uuid: number){
        return this.prismaService.usuario.findUnique({
            where: {
                uuid: uuid
            }
        });
    }

    async create(usuario: Usuario){
        console.log("repository: " , JSON.stringify(usuario));
        return this.prismaService.usuario.create({
           data: usuario
        })
       
    }


    async update(usuario: Usuario){
        return this.prismaService.usuario.update({
            where: {
                uuid: usuario.uuid,
            },
            data: usuario as any
        })
    }

    async delete(uuid: number){
        return this.prismaService.usuario.delete({
            where: {
                uuid
            }
        })
    }



}
