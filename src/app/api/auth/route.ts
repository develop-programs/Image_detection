import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/function/encryption";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const users = await prisma.users.findMany();
    return await NextResponse.json(
      { message: "Users found", data: users },
      { status: 200 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(Request: NextRequest) {
  const body = await Request.json();
  try {
    const Encrypted_Passowrd = hashPassword(body.password);
    const userExists = await prisma.users.findUnique({ where: { email: body.email } });
    if (userExists) {
      return await NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const user = await prisma.users.create({
      data: {
        name: body.name,
        email: body.email,
        password: Encrypted_Passowrd.toString(),
        image: body.image ? body.image : `https://ui-avatars.com/api/?name=${body.name}&background=random&color=fff&size=128`,
      },
    });
    return await NextResponse.json(
      { message: "User created", data: user },
      { status: 201 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(Request: NextRequest) {
  const email = Request.nextUrl.searchParams.get("email")?.toString();
  try {
    const isUserFind = await prisma.users.findUnique({
      where: {
        email: email
      },
    })
    if (!isUserFind) {
      return await NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    const response = await prisma.users.delete({
      where: {
        email: email
      },
    });
    return await NextResponse.json(
      { message: "User deleted", data: response },
      { status: 200 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}
