import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "snack-images";

const generateSafeFileName = (originalName: string): string => {
  const extension = originalName.split(".").pop()?.toLowerCase() || "";
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `products/${timestamp}_${randomString}.${extension}`;
};

export const uploadImageToS3 = async (file: Express.Multer.File): Promise<string> => {
  const filePath = generateSafeFileName(file.originalname);

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  if (error) {
    if (error.message.includes("not found") || error.message.includes("Bucket")) {
      throw new Error("스토리지 버킷을 찾을 수 없습니다.");
    } else if (error.message.includes("Unauthorized") || error.message.includes("security")) {
      throw new Error("스토리지 접근 권한이 없습니다.");
    }
    throw new Error("이미지 업로드에 실패했습니다.");
  }

  return filePath;
};

export const getCloudFrontUrl = (filePath: string): string => {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
};
