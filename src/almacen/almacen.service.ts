import { HttpException, Injectable } from '@nestjs/common';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { Almacen } from './entities/almacen.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectModel(Almacen) private almacenRepository: typeof Almacen,
  ) {}
  async create(createAlmacenDto: CreateAlmacenDto) {
    return 'This action adds a new almacen';
  }

  findAll() {
    return `This action returns all almacen`;
  }

  async findOne(id: number) {
    const almacen = await this.almacenRepository.findOne({
      where: { id },
      include: ['productos'],
    });
    if (!almacen) {
      throw new HttpException('No existe el almacen', 404);
    }
    return almacen;
  }

  update(id: number, updateAlmacenDto: UpdateAlmacenDto) {
    return `This action updates a #${id} almacen`;
  }

  remove(id: number) {
    return `This action removes a #${id} almacen`;
  }
}
