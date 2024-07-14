import { Injectable } from '@nestjs/common';
import { Order, OrderDocument } from 'src/schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor() {}
  
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
      return new Order();
  }

    async findAll(page: number, ordersPerPage: number): Promise<Order[]>{
        const skippedDocs = (page - 1) * ordersPerPage;
        const show = Number(ordersPerPage);

        return [new Order()];
    }

    async findOne(Id: number): Promise<Order> {
        return new Order();
  }

  async update(Id: number, updateOrderDto: UpdateOrderDto): Promise<void> {
  }

  async remove(Id: number): Promise<void> {
  }
}
