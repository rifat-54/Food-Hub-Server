/*
  Warnings:

  - The `cuisine` column on the `Meal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dietaryType` column on the `Meal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "cuisine",
ADD COLUMN     "cuisine" TEXT,
DROP COLUMN "dietaryType",
ADD COLUMN     "dietaryType" TEXT;

-- DropEnum
DROP TYPE "Cuisine";

-- DropEnum
DROP TYPE "DietaryType";
