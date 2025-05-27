import { ConnectDB } from "@/lib/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function POST(request: Request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get("email")}`,
  };

  await EmailModel.create(emailData);

  return NextResponse.json({
    success: true,
    msg: "Email saved successfully",
  });
}

export async function GET(request: Request) {
  const emails = await EmailModel.find({});

  if (!emails) {
    return NextResponse.json({
      success: false,
      msg: "No emails found",
    });
  }

  return NextResponse.json({
    success: true,
    data: emails,
  });
}

export async function DELETE(request: Request) {
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    msg: "Email deleted successfully",
  });
}
