/*checkpoint 1*/

Algorithm: Sentence Analysis

Input: A sentence ending with a point

Output: Length of the sentence, Number of words, Number of vowels

1. Initialize three variables: char_count, word_count, vowel_count to 0.
2. Read the input sentence character by character until the point is encountered.
3. For each character:
     - Increment char_count by 1.
     - If the character is a space, increment word_count by 1.
     - If the character is a vowel, increment vowel_count by 1.
4. Increment word_count by 1 to account for the last word (ending with a point).
5. Output char_count as the length of the sentence, word_count as the number of words, and vowel_count as the number of vowels.

/*checkpoint2*/

def count_sentence_metrics(sentence):
    # Initialize counters
    length_counter = 0
    word_counter = 0
    vowel_counter = 0

    # Define vowels
    vowels = 'aeiouAEIOU'

    # Iterate through each character in the sentence
    for char in sentence:
        # Increment length counter
        length_counter += 1

        # Check if character is a letter (part of a word)
        if char.isalpha():
            # Increment word counter if the previous character was not a letter (start of a new word)
            if word_counter == 0:
                word_counter += 1
        # Check if character is a vowel
        if char in vowels:
            vowel_counter += 1

    # Return the counts
    return length_counter, word_counter, vowel_counter

# Example usage
sentence = "This is an example sentence."
length, words, vowels = count_sentence_metrics(sentence)
print("Length of the sentence:", length)
print("Number of words in the sentence:", words)
print("Number of vowels in the sentence:", vowels)



