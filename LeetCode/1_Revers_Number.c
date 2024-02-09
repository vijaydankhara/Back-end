unsigned long long int reverse(unsigned long long int x){
   unsigned long long int n=0;
    while(x != 0)
    {
        n = n * 10 + x % 10;      

        x = x / 10;    
    }
    return n;

}
