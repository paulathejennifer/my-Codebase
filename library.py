class Book:
    def __init__(self, title, isbn, author):
        self.title = title
        self.isbn = isbn
        self.author = author
        self.is_available = True


class Member:
    def __init__(self,name,id):
        self.name = name
        self.id = id
        self.borrowed_books = []

class Library:
    def __init__(self):
        self.books=[]
        self.members = []


    def add_book(self, book):
            if book not in self.books:
                self.books.append(book)
    def borrow_book(self,book, member):
            if book.is_available:
                book.is_available=False
                member.borrowed_books.append(book)
                return True
            return False

        


