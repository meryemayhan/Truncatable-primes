Static void sumTruncPrimes()
{
         İnt ans = 0;
              for(int x = 10; x < 10000000; x++)
{
         İf(isLeftTruncPrime(x) && isRightTruncPrime(x))ans += x;
}
        System.out.println(ans);
}
        Staticboolean isLeftTruncPrime(long n)
{
       İf(!isPrime(n))
       Return false;
       Long curNum = n;
İnt D = (int)Math.log10(n);
       While (D > 0)
{
       curNum = curNum%(int)Math.pow(10,D);
       if(!isPrime(curNum))
       return false;
       D--;
}
       Return true;
}
       static boolean isRightTruncPrime(log n)
{
