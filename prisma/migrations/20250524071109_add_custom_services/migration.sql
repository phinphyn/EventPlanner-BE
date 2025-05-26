/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `Address` table. All the data in the column will be lost.
  - Made the column `created_at` on table `Address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `events` required. This step will fail if there are existing NULL values in that column.
  - Made the column `question` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `answer` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `faqs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `logs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_read` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email_sent` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `notifications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `payments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subject` on table `support_requests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `support_requests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `support_requests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `support_requests` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "fk_event";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "fk_address";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "Address_id" SERIAL NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("Address_id");

-- AlterTable
ALTER TABLE "eventServices" ADD COLUMN     "quantity" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "events" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "faqs" ALTER COLUMN "question" SET NOT NULL,
ALTER COLUMN "answer" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "logs" ALTER COLUMN "details" SET DATA TYPE JSONB,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL,
ALTER COLUMN "is_read" SET NOT NULL,
ALTER COLUMN "email_sent" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "payments" ALTER COLUMN "amount" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "category" VARCHAR(50),
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "support_requests" ALTER COLUMN "subject" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- RenameForeignKey
ALTER TABLE "Address" RENAME CONSTRAINT "fk_user" TO "Address_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "eventServices" RENAME CONSTRAINT "fk_event" TO "eventServices_event_id_fkey";

-- RenameForeignKey
ALTER TABLE "eventServices" RENAME CONSTRAINT "fk_service" TO "eventServices_service_id_fkey";

-- RenameForeignKey
ALTER TABLE "events" RENAME CONSTRAINT "fk_user" TO "events_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "logs" RENAME CONSTRAINT "fk_user" TO "logs_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "notifications" RENAME CONSTRAINT "fk_user" TO "notifications_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "payments" RENAME CONSTRAINT "fk_event" TO "payments_event_id_fkey";

-- RenameForeignKey
ALTER TABLE "support_requests" RENAME CONSTRAINT "fk_event" TO "support_requests_event_id_fkey";

-- RenameForeignKey
ALTER TABLE "support_requests" RENAME CONSTRAINT "fk_user" TO "support_requests_user_id_fkey";

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("Address_id") ON DELETE SET NULL ON UPDATE CASCADE;
