# Reassure

## Overview

A WebMD, symptom checker type of website dedicated to people with health anxiety and hypochondria.

### Problem

For myself, and other people who struggle with this kind of anxiety, the prospective solutions, such as Googling how we feel only makes things worse. A regular symptom checker does not account for people with this kind of affliction. On the rare occasions that I do come across a website that will let me know my symptoms are also symptoms of a panic attack -- I feel a little more confident that I am experiencing a panic attack, which I do actually know is happening. It's the fight to convince myself of this.

### User Profile

This is highly specific for people who deal with anxiety and hypochondria, people who know that they are having an anxious moment/panic attack and want reassurance.

### Features

Log in, log out/sign up. Signing up and logging in allows the users to see their data for their records.

Symptom checker, using data from API to input their symptoms and get helpful output that these are normal symptoms of anxiety and panic attacks.

Breathe animation, using the transform function and scale, to grow and shrink an image, simulating a deep breathing pattern to allow the user to focus on their breathing, and breathe along with the animation.

## Implementation

### Tech Stack

Node.js, NPM, React, Axios, Express, Knex

### APIs

APIMedic Api, symptom checker which has a lot of symptomatic data for anxiety
or make own Api depending on how satisfied I am with the data.

### Sitemap

Homepage -> Where the symptom checker will be
"Breathe" Page -> Where the breathing animation will be 
About -> An about the app page that explains why the app has been made, other information about anxiety and hypochondria
Profile Page -> Will be where a users information is, accessible upon logging in


### Mockups

![homepage](https://github.com/user-attachments/assets/9a9631a6-b148-4e99-8096-38a1816198eb)
![breathe-page](https://github.com/user-attachments/assets/a50a2cf5-b685-4d1d-8b4e-3de4e7d6a87b)
![signup](https://github.com/user-attachments/assets/40951cb4-aedf-4554-a328-134c9d6e293f)
![login](https://github.com/user-attachments/assets/4a94e703-334e-4906-80d7-e79413e392a4)
![profile](https://github.com/user-attachments/assets/6fc4046b-34a3-404f-b333-4e571afc0e40)

### Data

Typing a symptom will return data from endpoint /diagnosis for the APIMedic API, for example:

[
  {
    "Issue": {
      "ID": 181,
      "Name": "Excessive feeling of fear",
      "Accuracy": 90,
      "Icd": "F40;F41",
      "IcdName": "Phobic anxiety disorders;Other anxiety disorders",
      "ProfName": "Anxiety disorder",
      "Ranking": 1
    }
  }
]

could change if I use my own instead*

### Endpoints

GET 

/symptoms
/issues
/diagnosis


### Auth

JWT Auth

## Roadmap

- Create basic client-side, set up pages and components, routes
- Create server-side with routes

- Add functionality to frontend log in/log out/sign up
- Add functionality for symptom checker frontend
- Add functionality for profile page log frontend

- Do backend accompanying functionality ^ 

- Design and create breathing animation for Breathe page
- Fix any styling/linking issues 


## Nice-to-haves

Mood logging
"Journal"
Different calming "breathing patterns" shown with animation to toggle through, ex: equal breathing, 4-7-8, box breathing...
