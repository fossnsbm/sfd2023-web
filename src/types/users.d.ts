export interface IRegisterUser {
  userRole: string;
  fullName: string;
  email: string;
  universityMail: string;
  nic: string;
  profileImgUrl: string;
  contactNumber: number;
  whatsAppNumber: number;
  foodPreference: string;
  isNsbmStudent: boolean;
  universityName?: string;
  studentId?: number;
  batch?: string;
  isAttended: boolean;
}
export interface IUpdateUser {
  profileImgUrl: string;
}
