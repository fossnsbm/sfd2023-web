export interface IRegisterUser {
  userRole: string;
  fullName: string;
  email: string;
  universityMail: string;
  nic: string;
  profileImgUrl: string;
  contactNumber: string;
  whatsAppNumber: string;
  foodPreference: string;
  isNsbmStudent: boolean;
  universityName?: string;
  studentId?: string;
  batch?: string;
  isAttending: boolean;
}

export interface ITest {
    userRole: string;
    fullName: string;
}

export interface IUpdateUser {
  profileImgUrl: string;
}
