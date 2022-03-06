import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '34151232387',
      name: 'Item one',
      desc: "this is item one",
      qty: 10
    },
    {
      id: '34151232388',
      name: 'Item two',
      desc: "this is item two",
      qty: 20
    }
  ]
  findAll(): Item[] {
    return this.items
  }

}
