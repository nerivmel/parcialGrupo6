import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import {
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
  SwaggerModule,
} from '@nestjs/swagger';
import { Almacen } from './entities/almacen.entity';
@ApiTags('almacen')
@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Post()
  create(@Body() createAlmacenDto: CreateAlmacenDto) {
    return this.almacenService.create(createAlmacenDto);
  }

  @Get()
  findAll() {
    return this.almacenService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description:
      'Consulta el inventario de productos de un almacén determinado.',
    type: Almacen,
  })
  findOne(@Param('id') id: string) {
    return this.almacenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlmacenDto: UpdateAlmacenDto) {
    return this.almacenService.update(+id, updateAlmacenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.almacenService.remove(+id);
  }
}
