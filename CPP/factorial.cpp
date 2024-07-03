#include <iostream>
using namespace std;

// creating a function to calculating factorial of entered number
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;

    // Calculating the factorial of entered number
    int result = factorial(number);

    // Printing the result
    cout << "Factorial of " << number << " is " << result << endl;

    return 0;
}
