#include<stdio.h>

int main()
{
    int number = 123;
    int x = 0;
    
    while(number != 0)
    {
        x = x * 10 + number % 10;   //  0 * 10 + 3 = 3   3 * 10 + 2 = 32    32 * 10 + 1 = 321

        number = number / 10;     // 3 / 10 = 0  32 / 10 = 3  321 / 10 = 32
    }
    
    printf("Reversed Number: %d", x);
    
    return 0;
}
