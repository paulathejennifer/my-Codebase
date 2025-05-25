#function to create a new to do item
def crete_to_do_object(description):
    return{
    "description":description,
    "id":id,
    "status":"pending"
    }
 
def print_description_and_id(item){
    print(f"Task ID:{id}, Description:{description}")\

}

def check_id_match(item, id_to_check_against):
    return item['id']==id_to_check_against

    #object representing the to do item
todo_item_example={
    "description":"Buy Shoes",
    "id":"task-14",
    "status":"pending"
}

#function to mark the task as complete

def mark_task_as_complete(item):
    item['status']="complete"

#function to mark a task as pending
def mark_task_as_pending(item):
    item["status"]="pending"

    #list of to do items
list_of_to_do_items=[
    {"description":"Brush my teeth", "id":"task-41", "status":"pending"},
    {"description":"Take a shower", "id":"task-42", "status":"pending"},
    {"description":"Wash Dishes", "id":"task-43", "status":"pending"}
]

#function to find my to do item by id

def find_to_do_by_id(to_do_list, id_to_find):
    for item in to_do_list:
        if item['id']==id_to_find:
            return item
        return None

#function to get all pending tasks

#positional
def greet(name, msg):
    print(f"{msg}, {name}")
greet("Alice", "Hello")#positional args
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
            print("Couldn't add scores to file")

play_archery()

        
                    