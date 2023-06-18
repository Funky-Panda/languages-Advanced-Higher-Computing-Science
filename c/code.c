#include <stdio.h>

int validateNumbers(void)
{
    int test;
    int validInput;

    printf("How many numbers would you like to add? ");
    validInput = scanf("%i", &test);

    while (validInput != 1 || test < 2)
    {
        printf("Invalid input. Please enter a number that is more than 1: ");

        while (getchar() != '\n');

        validInput = scanf("%i", &test);
    }

    return test;
}

int addNumbers(int arrayNum)
{   
    int total = 0;
    int validInput;
    for (int i=0;i < arrayNum;i++)
    {
        int currentNum;
        printf("Please enter the number you want to add: ");
        scanf("%i", &currentNum);

        while (validInput != 1)
        {
            printf("Invalid input. Please enter the number you want to add: ");
            while (getchar() != '\n');
            validInput = scanf("%i", &currentNum);
        }

        total = total + currentNum;
    }
    return total;

}

int main(void)
{
    int arrayNum = validateNumbers();
    int total = addNumbers(arrayNum);
    printf("Total: %i\n", total);
}

