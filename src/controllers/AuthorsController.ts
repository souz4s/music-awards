import PrismaConfig from "../config/prisma"
import { Request, Response } from "express"

export default class AuthorsController {
    public prisma = new PrismaConfig().prisma

    public async index(req: Request, res: Response) {
        const author = await this.prisma.author.findMany()

        return res.send(author)
    }

    public async store(req: Request, res: Response) {
        const data =  req.body

        const author = await this.prisma.author.create({
            data: data
        })

        return res.status(200).send(author)
    }

    public async show(req: Request, res: Response) {
        const authorId = req.params.authorId
        const author = await this.prisma.author.findUnique({
            where: {
                id: parseInt(authorId.toString())
            }
        })

        return res.status(200).send(author)
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        const authorId = req.params.authorId
        const author = await this.prisma.author.update({
            where: {
                id: parseInt(authorId.toString())
            },
            data: data
        })

        return res.status(200).send(author)
    }

    public async destroy(req: Request, res: Response) {
        const authorId = req.params.authorId

        return res.status(200).send(await this.prisma.author.delete({
            where: {
                id: parseInt(authorId.toString())
            }
        }))
    }
}