import { QueryResult } from "pg"
import conn from "../../lib/db"
import { EventRegistrationProps } from "../event_registration"

export default async function handler(req, res) {
    res.status(200).json({
        event_name: "Continuing Ethics",
        event_location: "Here",
        event_date:"April 25, 2020"
    })
}