import { NextResponse } from "next/server";

export async function POST(requst) {
    const {login, password} =requst.json();

    if(login == 'admin' && password =='default'){
        return NextResponse.json({})
    } else {
        return NextResponse.json({}, {
            status: 401
        })
    }

}