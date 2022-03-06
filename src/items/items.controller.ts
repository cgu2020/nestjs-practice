import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import {CreateItemDto} from './DTO/create-item.dto'
import {Request, Response} from "express"
import {ItemsService} from './items.service'
import {Item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {
  constuctor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(@Req() req:Request, @Res() res:Response):Response{
    console.log(req.url)
    return res.send(this.itemsService.findAll)
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`
  }

  @Post()
  create(@Body() item:CreateItemDto):string{
    return `Name: ${item.name}`
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return `Delete ${id}`
  }

  @Put(':id')
  update(@Param('id') id, @Body() item:CreateItemDto): string{
    return `Update ${id} - ${item.name}`
  }
}
