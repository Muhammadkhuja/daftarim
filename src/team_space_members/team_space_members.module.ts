import { Module } from '@nestjs/common';
import { TeamSpaceMembersService } from './team_space_members.service';
import { TeamSpaceMembersController } from './team_space_members.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeamSpaceMember } from './models/team_space_member.model';

@Module({
  imports: [SequelizeModule.forFeature([TeamSpaceMember])],
  controllers: [TeamSpaceMembersController],
  providers: [TeamSpaceMembersService],
})
export class TeamSpaceMembersModule {}
