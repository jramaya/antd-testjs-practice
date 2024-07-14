import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order, OrderSchema } from 'src/schemas/order.schema';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
