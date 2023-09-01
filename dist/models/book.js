"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    author: String,
});
const Book = mongoose_1.default.model('Book', bookSchema);
module.exports = Book;
//# sourceMappingURL=Book.js.map