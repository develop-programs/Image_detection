import { NextResponse, NextRequest } from "next/server";
import { User } from "@/[Database]/models/users.model";
import { connectToDatabase } from "@/[Database]/connectTodatabase";
import CryptoJS from "crypto-js";

export async function GET() {
  await connectToDatabase().catch((error) => {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  });
  try {
    const users = await User.find();
    return await NextResponse.json(
      { message: "Users found", users },
      { status: 200 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(Request: NextRequest) {
  await connectToDatabase().catch((error) => {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  });
  const body = await Request.json();
  try {
    const Encrypted_Passowrd = CryptoJS.AES.encrypt(
      body.password,
      process.env.SECRET_KEY as string
    ).toString();
    const userExists = await User.findOne({ email: body.email });
    if (userExists) {
      return await NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: Encrypted_Passowrd,
      image: body.image,
    });
    return await NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(Request: NextRequest) {
  await connectToDatabase().catch((error) => {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  });
  const email = Request.nextUrl.searchParams.get("email");
  try {
    const iformation = await User.findOneAndDelete({ email: email });
    if (!iformation) {
      return await NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    return await NextResponse.json(
      { message: "User deleted", iformation },
      { status: 200 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}
