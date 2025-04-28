import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { WorkspaceMember } from "./models/workspace_member.model";
import { CreateWorkspaceMemberDto } from "./dto/create-workspace_member.dto";
import { UpdateWorkspaceMemberDto } from "./dto/update-workspace_member.dto";

@Injectable()
export class WorkspaceMembersService {
  constructor(
    @InjectModel(WorkspaceMember)
    private workspaceMemberModel: typeof WorkspaceMember
  ) {}

  create(createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
    return this.workspaceMemberModel.create(createWorkspaceMemberDto);
  }

  findAll(): Promise<WorkspaceMember[]> {
    return this.workspaceMemberModel.findAll();
  }

    findOne(id: number): Promise<WorkspaceMember | null> {
      return this.workspaceMemberModel.findByPk(id);
    }

  async update(
    id: number,
    updateWorkspaceMemberDto: UpdateWorkspaceMemberDto
  ): Promise<WorkspaceMember | null> {
    const updatedWorkspaceMember = await this.workspaceMemberModel.update(
      updateWorkspaceMemberDto,
      { where: { id }, returning: true }
    );
    return updatedWorkspaceMember[1][0];
  }

  async remove(id: number) {
    const deleted = await this.workspaceMemberModel.destroy({
      where: { id },
    });
    if (deleted > 0) {
      return "Workspace member o'chirildi.";
    }
    return "Workspace member topilmadi yoki o'chirish mumkin emas.";
  }
}
