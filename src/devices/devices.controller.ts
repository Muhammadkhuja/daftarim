import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Devices - Qurilmalar")
@Controller("devices")
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  @ApiOperation({ summary: "Device qo'shish" })
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha qurilmalarni olish" })
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Device ni ID bo'yicha olish" })
  findOne(@Param("id") id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Device ni yangilash" })
  update(@Param("id") id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Device ni o'chirish" })
  remove(@Param("id") id: string) {
    return this.devicesService.remove(+id);
  }
}
