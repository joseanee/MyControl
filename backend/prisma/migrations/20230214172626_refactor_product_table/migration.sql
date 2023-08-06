/*
  Warnings:

  - You are about to drop the column `preco` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `purchases` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_productId_fkey";

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "preco",
DROP COLUMN "quantidade";

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "PurchaseProduct" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "purchaseId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
