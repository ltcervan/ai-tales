# `AI Tales`
Unlock creativity through the power of AI.

![AI Tales](https://github.com/soyrvelez/ai-tales/blob/main/ai-tales.png?sanitize=true)

## What is it?

This MERN app allows users to create illustrated stories using generative AI technology.

By leveraging the OpenAI API, AI Tales is able to take user input to create an interactive storytelling experience.

AI Tales allows users to:
* Create an account.
* Create characters with custom traits.
* Create short stories based on user prompts.
* Use DALL-E 3 to generate images inspired by these stories.
* Access their user profile for the app.
* Modify their account details.
* Delete their user account.
* Visualize content they have created.
* Explore content generated by other users.


## Installation Instructions
1. Fork and clone this repository.
2. Run `npm install` from your terminal while inside of the project's directory.
3. Set up a `.env` file and add `NEXT_PUBLIC_SERVER_URL` and set it to the URL of your server.
4. Recommended: Do an initial commit and push to your fork.
5. Run your backend server and run `npm run dev`.

## Navigating The Project
### Data Models
#### Entity Relationship Diagram
![ERD](https://github.com/soyrvelez/lol-champ-recommender/blob/main/resources/lol-recommender-erd.png?sanitize=true)

#### User Model
- **Description:** This model is used to store user information.
- **Attributes:**
  - **id:** Automatically generated by the ODM.
  - **username:** Any username selected by the user.
  - **email:** User's email.
  - **password:** User's password
  - **createdAt:** Automatically generated by the ODM.
  - **updatedAt:** Automatically generated by the ODM.

#### Character Model
- **Description:** This model is used to store character information.
- **Attributes:**
  - **id:** Automatically generated by the ODM.
  - **userId:** id corresponding to an id in the user's table. This tracks which user generated a character.
  - **name:** Character's name.
  - **species:** Users can type in any species including fictional ones.
  - **gender:** Users can type in any gender for their character.
  - **age:** Users can type in any age for their character.
  - **personality:** Users can describe their characters personality.
  - **favorite hobby:** Users can give their characters a hobby that will be represented in their scenes.
  - **createdAt:** Automatically generated by the ODM.
  - **updatedAt:** Automatically generated by the ODM.

  #### Scene Model
- **Description:** This model is used to store user generated scenes.
- **Attributes:**
  - **id:** Automatically generated by the ODM.
  - **character:** Character associated with the scene.
  - **prompt:** User input used to generate the short story and illustration to make up the scene.
  - **scene image URL:** URL provided by OpenAI's API for the scene's image.
  - **scene caption:** Caption provided by OpenAI's API as a short story for the scene.
  - **stats:** A collection of common social media engagement metrics: likes, comments, views.
  - **createdAt:** Automatically generated by the ODM.
  - **updatedAt:** Automatically generated by the ODM.

### Pages

#### Login
![Login Page](https://github.com/soyrvelez/ai-tales/blob/main/resources/login.png?sanitize=true)

The app's user journey begins in a login page where returning users can login or for new users to head to our signup.

#### Signup
![Signup Page](https://github.com/soyrvelez/ai-tales/blob/main/resources/sign-up.png?sanitize=true)

The signup page captures a user's information before creating an account for them. Once the user submits the signup form, the following validations occur:
- App checks to see if there are other users using the same email before creating the account.
- Password is encrypted before it's stored in the database.

#### Profile
![User Profile Page](https://github.com/soyrvelez/ai-tales/blob/main/resources/profile.png?sanitize=true)

This page displays each user's information, provides them with the tools to edit or delete their account.

#### Character Gallery
![Character Gallery](https://github.com/soyrvelez/ai-tales/blob/main/resources/charactergallery.png?sanitize=true)

This page displays all characters created by the user.

#### Explorer Page
![Explorer Page](https://github.com/soyrvelez/ai-tales/blob/main/resources/explorer.png?sanitize=true)

Social media - like feed that allows users to explore content generated by other users.
