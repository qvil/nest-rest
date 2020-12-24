import { Controller, Get, Ip } from '@nestjs/common';

@Controller('ip')
export class IpController {
  @Get()
  getIp(@Ip() ip) {
    return ip;
  }
}
