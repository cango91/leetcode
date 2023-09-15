class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        return [("FizzBuzz" if (x+1) % 3 == 0 and (x+1) % 5 == 0 else "Fizz" if (x+1) % 3 == 0 else "Buzz" if (x+1)%5 == 0 else str(x+1)) for x in range(n) ]
