import { toast } from "react-hot-toast";

export function toastAddToCart(addToCartPromise: Promise<void>) {
  toast.promise(addToCartPromise, {
    success: <span>Added to cart</span>,
    loading:  <span>Adding to cart...</span>,
    error: <span>Failed to add to cart</span>,
  })
}

export function toastDeleteFromCart(addToCartPromise: Promise<void>) {
  toast.promise(addToCartPromise, {
    success: <span>Deleted from cart</span>,
    loading:  <span>Deleting from Cart</span>,
    error: <span>Failed to Delete the order</span>,
  })
}
