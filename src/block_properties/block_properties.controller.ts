import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockPropertiesService } from './block_properties.service';
import { CreateBlockPropertyDto } from './dto/create-block_property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block_property.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Block_properties - Blok xususiyatlari")
@Controller("block-properties")
export class BlockPropertiesController {
  constructor(
    private readonly blockPropertiesService: BlockPropertiesService
  ) {}

  @Post()
  @ApiOperation({ summary: "Blok xusitarni qo'shish" })
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertiesService.create(createBlockPropertyDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha Blok xusitarni olish" })
  findAll() {
    return this.blockPropertiesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Blok xusitarni id bilan olish" })
  findOne(@Param("id") id: string) {
    return this.blockPropertiesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Blok xususiyatlarini taxrirlash"})
  update(
    @Param("id") id: string,
    @Body() updateBlockPropertyDto: UpdateBlockPropertyDto
  ) {
    return this.blockPropertiesService.update(+id, updateBlockPropertyDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Blok xususitatlarini o'chirirsh"})
  remove(@Param("id") id: string) {
    return this.blockPropertiesService.remove(+id);
  }
}
