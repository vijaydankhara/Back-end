#include<stdio.h>

int main()
{
    int number;
    // int number = 123;
    int x = 0;
    
    printf("Enter a number: ");
    scanf("%d", &number);
    
    while(number != 0)
    {
        x = x * 10 + number % 10;
        number = number / 10;
    }
    
    printf("Reversed Number: %d", x);
    
    return 0;
}
