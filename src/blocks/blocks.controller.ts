import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Blocks - Bloklar")
@Controller("blocks")
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Post()
  @ApiOperation({ summary: "Bloklarni qo'shish " })
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @Get()
  @ApiOperation({ summary: "Barch bloklarni olish " })
  findAll() {
    return this.blocksService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bloklarni id bilan olsh " })
  findOne(@Param("id") id: string) {
    return this.blocksService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Bloklarni taxrirlash"})
  update(@Param("id") id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(+id, updateBlockDto);
  }

  @Delete(":id")
  @ApiOperation({summary: "Bloklarni o'chirish"})
  remove(@Param("id") id: string) {
    return this.blocksService.remove(+id);
  }
}
