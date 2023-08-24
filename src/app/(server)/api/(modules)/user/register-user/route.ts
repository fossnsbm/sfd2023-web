import { monogoConnect } from "@/app/(server)/config/db";
import UserModel from "@/app/(server)/models/user";
import { IRegisterUser } from "@/types/users";
import { NextResponse } from "next/server";

const registerUserRoute = async (req: Request) => {
  const userDetails: IRegisterUser = await req.json();
  try {
    await monogoConnect();
    const existingUser = await UserModel.findOne({ email: userDetails.email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const user = await UserModel.create({ ...userDetails });
    user
      .save()
      .then(() => {
        NextResponse.json(
          { message: "User created successfully!" },
          { status: 201 }
        );
      })
      .catch((error: Error) => {
        NextResponse.json({ error: error.message }, { status: 400 });
      });
    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export { registerUserRoute as POST };
