import streamlit as st
import random

# Set up the quiz questions and answers
questions = [
    {
        "question": "How do you typically start your day?",
        "options": ["A) With a hearty breakfast", "B) By hitting the snooze button", "C) With some morning exercise", "D) Checking my phone/social media"]
    },
    {
        "question": "What's your favorite way to relax?",
        "options": ["A) Taking a long bath", "B) Watching TV or movies", "C) Going for a walk", "D) Hanging out with friends"]
    },
    {
        "question": "How do you handle conflicts?",
        "options": ["A) Calmly discuss the issue", "B) Avoid and ignore it", "C) Get a bit grumpy but resolve it", "D) Make jokes to lighten the mood"]
    },
    {
        "question": "What's your favorite food?",
        "options": ["A) Something hearty and filling", "B) Junk food/snacks", "C) Healthy options", "D) Anything as long as it's delicious"]
    },
    {
        "question": "What's your dream vacation spot?",
        "options": ["A) A quiet countryside", "B) A bustling city", "C) Somewhere adventurous", "D) A beach resort"]
    },
    {
        "question": "How would your friends describe you?",
        "options": ["A) Loyal and protective", "B) Easy-going and fun", "C) Strong and determined", "D) Friendly and humorous"]
    },
    {
        "question": "What's your favorite type of music?",
        "options": ["A) Classic rock", "B) Pop", "C) Country", "D) Comedy songs"]
    }
]

# Results dictionary
results = {
    "A": "Shrek",
    "B": "Patrick Star",
    "C": "Shrek (Heroic)",
    "D": "Patrick Star (Social)",
    "A&B": "Shrek (Playful)",
    "A&C": "Shrek (Wisdom)",
    "A&D": "Shrek (Friendly)",
    "B&C": "Patrick Star (Determined)",
    "B&D": "Patrick Star (Creative)",
    "C&D": "Shrek (Adventurous)",
    "A&B&C": "Shrek (Balanced)",
    "A&B&D": "Shrek-Patrick Fusion (Playful)",
    "A&C&D": "Shrek-Patrick Fusion (Adventurous)",
    "B&C&D": "Patrick Star (All-Rounder)",
    "A&B&C&D": "Shrek-Patrick Fusion"
}

# Function to calculate the result
def calculate_result(answers):
    answer_counts = {key: answers.count(key) for key in set(answers)}
    max_count = max(answer_counts.values())
    top_answers = [key for key, count in answer_counts.items() if count == max_count]

    if len(top_answers) == 1:
        return results[top_answers[0]]
    elif len(top_answers) == 2:
        return results["&".join(sorted(top_answers))]
    elif len(top_answers) == 3:
        return results["&".join(sorted(top_answers))]
    else:
        return results["A&B&C&D"]

# Streamlit app setup
st.title("What Type of Shrek/Patrick Are You?")
st.write("Answer the following questions to find out!")
st.write("by Azeem and Salik")

# Store user answers
user_answers = []

# Display questions
for i, question in enumerate(questions):
    st.write(f"### Question {i+1}")
    st.write(question["question"])
    option = st.radio("", question["options"], key=i)
    user_answers.append(option[0])

# Display result
if st.button("Get Result"):
    result = calculate_result(user_answers)
    st.write(f"### You are: {result}!")

    # Add some fun animations or transitions
    st.balloons()
    st.snow()
    if result.startswith("Shrek"):
        st.image("https://i.pinimg.com/564x/4d/6c/f5/4d6cf548194403233b89925593b93439.jpg", use_column_width=True)
    else:
        st.image("https://w0.peakpx.com/wallpaper/976/653/HD-wallpaper-patrick-patrick-star-spongebob-patrick-star-face.jpg", use_column_width=True)
