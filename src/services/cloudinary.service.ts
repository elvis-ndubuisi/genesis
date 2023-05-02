import cloudinary from "cloudinary";
import config from "config";

cloudinary.v2.config({
    cloud_name: config.get("cloudinary.name"),
    api_key: config.get("cloudinary.key"),
    api_secret: config.get("cloudinary.secret"),
});

export default function cloudinaryService(file: string, options: { folder?: string }) {
    return cloudinary.v2.uploader.upload(file, {
        folder: options.folder ? `genesis/${options.folder}` : "genesis",
        use_filename: true,
    });
}
