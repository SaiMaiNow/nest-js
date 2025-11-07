import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test/:id')
  getTest(@Param('id', ParseIntPipe) id:number): number {
    return this.appService.test2(id);
  }
}
