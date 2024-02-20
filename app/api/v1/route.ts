export default function GET() {
    return Response.json({
        message: "hello from api"
    }, { status: 200 })
}