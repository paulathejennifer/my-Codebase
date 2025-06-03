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

        
#TESTING SCRIPT

#(>>> lib = Library()

#>>> book1 = Book("Clean Codes", "48723819", "Richard Martini")

#>>> member1 = Member("Jennifer Otis", "897784987490")

#>>> lib.add_book(book1)

#>>> lib.borrow_book(book1, memmber1)

#>>> lib.borrow_book(book1, memmber1)

#>>> lib.borrow_book(book1, member1)

#True


class Patient:
    def __init__(self, name, id):
        self.name = name
        self.id = id
        self._medical_history = []

class Doctor:
    def __init__(self, name, specialization):
# #         self.name = name
# #         self.specialization = specialization
# #         self.available = True


# # class A