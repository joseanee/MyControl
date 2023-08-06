/*
  Warnings:

  - The `detalhe` column on the `purchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `forma` column on the `purchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `valor` column on the `purchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "detalhe",
ADD COLUMN     "detalhe" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "forma",
ADD COLUMN     "forma" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "valor",
ADD COLUMN     "valor" DOUBLE PRECISION[] DEFAULT ARRAY[]::DOUBLE PRECISION[];
