import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}
  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentModel.create(createCommentDto);
  }

  findAll(): Promise<Comment[]> {
    return this.commentModel.findAll();
  }

  findOne(id: number) {
    return this.commentModel.findByPk(id);
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto
  ): Promise<Comment | null> {
    const updateComment = await this.commentModel.update(updateCommentDto, {
      where: { id },
      returning: true,
    });
    return updateComment[1][0];
  }

  async remove(id: number) {
    const removeCommnet = await this.commentModel.destroy({ where: { id } });
    if (removeCommnet > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
