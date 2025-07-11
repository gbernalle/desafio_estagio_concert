-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Operando', 'Parada_para_manutenção', 'Desligada');

-- CreateTable
CREATE TABLE "Machine_Data" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_Data_pkey" PRIMARY KEY ("id")
);
