import { QueryResult } from "pg"
import conn from "../../lib/db"
import { EventRegistrationProps } from "../event_registration"

export default async function handler(req, res) {
    const { event_code } = req.query
    try {
        const query = `SELECT * FROM EVENTS WHERE CODE=($1)}`
        const result: QueryResult<EventRegistrationProps> = 
        await conn.query( query, [ event_code ])

        return result.rows.pop()
    } catch (error) {

    }
}