import { Controller, Get, Ip } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ip')
@Controller('ip')
export class IpController {
  @Get()
  getIp(@Ip() ip) {
    return ip;
  }
}
