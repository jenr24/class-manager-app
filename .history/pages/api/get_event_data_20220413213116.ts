import type { NextApiRequest, NextApiResponse } from 'next'


import { QueryResult } from "pg"
import AppDataSource from "../../database/db"
import conn from "../../database/db"
import { Event } from "../../database/entities/event"
import { EventRegistrationProps } from "../event_registration"

export default async function handler(req, res) {
    const { event_code } = req.query
    const manager = AppDataSource.manager
    const event = await manager.findOneBy(Event, { id: event_code })

    if (!event) {
        res.status(404).json({error: `No Event with the ID: ${event_code}`})
    } else {
        res.status(200).json({
            event_name: event.name,
            event_location: event.location,
            event_date:event.date
        })
    }
}