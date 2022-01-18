package by.library.itechlibrary.service;

import by.library.itechlibrary.dto.book.BookAndIsReaderDto;
import by.library.itechlibrary.dto.book.BookDto;

import java.util.List;

public interface BookService {

    List<BookDto> findAll();

    BookDto saveBook(BookDto bookDto);

    BookAndIsReaderDto findByIdWithIsReader(long id);

    List<BookDto> findOwnersBook();

    BookDto updateStatus(String status, long bookId);

    void remove(long id);

}
