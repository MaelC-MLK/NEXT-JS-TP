import { sql } from '@vercel/postgres';


export async function fetchTeamsById(id) {
    try {
        const data = await sql`
        SELECT * FROM our_teams WHERE id = ${id}
        `;
        return data;
    } catch (error) {
        console.error(error);
    }
}