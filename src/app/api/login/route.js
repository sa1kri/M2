import { NextResponse } from "next/server";

export async function POST(request) {
    const {login, password} = await request.json();

    if (login === 'admin' && password === 'default') {
        return NextResponse.json({})
        
    } else {
        return NextResponse.json({}, {
            status: 401
        })
    }
}