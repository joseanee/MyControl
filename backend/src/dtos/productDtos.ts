import { Produto } from '@prisma/client';

export type ProductCreationDTO = Omit<Produto, "id">;