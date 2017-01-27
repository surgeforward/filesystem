"use strict";
class File {
    constructor(metadata, contents) {
        this.contents = contents;
        this.name = metadata.name;
        this.ext = metadata.ext;
        this.path = metadata.path;
        this.parentDir = metadata.parentDir;
        this.visibility = metadata.visibility;
        this.size = metadata.size;
        this.isFile = metadata.isFile;
        this.isDir = metadata.isDir;
        this.timestamp = metadata.timestamp;
        this.mimetype = metadata.mimetype;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = File;