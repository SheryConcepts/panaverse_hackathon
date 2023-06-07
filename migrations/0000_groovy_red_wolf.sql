CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"quantity" integer NOT NULL,
	"size" varchar(60) NOT NULL,
	"productId" varchar(255) NOT NULL,
	"userId" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar,
	"email" varchar
);

CREATE INDEX IF NOT EXISTS "productIdIdx" ON "orders" ("productId");
CREATE INDEX IF NOT EXISTS "userIdIdx" ON "orders" ("userId");
CREATE INDEX IF NOT EXISTS "emailIdx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "idIdx" ON "users" ("id");
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
