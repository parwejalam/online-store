import type {
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/framework"
  
  export default async function productCreateHandler({
    event,
  }: SubscriberArgs<{ id: string }>) {
    const productId = event.data.id
    console.log(`The product ${productId} was created`)
  }
  
  export const config: SubscriberConfig = {
    event: "product.created",
  }