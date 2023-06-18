def validateNumbers():
    while True:
        try:
            arrayNum = int(input("How many numbers would you like to add? "))
            if arrayNum < 2:
                print("Invalid input. Please enter a number that is more than 1.")
            else:
                break
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    return arrayNum


def addNumbers(arrayNumber):
    total = 0
    i = 0

    while i < arrayNumber:
        try:
            count = int(input("Please enter the number you want to add: "))
            total += count
            i += 1  # Increment i when a valid input is provided
        except ValueError:
            print("Invalid input. Please enter a valid number.")

    return total

validNumber = validateNumbers()
total = addNumbers(validNumber)
print(f"Total: {total}")