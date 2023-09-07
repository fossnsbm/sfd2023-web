import { monogoConnect } from "@/app/(server)/config/db";
import UserModel from "@/app/(server)/models/user";
import { confirmationMail } from "@/app/(server)/utils/confirmationMail";
import { IRegisterUser } from "@/types/users";
import { NextResponse } from "next/server";

const registerUserRoute = async (req: Request) => {
  const userDetails: IRegisterUser = await req.json();
  try {
    await monogoConnect();
    const existingUser = await UserModel.findOne({
      universityMail: userDetails.universityMail,
    });
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
        confirmationMail(userDetails.universityMail, userDetails.fullName);
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
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export { registerUserRoute as POST };
