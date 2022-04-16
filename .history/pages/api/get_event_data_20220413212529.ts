import { QueryResult } from "pg"
import AppDataSource from "../../database/db"
import conn from "../../database/db"
import { Event } from "../../database/entities/event"
import { EventRegistrationProps } from "../event_registration"

export default async function handler(req, res) {
    const { event_code } = req.query
    const manager = AppDataSource.manager
    const event = await manager.findOneBy(Event, { id: event_code })

    res.status(200).json({
        event_name: "Continuing Ethics",
        event_location: "Here",
        event_date:"April 25, 2020"
    })
}