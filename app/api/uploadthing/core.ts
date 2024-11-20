import { prismadb } from "@/lib/prismadb";
import sharp from "sharp";
import { type FileRouter, createUploadthing } from "uploadthing/next";
import { z } from "zod";

const token = process.env.UPLOADTHING_TOKEN;

const f = createUploadthing({
  token: token,
});

const auth = (req: Request) => ({ id: "fakeId" }); 


export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const { configId } = metadata.input;
        const res = await fetch(file.url);
        const buffer = Buffer.from(await res.arrayBuffer());
        const imgMetadata = await sharp(buffer).metadata();
        const { height, width } = imgMetadata;

        if (!configId) {
          const configuration = await prismadb.configuration.create({
            data: {
              imageUrl: file.url,
              height: height || 500,
              width: width || 500,
            },
          });
          return { configId: configuration.id };
        }

        const updateConfiguration = await prismadb.configuration.update({
          where: { id: configId },
          data: { croppedImageUrl: file.url },
        });
        return { configId: updateConfiguration.id };
      } catch (error) {
        console.error("Upload erreeeeeeeeeeeeeeeor:", error);
        throw new Error("Upload failed");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
