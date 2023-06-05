import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { users } from "@/db/schema";
import { config } from "dotenv";

config();

async function run() {
  try {
    // console.log("deleting all rows from orders");
    // await db.delete(orders);
    // console.log("deleted!")
    //
    // console.log("adding users");
    // await db.insert(users).values([
    //   {
    //     name: "shery",
    //     email: "shery@shery",
    //   },
    //   {
    //     name: "shery2",
    //     email: "shery2@shery",
    //   },
    // ]);
    // console.log("added users")
    //
    // console.log("adding orders");
    // // add order into carts table for user id = 1
    // await db.insert(orders).values([
    //   {
    //     quantity: 1,
    //     productId: "2",
    //     size: "XL",
    //     userId: 1,
    //   },
    //   {
    //     quantity: 2,
    //     size: "L",
    //     productId: "3",
    //     userId: 1,
    //   },
    // ]);
    // console.log("orders added!");
    //
    const allUsers = await db.query.users.findMany();
    console.log("all users", allUsers);

    const allOrders = await db.query.orders.findMany();
    console.log("all orders", allOrders);

    const usersWithOrders = await db.query.users.findMany({
      with: {
        orders: true,
      },
    });
    console.log("users with orders", usersWithOrders);

    const firstUserWithItsOrders = await db.query.users.findFirst({
      with: {
        orders: true,
      },
    });

    const user2WithOnlyItsNameAndOrders = await db.query.users.findFirst({
      columns: {
        name: true,
      },
      with: {
        orders: true,
      },
      where: (users, { eq }) => eq(users.id, 2),
    });
    console.log(
      "User 2 with only its name and orders",
      user2WithOnlyItsNameAndOrders
    );

    console.log("first user with its orders", firstUserWithItsOrders);

    const user1WithOnlyItsNameAndOrders = await db.query.users.findFirst({
      columns: {
        name: true,
      },
      with: {
        orders: true,
      },
      where: (users, { eq }) => eq(users.id, 1),
    });
    console.log(
      "User 1 with only its name and orders",
      user1WithOnlyItsNameAndOrders
    );

    const user1WithEmailOnlyAndOrdersWhereSizeIsLQuantityIs2 =
      await db.query.users.findFirst({
        columns: {
          email: true,
        },
        with: {
          orders: {
            where: (orders, { eq, and }) => and(eq(orders.size, "L"), eq(orders.quantity, 2)),
            columns: {
              id: true,
            },
          },
        },
      });
    console.log("user1WithEmailOnlyAndOrdersWhereSizeIsLQuantityIs2",user1WithEmailOnlyAndOrdersWhereSizeIsLQuantityIs2)
  } catch (e) {
    console.log("Error during execution", e);
    process.exitCode = 1;
  }
}

run();
