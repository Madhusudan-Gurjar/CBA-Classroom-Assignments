class LibraryItem:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def display_info(self):
        print(f"Title: {self.title}, Author: {self.author}")


class Book(LibraryItem):
    def __init__(self, title, author, isbn):
        super().__init__(title, author)
        self.isbn = isbn

    def display_info(self):
        print(f"Book -> Title: {self.title}, Author: {self.author}, ISBN: {self.isbn}")


class Magazine(LibraryItem):
    def __init__(self, title, author, issue_number):
        super().__init__(title, author)
        self.issue_number = issue_number

    def display_info(self):
        print(f"Magazine -> Title: {self.title}, Author: {self.author}, Issue: {self.issue_number}")


b1 = Book("Python Basics", "Guido", "ISBN12345")
m1 = Magazine("Tech Today", "Editor", 56)

b1.display_info()
m1.display_info()
