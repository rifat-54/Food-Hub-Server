-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_mealId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_mealId_fkey";

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
