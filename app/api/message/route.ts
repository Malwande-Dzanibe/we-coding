import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {

    const viewedWelcomeMessage = request.cookies.get("viewedWelcomeMessage")
    if (viewedWelcomeMessage?.value === "true") {
        return NextResponse.json({message: "Welcome back!"})
    }

    const response = NextResponse.json({message: "Welcome!"})
    response.cookies.set("viewedWelcomeMessage", "true")
    return response
}