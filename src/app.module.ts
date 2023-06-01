import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { AlmacenModule } from './almacen/almacen.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Almacen } from './almacen/entities/almacen.entity';
import { Producto } from './producto/entities/producto.entity';

@Module({
  imports: [
    ProductoModule,
    AlmacenModule,
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bdparcialg6',
      models: [Producto, Almacen],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
