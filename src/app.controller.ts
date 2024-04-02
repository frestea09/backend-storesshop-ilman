import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as data from '../assets/data.json';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/data')
  getData() {
    return {
      status: 200,
      data: data,
      message: 'success',
    };
  }
}
