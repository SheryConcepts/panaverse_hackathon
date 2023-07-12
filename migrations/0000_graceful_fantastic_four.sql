CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer NOT NULL,
	"size" varchar(60) NOT NULL,
	"productId" varchar(255) NOT NULL,
	"userId" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"modifiedAt" timestamp DEFAULT now()
);

CREATE INDEX IF NOT EXISTS "productIdIdx" ON "orders" ("productId");
CREATE INDEX IF NOT EXISTS "userIdIdx" ON "orders" ("userId");