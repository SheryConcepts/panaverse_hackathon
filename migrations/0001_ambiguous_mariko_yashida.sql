ALTER TABLE "orders" ADD COLUMN "createdAt" timestamp DEFAULT now();
ALTER TABLE "orders" ADD COLUMN "modifiedAt" timestamp;