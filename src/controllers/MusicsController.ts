import PrismaConfig from '../config/prisma'
import { Request, Response } from 'express'

export default class MusicsController {
    public prisma = new PrismaConfig().prisma

    public async index(req: Request, res: Response) {
        const musics = await this.prisma.musics.findMany()

        return res.send(musics)
    }

    public async store(req: Request, res: Response) {
        const data = req.body

        const music = await this.prisma.musics.create({
            data: data
        })

        return res.status(200).send(music)
    }

    public async show(req: Request, res: Response) {
        const musicId = req.params.musicId
        const music = await this.prisma.musics.findUnique({
            where: {
                id: parseInt(musicId.toString())
            }
        })

        return res.status(200).send(music)
    }

    public async update(req: Request, res: Response) {
        const data = req.body
        const musicId = req.params.musicId
        const music = await this.prisma.musics.update({
            where: {
                id: parseInt(musicId.toString())
            },
            data: data
        })

        return res.status(200).send(music)
    }

    public async destroy(req: Request, res: Response) {
        const musicId = req.params.musicId

        return res.status(200).send(await this.prisma.musics.delete({
            where: {
                id: parseInt(musicId.toString())
            }
        }))
    }
}