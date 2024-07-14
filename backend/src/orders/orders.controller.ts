import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from 'src/schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Get('/:page/:ordersPerPage')
  async findAll(@Param('page') page: number, @Param('ordersPerPage') ordersPerPage: number): Promise<Order[]> {
    return this.ordersService.findAll(page, ordersPerPage);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Order> {
    const orders = this.ordersService.findOne(id);
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) : Promise<void>  {
    return await this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id') 
  async remove(@Param('id') id: number) : Promise<void> {
    return this.ordersService.remove(id);
  }
}
