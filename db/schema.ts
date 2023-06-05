import { InferModel, relations } from "drizzle-orm";
import { serial, integer, pgTable, varchar, index } from "drizzle-orm/pg-core";

export const orders = pgTable(
  "orders",
  {
    id: serial("id").primaryKey(),
    quantity: integer("quantity").notNull(),
    size: varchar("size", { length: 60 }).notNull(),
    productId: varchar("productId", { length: 255 }).notNull(),
    userId: integer("userId").references(() => users.id).notNull(),
  },
  (t) => ({
    productIdIdx: index("productIdIdx").on(t.productId),
    userIdIdx: index("userIdIdx").on(t.userId),
  })
);

export type Orders = InferModel<typeof orders, "select">;
export type NewOrders = InferModel<typeof orders, "insert">;

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name"),
    email: varchar("email"),
  },
  (t) => ({
    emailIdx: index("emailIdx").on(t.email),
    idIdx: index("idIdx").on(t.id),
  })
);

export type Users = InferModel<typeof users, "select">;
export type NewUsers = InferModel<typeof users, "insert">;

export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  users: one(users, { fields: [orders.userId], references: [users.id] }),
}));
