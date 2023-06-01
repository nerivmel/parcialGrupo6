import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto) private productoRepository: typeof Producto,
  ) {}
  async create(createProductoDto: CreateProductoDto) {
    const newProducto = {
      ...createProductoDto,
    };
    try {
      await this.productoRepository.create(newProducto);
      return 'creado exitosamente';
    } catch (error) {
      throw new HttpException('Error al crear el producto', 500);
    }
  }

  findAll() {
    return `This action returns all producto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
