long double reverse(int x){
   long double n=0;
    while(x != 0)
    {
        n = n * 10 + x % 10;      

        x = x / 10;    
    }
    return n;

}
