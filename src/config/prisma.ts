import { PrismaClient } from ".prisma/client";

export default class PrismaConfig {
    public prisma = new PrismaClient()
}