import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Comments - Izohlar")
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: "Comment qo'shish" })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha Commentlarni olish" })
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Commentsni ID bo'yicha olish" })
  findOne(@Param("id") id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Commentsni yangilash" })
  update(@Param("id") id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Commentsni o'chirish" })
  remove(@Param("id") id: string) {
    return this.commentsService.remove(+id);
  }
}
