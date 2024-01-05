import { NextResponse } from "next/server";

export default function Middleware(req:any){
    let verify:any = req.cookies.get("loggedin")
    let url = req.url

    if (!verify && url.includes("/admin/dashboard")){
        return NextResponse.redirect("/admin/login")
    }
   
}