# Part A
# Create a list called myList with 4 values
myList = [1, 2, 3, 4]
myList2 = []
myList3 = []

# Assign the values (from position 1 to the end) of myList to a new list- myList2
myList2.extend(myList[1:])

#  append a new item to myList2 , remove the 3rd item then assign the list to myList3
myList2.append(5)
print(myList2)

myList3 = myList2
myList3.remove(2)
print(myList3)

# Part B
# Explain what each of the methods does, 
# then print out the result of each method using your own data.

# count(sub,[start,[end]]) 
# The count() method returns the number of occurrences of a substring in the given string.

# endswith(suffix,[start,[end]])
# The endswith() method returns True if a string ends with the specified suffix. 
# If not, it returns False.

# find/index(sub,[start,[end]])
#  The find() method returns the index of first occurrence of the substring (if found). If not found, it returns -1.

# join()
# The join() method takes all items in an iterable and joins them into one string.

# replace(old,new[,count])
# The replace() method replaces a specified phrase with another specified phrase.

# split([sep[,maxsplit]])
# The split() method splits a string into a list.

# splitlines([keepends])
# The splitlines() method splits a string into a list. The splitting is done at line breaks.

# startswith(prefix[,start[,end]])
# The startswith() method returns True if the string starts with the specified value, otherwise False.

# strip([chars])
# The strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)


# Part C: create a function to check if the number is prime number

def checkPrime(num):
    flag = False

    # prime numbers are greater than 1
    if num > 1:
        # check for factors
        for i in range(2, num):
            if (num % i) == 0:
                # if factor is found, set flag to True
                flag = True
                # break out of loop
                break

        # check if flag is True
    if flag:
        print(num, "is not a prime number")
    else:
        print(num, "is a prime number")

checkPrime(2)
checkPrime(233)


# Part D: Create a function called disStuInfo. We can pass a variable number of arguments to it
class employer: 
    def __init__(self,schoolID,firstName,lastEmail):
        self.schoolID = schoolID
        self.firstName = firstName
        self.lastEmail = lastEmail

def disStuInfo(schoolID,*firstName,**lastEmail):
    email_key = [*lastEmail.keys()]
    counter = 0
    for name in firstName:
        print(schoolID) 
        
        if name == ' ':
            txt = '\'unmatched\''
            print(txt) 
        else:
            print(name) 
        print(email_key[counter])
        print(lastEmail.get(email_key[counter]))
        
        counter = counter+1
        print("     ")


disStuInfo(10001,'John','Petter',' ',Smith='jSmith@gmail.com',Potter="Petter@yahoo.com", JackLast="j@gmail.com")