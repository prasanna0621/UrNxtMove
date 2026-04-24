'use server';

import { prisma } from "@/lib/prisma";

export async function globalSearch(query: string) {
  if (!query || query.length < 2) return [];

  try {
    const streams = await prisma.stream.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { slug: { contains: query } },
          { tags: { contains: query } }
        ]
      },
      select: {
        id: true,
        name: true,
        slug: true
      },
      take: 5
    });

    return streams.map(s => ({
      id: s.id,
      title: s.name,
      type: 'Stream',
      url: `/stream/${s.slug}`
    }));

  } catch (error) {
    console.error("Search failed:", error);
    return [];
  }
}
