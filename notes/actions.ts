'use server'

import { cookies } from 'next/headers'

export async function createCookie(data: { key: string, value: string }) {
    const cookieStore = await cookies()
    console.log("creating cookie");

    cookieStore.set(data.key, data.value)

}