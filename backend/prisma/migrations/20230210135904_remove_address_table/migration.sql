/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bairro` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_empresaId_fkey";

-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL;

-- DropTable
DROP TABLE "addresses";
