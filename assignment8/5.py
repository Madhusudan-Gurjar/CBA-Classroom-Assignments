class Student:
    def __init__(self, name):
        self.name = name
        self.__marks = 0  # private

    def set_marks(self, marks):
        if 0 <= marks <= 100:
            self.__marks = marks
        else:
            print("Invalid Marks! Must be between 0 and 100.")

    def get_marks(self):
        return self.__marks

    def grade(self):
        m = self.__marks
        if m >= 90:
            return "A+"
        elif m >= 75:
            return "A"
        elif m >= 60:
            return "B"
        elif m >= 40:
            return "C"
        else:
            return "Fail"


s1 = Student("Neha")
s1.set_marks(85)

print("Marks:", s1.get_marks())
print("Grade:", s1.grade())
