import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

//It creates collection as Order
@Schema()
export class Order {

  @Prop()
  Id: number;
  
  @Prop()
  Name: string;

  @Prop()
  Email: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
