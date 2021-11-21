import PrismaConfig from "../config/prisma";
import { Request, Response } from 'express'

export default class GenresController {
    public prisma = new PrismaConfig().prisma

    public async index(req: Request, res: Response) {
        const genre = await this.prisma.genre.findMany()

        return res.send(genre)
    }

    public async store(req: Request, res: Response) {
        const data =  req.body

        const genre =  await this.prisma.genre.create({
            data: data
        })

        return res.status(200).send(genre)
    }

    public async show(req:  Request, res: Response) {
        const genreId = req.params.genreId
        const genre = await this.prisma.genre.findUnique({
            where: {
                id: parseInt(genreId.toString())
            }
        })

        return res.status(200).send(genre)
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        const genreId = req.params.genreId
        const genre = await this.prisma.genre.update({
            where: {
                id: parseInt(genreId.toString())
            },
            data: data
        })

        return res.status(200).send(genre)
    }

    public async destroy(req: Request, res: Response) {
        const genreId = req.params.genreId

        return res.status(200).send(await this.prisma.genre.delete({
            where: {
                id: parseInt(genreId.toString())
            }
        }))
    }
}