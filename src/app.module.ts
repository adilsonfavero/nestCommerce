
import { Module } from '@nestjs/common';

import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';
import { PrismaService } from './db/prisma.service';
//import { UsuarioController } from './usuario/usuario.controller';


@Module({
  imports: [UsuarioModule, TempModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
