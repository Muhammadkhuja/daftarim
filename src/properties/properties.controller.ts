import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Properties - Xususiyatlar")
@Controller("properties")
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @ApiOperation({ summary: "Xsusiyatlar qo'shish" })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  @ApiOperation({ summary: "Xsusiyatlarni olsh " })
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Xsusiyatlarni id bilan olsh " })
  findOne(@Param("id") id: string) {
    return this.propertiesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Xsusiyatlarni taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updatePropertyDto: UpdatePropertyDto
  ) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Xsusiyatlarni o'chirish" })
  remove(@Param("id") id: string) {
    return this.propertiesService.remove(+id);
  }
}
