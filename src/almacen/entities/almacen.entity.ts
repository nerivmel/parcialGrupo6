import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Producto } from 'src/producto/entities/producto.entity';

@Table
export class Almacen extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  nombre: string;

  @Column
  ubicacion: string;

  @HasMany(() => Producto)
  productos: Producto[];
}
