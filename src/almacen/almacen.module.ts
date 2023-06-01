import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { Almacen } from './entities/almacen.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Almacen])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
})
export class AlmacenModule {}
