# LeetCode 75

These are my solutions to the problems in the LeetCode 75 study plan. After I complete these, I'm going to do the LeetCode 150 study plan.

# Array/String
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

# Two Pointers
## 283. Move Zeroes
```c++
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size();
        int cur = 0, zeroes = 0;
        for (int i = 0; i < n; i++) {
            nums[cur] = nums[i];
            if (nums[i] != 0) 
                cur++;
            else
                zeroes++;
        }

        for (int i = n - 1; i >= n - zeroes; i--) {
            nums[i] = 0;
        }
    }
};
```

## 392. Is Subsequence
```c++
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s == t) return true;
        int cur = 0;
        for (int i = 0; i < t.size(); i++) {
            if (s[cur] == t[i])
                cur++;
            if (cur >= s.size()) return true;
        }
        return false;
    }
};
```

## 11. Container With Most Water
```c++
class Solution {
public:
    int maxArea(vector<int>& height) {
        int currMax = 0;
        int low = 0, high = height.size() - 1;

        while (low < high) {
            int curr = min(height[low], height[high]) * (high - low);
            if (curr > currMax)
                currMax = curr;
            if (height[low] > height[high])
                high--;
            else 
                low++; 
        }
        return currMax;
    }
};
```

## 1679. Max Number of K-Sum Pairs
```c++
class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int low = 0, high = nums.size() - 1;
        int count = 0;
        while (low < high) {
            int sum = nums[low] + nums[high];
            if (sum == k) {
                count++;
                low++;
                high--;
            }
            else if (sum < k)
                low++;
            else
                high--;
        }
        return count;
    }
};
```

# Sliding Window
## 643. Maximum Average Subarray 1
```c++
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        double currSum = nums[0], maxSum = -999999;
        int n = nums.size();
        int low = 0;
        for (int i = 1; i < n; i++) {
            if (i < k) currSum += nums[i];
            else {
                if (currSum > maxSum) 
                    maxSum = currSum;
                currSum += nums[i];
                currSum -= nums[low];
                low++;
            }
        }
        
        if (currSum > maxSum) 
            maxSum = currSum;

        return maxSum / k;
    }
};
```

## 1456. Maximum Number of Vowels in a Substring of Given Length
```c++
class Solution {
public:
    bool isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';
    }
    int maxVowels(string s, int k) {
        int low = 0;
        int n = s.size();
        int curr = 0, max = 0;

        for (int i = 0; i < k; i++)
            if (isVowel(s[i])) curr++;
        max = curr;
        for (int i = k; i < n; i++) {
            if (isVowel(s[i])) curr++;
            if (isVowel(s[low])) curr--;
            low++;
            if (curr > max) 
                max = curr;
        }
        return max;
    }
};
```

## 1004. Max Consecutive Ones III
```c++
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int ans = 0;
        int low = 0, zeroes = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0)
                zeroes++;

            while (zeroes > k) {
                if (nums[low] == 0)
                    zeroes--;
                low++;
            }

            ans = max(ans, i - low + 1);
        }

        return ans;
    }
};
```

## 1493. Longest Subarray of 1's After Deleting One Element
```c++
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int ans = 0;
        int low = 0, zeroes = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0)
                zeroes++;

            while (zeroes > 1) {
                if (nums[low] == 0)
                    zeroes--;
                low++;
            }

            if (i - low > ans) ans = i - low;
        }

        return ans;
    }
};
```

# Prefix Sum
## 1732. Find the Highest Altitude
```c++
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int ans = 0, curHeight = 0;
        for (int height : gain) {
            curHeight += height;
            ans = max(ans, curHeight);
        }
        return ans;
    }
};
```

## 724. Find Pivot Index
```c++
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int prefix = 0, suffix = 0;
        for (int i : nums) suffix += i;

        for (int i = 0; i < nums.size(); i++) {
            suffix -= nums[i];
            if (prefix == suffix) return i;
            prefix += nums[i];
        }

        return -1;
    }
};
```

# Hash Map/Set
## 2215. Find the Difference of Two Arrays
```c++
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        set<int> s1(nums1.begin(), nums1.end());
        set<int> s2(nums2.begin(), nums2.end());
        vector<int> ans1, ans2;

        for (int i : s1) {
            if (s2.find(i) == s2.end()){
                ans1.push_back(i);
            }
        }

        for (int i : s2) {
            if (s1.find(i) == s1.end()) {
                ans2.push_back(i);
            }
        }

        return {ans1, ans2};
    }
};
```

## 1207. Unique Number of Occurrences
```c++
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        map<int, int> seen;
        for (int i : arr) {
            seen[i]++;
        }

        set<int> occurrences;
        for (auto kv : seen) {
            if (occurrences.find(kv.second) != occurrences.end())
                return false;
            occurrences.insert(kv.second);
        }
        return true;
    }
};
```

## 1657. Determine if Two Strings Are Close
```c++
class Solution {
public:
    bool closeStrings(string word1, string word2) {
        // Hashmap of both, make sure the characters
        // contained are the same, then make sure
        // the numbers of characters are the same
        map<int, int> m1, m2;
        map<int, int> s1, s2;
        for (char c : word1) 
            m1[c]++;
        for (char c : word2) 
            m2[c]++;
        for (auto kv : m1) {
            if (m2[kv.first] == 0) return false;
            s1[kv.second]++;
        }
        for (auto kv : m2) {
            if (m1[kv.first] == 0) return false;
            s2[kv.second]++;
        }
        for (auto kv : s1) 
            if (s2[kv.first] != kv.second) return false;
        for (auto kv : s2) 
            if (s1[kv.first] != kv.second) return false;

        return true;
    }
};
```

## 2352. Equal Row and Column Pairs
```c++
class Solution {
public:
    vector<int> getColumn(vector<vector<int>>& grid, int n, int colNum) {
        vector<int> col(n);
        for (int i = 0; i < n; i++) {
            col[i] = grid[i][colNum];
        }
        return col;
    }
    int equalPairs(vector<vector<int>>& grid) {
        int pairs = 0;
        map<vector<int>, int> s;
        int n = grid.size();
        for (int i = 0; i < n; i++) {
            s[grid[i]]++;
        }

        // Compare columns to rows
        for (int i = 0; i < n; i++) {
            pairs += s[getColumn(grid, n, i)];
        }

        return pairs;
    }
};
```

# Stack
