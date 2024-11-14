import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/function/encryption";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(Request: NextRequest) {
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: await Request.nextUrl.searchParams.get("email")?.toString(),
      },
      include: {
        subscriptions: true,
      },
    });

    if (!user) {
      return await NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }
    return await NextResponse.json(
      { message: "user found", data: user },
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
    const userExists = await prisma.user.findUnique({ where: { email: body.email } });
    if (userExists) {
      return await NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: Encrypted_Passowrd.toString(),
        image: body.image ? body.image : `https://ui-avatars.com/api/?name=${body.name}&size=256&background=random&color=FFFFFF&bold=true`,
      },
    });

    // Update the subscriptions data to default value
    await prisma.subscription.create({
      data: {
        userId: user.id,
        credit: 400, // default value
        plan: "FREE", // default value
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

export async function PATCH(Request: NextRequest) {
  const body = await Request.json();
  const email = Request.nextUrl.searchParams.get("email")?.toString();
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return await NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { isEmailVerified: body.isEmailVerified },
    });

    return await NextResponse.json(
      { message: "User updated", data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return await NextResponse.json({ error }, { status: 500 });
  }
}


export async function DELETE(Request: NextRequest) {
  const email = Request.nextUrl.searchParams.get("email")?.toString();
  try {
    const isUserFind = await prisma.user.findUnique({
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
    const response = await prisma.user.delete({
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
