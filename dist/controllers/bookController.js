"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getBooks = void 0;
const Book_1 = __importDefault(require("../models/Book"));
console.log(Book_1.default);
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book_1.default.find();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
});
exports.getBooks = getBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, author } = req.body;
        const newBook = new Book_1.default({
            title,
            description,
            author,
        });
        const savedBook = yield newBook.save();
        res.status(201).json(savedBook);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating a book', error });
    }
});
exports.createBook = createBook;
//# sourceMappingURL=bookController.js.map