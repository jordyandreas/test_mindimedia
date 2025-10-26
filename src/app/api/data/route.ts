import { NextResponse } from "next/server";
import resortData from "@/data/resortData.json";

export async function GET() {
  return NextResponse.json(resortData);
}
