export class CreateAdminDto {
  full_name: string;
  email: string;
  hashed_psaaword: string;
  refresh_token: string;
  roleId: number;
  is_active: boolean;
}
