'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(userId: string, data: { name: string, bio: string, interests: string }) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        bio: data.bio,
        interests: data.interests
      }
    });

    revalidatePath('/profile');
    revalidatePath(`/stream`);
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Database update failed." };
  }
}

export async function toggleSaveStream(userId: string, streamId: string) {
  try {
     const user = await prisma.user.findUnique({
       where: { id: userId },
       include: { savedStreams: true }
     });

     if (!user) return { success: false, error: "User not found" };

     const isSaved = user.savedStreams.some(s => s.id === streamId);

     const updatedUser = await prisma.user.update({
       where: { id: userId },
       data: {
         savedStreams: isSaved 
          ? { disconnect: { id: streamId } } 
          : { connect: { id: streamId } }
       }
     });

     revalidatePath('/profile');
     revalidatePath(`/stream/[slug]`);
     return { success: true, saved: !isSaved };
  } catch (error) {
     console.error("Toggle save failed:", error);
     return { success: false };
  }
}

export async function getSavedStreams(userId: string) {
  try {
     const user = await prisma.user.findUnique({
       where: { id: userId },
       include: { savedStreams: true }
     });
     return user?.savedStreams || [];
  } catch (error) {
     return [];
  }
}

export async function getUserProfile(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    return user;
  } catch (error) {
     console.error("Failed to fetch user:", error);
     return null;
  }
}
