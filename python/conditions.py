def check_if_even(number):
    if number % 2 == 0:
        print(f"{number} is even")
    else:
        print(f"{number} is not even")

def check_even_or_odd(digit):
    if digit % 2 == 0:
        print(f"{digit} is even")
    else:
        print(f"{digit} is odd")


def check_divisibility(n):
    for x in range(1, n+1):
        if x % 2 ==0:
            print(f"{x} is divisible by 2")
        elif x % 3 ==0:
            print(f"{x} is divisible by 3") 
        elif x % 5 ==0:
            print(f"{x} is divisible by 5") 
        else:
            print(f"{x} is not divisible by 2, 3 or 5")

def fizzbuzz_check_divisibility(y):
    for i in range(1, y+1):
        if i % 3 ==0 and i % 5 == 0:
            print("fizzbuzz")
        elif i % 3==0:
            print("fizz")
        elif i % 5==0:
            print("buzz")
        else:
            print(f"{i}")

def countdown(start):
    while start >= 0:
        print(f"count down at {start}")
        start-=1

def countdown_with_break(start,stop):
    while start >= 0:
        print(f"countdown at {start}")
        if start==stop:
            print(f"Stopping at {stop}")
            break

        start-=1


def skip_iteration_and_jump():
    i = 0
    while i < limit:
        if i == skip_value:
            i += 1
            continue
        print(i)
        i += 1

def numbers_from_one_to_hundred():
  num = 0
  while num < 100:
    num+=1
    if num % 2 != 0:
        continue

    

    print(num)
    

class Student:
    # name = "Jennifer"
    # age = 34
    school = "AkiraChix"
    # country = "Ethiopia"

    def __init__(self, first_name, last_name, age, country):
        self.first_name = first_name
        self.last_name=last_name
        self.age = age
        self.country = country
        self.year = 2025 - age

    def initals(self):
        uppercase_first = self.first_name[0]
        uppercase_last = self.last_name[0]
        return f"{self.first_name}: Your initials are {uppercase_first} and {uppercase_last}"

    def greet_student(self):
            return f"Hello {self.name}, Welcome to {self.school}"

    def record_marks(self, values):
        self.marks =[]
        self.marks.append(values)
        self.total = sum(self.marks)

        return f"Your marks recorded {self.marks} total is :{self.total}"
import random
def play_bowling():
    print("__Python Bowling__")
    player_name = input("Enter your full name:")
    num_frames = 10
    goal_score = random.randint(70, 100)
    total_score = 0
    pins_per_frame = []
    print(f"Hi {player_name}, Your goal is to score more than {goal_score} points")

    for frame in range(1, num_frames + 1):
        while True:
            try:
                pins_knocked_down_message = input(f"Frame {frame}: How many pins did you knock down (0-10)? ")
                pins_knocked_down = int(pins_knocked_down_message)
                if 0 <= pins_knocked_down <= 10:
                    pins_per_frame.append(pins_knocked_down)
                    total_score += pins_knocked_down
                    break
                else:
                    print("Invalid input. Please enter a number from one to ten")

            except ValueError:
                    print("Invalid input. please enter a number")

    print(f"Game over {player_name}")
    print(f"Your total score is {total_score}")
    print(f"Your target goal was {goal_score}")


    if total_score > goal_score:
        print("Congratulations, you win!")
    else:
        print("Try again next time")
    try:
        with open ("bowlingscores.txt", "w") as file:
            file.write(f"{player_name}\n")
            file.write(f"{goal_score}\n")
            file.write(f"{total_score}\n")

            print("scores saved to bowlingscores.txt")

    except IOError:
            print("Error: Could not add scores to file")

play_bowling()
        
def play_archery():
    print("___Welcome to Python Archery!___")
    player_name = input("Please Enter Your Full Name:")
    goal_score = random.randint(30, 60)
    num_rounds= 5
    points_per_round = []
    total_score = 0
    print(f"Hello, {player_name} your goal is to score {goal_score} points, Good Luck")

    for  round in range(1, num_rounds + 1):
        while True:
            try:
                archery_shot_message = input(f"Shot {round}: How many shots did you score (0-15)?")
                archery_shot = int(archery_shot_message)
                if 0 <= archery_shot <= 15:
                    points_per_round.append(archery_shot)
                    total_score += archery_shot
                    break
                else:
                    print("Invalid input. Enter a number from 0-15")
            except ValueError:
                print("Invalid input. Enter a number")

    print(f"Game over {player_name}")
    print(f"Your total score is {total_score}")
    print(f"Your target score was {goal_score}\n")

    if total_score > goal_score:
        print("Congratulations! you win")

    else:
        print("Try again next time")

    try:
        with open ("archeryscores.txt") as file:
            file.write(f"{player_name}\n")
            file.write(f"{total_score}\n")
            file.write(f"{goal_score}\n")

            print("scores saved to archeryscores.txt")

    except IOError:
            print("Error: Couldn't add scores to file")

play_archery()

        
                    