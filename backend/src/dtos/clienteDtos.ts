import { Cliente } from '@prisma/client';

export type ClienteCreationDTO = Omit<Cliente, "id">;