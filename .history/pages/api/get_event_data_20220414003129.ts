import type { NextApiRequest, NextApiResponse } from 'next'


import { QueryResult } from "pg"
import AppDataSource from "../../database/db"
import conn from "../../database/db"
import { Event } from "../../database/entities/event"

export type EventData = {
    event_name: string;
    event_location: string;
    event_date:string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<EventData>) {
    const { event_code: event_code_query } = req.query
    const manager = AppDataSource.manager

    var event_code: string = ""
    if (typeof event_code_query === 'string') {
        event_code = event_code_query
    } else {
        event_code = event_code_query[0]
    }

    const event = await manager.findOneBy(Event, { reference_code: event_code })

    if (!event) {
        res.status(404)
    } else {
        res.status(200).json({
            event_name: event.name,
            event_location: event.location,
            event_date:event.date
        })
    }
}