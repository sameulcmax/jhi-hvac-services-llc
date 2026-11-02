import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  reference: varchar("reference", { length: 24 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  service: varchar("service", { length: 80 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type ContactRequest = typeof contactRequests.$inferSelect;
