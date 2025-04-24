import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Types-turlari")
@Controller("types")
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  @ApiOperation({ summary: "Types qo'shildi " })
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha typesni olsh" })
  findAll() {
    return this.typesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Typesni id bilan olsh" })
  findOne(@Param("id") id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Typesni yangilash " })
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @ApiOperation({ summary: "Types o'chrish " })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typesService.remove(+id);
  }
}
