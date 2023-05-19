import multer from "multer";
import path from "path";

const multerUpload = multer({
    storage: multer.diskStorage({}),
    fileFilter(req, file, callback) {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".gif" && ext !== ".webp") {
            callback(null, false);
            return;
        }
        callback(null, true);
    },
    limits: { fileSize: 7 * 1024 * 1024 },
});

export default multerUpload;
