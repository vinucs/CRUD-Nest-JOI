import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PinguimService } from './pinguim.service';
import { Pinguim } from './schema/pinguim.schema';
import { PinguimDTO } from './dto/pinguim.dto';

@Controller()
export class BookController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  async createPinguim(@Body() createPinguimDTO:PinguimDTO): Promise<Pinguim> {
    return await this.pinguimService.create(createPinguimDTO)
  }

  @Put('/:id')
  async updatePinguim(@Param('id') id : string, @Body() updatePinguimDTO:PinguimDTO){
    return await this.pinguimService.update(id, updatePinguimDTO)
  }

  @Get()
  async getAllPinguins(): Promise<Pinguim[]> {
    return await this.pinguimService.findAll()
  }

  @Get('/:id')
  async getPinguim(@Param('id') id: string): Promise<Pinguim> {
    return await this.pinguimService.findOne(id)
  }

  @Delete('/:id')
  async deletePinguim(@Param('id') id: string) {
    return await this.pinguimService.delete(id)
  }

}
