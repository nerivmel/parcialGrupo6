import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Almacen } from 'src/almacen/entities/almacen.entity';

@Table
export class Producto extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  nombre: string;

  @Column
  cantidad: number;

  @Column
  precio: number;

  @Column
  marca: number;

  @ForeignKey(() => Almacen)
  @Column
  almacenId: number;

  @Column({ defaultValue: true })
  isActive: boolean;

  @BelongsTo(() => Almacen)
  almacen: Almacen;
}
