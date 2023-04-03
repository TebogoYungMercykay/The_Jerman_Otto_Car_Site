# COS216 Practical 3 - ReadME file.

**Names:** Selepe Sello
**Student Number:** XXXXXXXX

---

## These are the Default Users for the Jerman Otto Cars Page:

- Default User 1:
  - Name: Test
  - Surname: User
  - Email: testuser@tuks.co.za
  - Password: @TestUser#564
- Default User 2:
  - Name: John
  - Surname: Doe
  - Email: johndoe3@gmail.com
  - Password: tEst@us5e#hd

---

## Requirements Before Running the Codes

- Import the **cars** table using the carsdb database dumb.
- Create another table called **users** with the following fields: "id", "name", "surname", "email", "password", "API_key", "salt".
- The **id** field should be **Automatically** generated, Using **AUTO_INCREMENT=1**
- #### If You aren't Running the codes on wheatley:

  - At least Have Xampp installed
  - Copy the souce code to the httdoc directory
  - Run Apache and MySQL server
  - Use this URL to access the codes: "http://localhost/path/to/code/login.php"

---

## How the Sign Up and Login Works:

- A User must have an account to view the Cars for practical 3, and all the other pages.
- If a user doesn't have an account they can only access the signup, login and launch pages.
- A user can create an account and login without complications, I implemented The Sign Up and Login.
- When a user submits the signup form, the 'required' from HTML will make sure all fields are filled,
- Then JavaScript will be loaded, And it will do signup validation on the client side.
- Thereafter, If javascript is done, the form will be sent to validate-signup.php via POST.
- This is to make sure the request is secured, Then PHP will do the validation on the Server side.
- Once all the validation is done, the user will be added to the 'users' database table.
- **Sign Up Instructions:**
  - All Fields SHOULD Not Be Empty
  - The NAME and SURNAME fields SHOULD contain only Characters
  - The EMAIL SHOULD contain '@gmail.com' or '@tuks.co.za', and AT LEAST a Character on the LEFT.
  - Make sure the EMAIL doesn't contain Illegal Characters
  - Make sure the PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters.
  - Make sure the PASSWORD doesn't contain Illegal Characters
  - The PASSWORD and CONFIRM PASSWORD SHOULD match
  - ##### This Is Implemented to make sure the Password is strong and it cannot be guessed or generated easily by Attackers.

---

## How The Encryption Algorithm Works

- Generate a RANDOM int, SALT value between [2000000000, 2147483646].
- Encrypt PASSWORD using the random number as the salt with "sha256" and hash_pbkdf2 method, hash_pbkdf2("sha256", p, s, i, b);
- Using 1000 iterations for the hash_pbkdf2 method, and a HASH length of 32 BYTES, VARCHAR(128).
- Finally i Concatenate and encode the SALT and HASH to base 64, base64_encode().

---

## API Key

- The API key is a random string of length 20.
- It Contains these Characters: 0123456789abcdefghijklmnopqrstuvwxyz/*-+%@&^$#()_+=-{}[]|\';:"?><,./ABCDEFGHIJKLMNOPQRSTUVWXYZ
- The Key is then Displayed to the User using an alert.

---

---
