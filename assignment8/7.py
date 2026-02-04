class User:
    def __init__(self, username):
        self.username = username
        self.__password = ""   # private

    def set_password(self, password):
        if len(password) >= 6:
            self.__password = password
            print("Password set successfully!")
        else:
            print("Password must be at least 6 characters!")

    def login(self, password):
        if password == self.__password:
            print("Login Successful ")
        else:
            print("Invalid Password ")


u1 = User("madhu")
u1.set_password("1234567")

u1.login("1234567")
u1.login("wrongpass")
