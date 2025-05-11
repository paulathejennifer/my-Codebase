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
    

