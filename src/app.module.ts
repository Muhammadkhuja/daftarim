import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { TypesModule } from "./types/types.module";
import { PropertiesModule } from "./properties/properties.module";
import { BlocksModule } from "./blocks/blocks.module";
import { Block } from "./blocks/models/block.model";
import { Type } from "./types/models/type.model";
import { BlockPropertiesModule } from "./block_properties/block_properties.module";
import { BlockProperty } from "./block_properties/models/block_property.model";
import { Property } from "./properties/models/property.model";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { User } from "./user/models/user.model";
import { Admin } from "./admin/models/admin.model";
import { RolesService } from './roles/roles.service';
import { CommentsService } from './comments/comments.service';
import { DevicesService } from './devices/devices.service';
import { GroupsService } from './groups/groups.service';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { RolesModule } from './roles/roles.module';
import { CommentsModule } from './comments/comments.module';
import { DevicesModule } from './devices/devices.module';
import { GroupsModule } from './groups/groups.module';
import { PermissionsModule } from './permissions/permissions.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { GroupMembersModule } from './group_members/group_members.module';
import { WorkspaceMembersModule } from './workspace_members/workspace_members.module';
import { TeamSpaceModule } from './team_space/team_space.module';
import { TeamSpaceMembersModule } from './team_space_members/team_space_members.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Block, Type, BlockProperty, Property, User, Admin],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    TypesModule,
    PropertiesModule,
    BlocksModule,
    BlockPropertiesModule,
    UserModule,
    AdminModule,
    AuthModule,
    FileModule,
    RolesModule,
    CommentsModule,
    DevicesModule,
    GroupsModule,
    PermissionsModule,
    WorkspaceModule,
    GroupMembersModule,
    WorkspaceMembersModule,
    TeamSpaceModule,
    TeamSpaceMembersModule,
  ],
  controllers: []
})
export class AppModule {}
