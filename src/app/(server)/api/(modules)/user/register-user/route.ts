import { monogoConnect } from "@/app/(server)/config/db";
import UserModel from "@/app/(server)/models/user";
import { ITest } from "@/types/users";
import { NextResponse } from "next/server";

const registerUser = async (req: Request, res: Response) => {
  const { fullName, userRole }: ITest = await req.json();
  try {
    await monogoConnect();
    console.log(userRole, fullName);
    const user = await UserModel.create({ userRole, fullName });
    await user
      .save()
      .then((result: any) => {
        NextResponse.json({ result }, { status: 200 });
      })
      .catch((error: any) => {
         NextResponse.json({ error }, { status: 500 });
      });
    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error!" },
      { status: 500 }
    );
  }
};

export { registerUser as POST };
