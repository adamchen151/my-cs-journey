## 1768. Merge Strings Alternately
```c++
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string ans;
        int len1 = word1.length();
        int len2 = word2.length();
        int maxlen = max(len1, len2);
        for (int i = 0; i < maxlen; i++) {
            if (i < len1)
                ans += word1[i];
            if (i < len2)
                ans += word2[i];
        }
        return ans;
    }
};
```

## 1071. Greatest Common Divisor of Strings
```c++
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        if (str1 + str2 != str2 + str1) return "";
        return (str1.substr(0, gcd(str1.length(), str2.length())));
    }
};
```
## 1431. Kids With the Greatest Number of Candies
```c++
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int n = candies.size();
        vector<bool> ans(n);

        int maxCandies = 0;
        for (int i = 0; i < n; i++) {
            if (candies[i] > maxCandies)
                maxCandies = candies[i];
        }

        for (int i = 0; i < n; i++) {
            if (candies[i] + extraCandies >= maxCandies)
                ans[i] = true;
            else
                ans[i] = false;
        }

        return ans;
    }
};
```

## 605. Can Place Flowers
```c++
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int len = flowerbed.size();
        int currZeros = 0;

        // Base Cases
        if ((len == 1 && flowerbed[0] == 0) || 
            (len >= 2 && flowerbed[0] == 0 && flowerbed[1] == 0))
            n--;

        for (int i = 1; i < len; i++) {
            if (flowerbed[i] == 0)
                currZeros++;
            else {
                n -= ((currZeros - 1) / 2);
                currZeros = 0;
            }
        }

        if (currZeros >= 2)
            n -= (currZeros / 2);

        return n <= 0;
    }
};
```

## 345. Reverse Vowels of a String
```c++
class Solution {
public:
    bool isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
    }
    string reverseVowels(string s) {
        int len = s.size();
        int low = 0, high = len - 1;
        while (low < high) {
            if (isVowel(s[low]) && isVowel(s[high])) {
                swap(s[low], s[high]);
                low++;
                high--;
            }
            else if (isVowel(s[low])) {
                high--;
            }
            else if (isVowel(s[high])) {
                low++;
            }
            else {
                low++;
                high--;
            }
        }
        return s;
    }
};
```

## 151. Reverse Words in a String
```c++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        int prefix = 1, suffix = 1;
        vector<int> ans(n, 1);

        for (int i = 0; i < n; i++) {
            ans[i] *= prefix;
            prefix *= nums[i];
        }

        for (int i = n - 1; i >= 0; i--) {
            ans[i] *= suffix;
            suffix *= nums[i];
        }

        return ans;
    }
};
```

## 334. Increasing Triplet Subsequence
```c++
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        int low = nums[0], lowest = nums[0];
        int secondLow = INT_MAX;

        // If new number is lower than low and we have a chain of 2, put it in low2
        // If we have a second chain of 2 which has a smaller second number, replace the first one
        for (int i = 1; i < n; i++) {
            if (nums[i] < lowest)
                lowest = nums[i];
            if (nums[i] > lowest && nums[i] < secondLow) {
                low = lowest;
                secondLow = nums[i];
            }
            if (nums[i] > low && nums[i] < secondLow) {
                secondLow = nums[i];
            }
            if (nums[i] > secondLow) return true;
        }

        return false;
    }
};
```

## 443. String Compression
```c++
class Solution {
public:
    int compress(vector<char>& chars) {
        int n = chars.size();
        string compressed;
        char currChar = chars[0];
        int currNum = 1;
        for (int i = 1; i < n; i++) {
            if (chars[i] != currChar) {
                compressed += currChar;
                if (currNum > 1) compressed += to_string(currNum);
                currChar = chars[i];
                currNum = 1;
            }
            else currNum++;
        }
        compressed += currChar;
        if (currNum > 1) compressed += to_string(currNum);

        n = compressed.size();
        for (int i = 0; i < n; i++) {
            chars[i] = compressed[i];
        }
        return n;
    }
};
```
