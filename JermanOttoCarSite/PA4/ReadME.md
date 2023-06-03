# PA4 - ReadME file.

`Names`: Selepe Sello
`Student Number`: XXXXXXXX

---

# SECTION 1

## These are the Default Users for the Jerman Otto Cars Page:

- ### `Default User 1`:

  - `Name`: Test
  - `Surname`: User
  - `Email`: testuser@tuks.co.za
  - `Password`: @TestUser#564
  - `API_key`: a9198b68355f78830054c31a39916b7f
- ### `Default User 2`:

  - `Name`: John
  - `Surname`: Doe
  - `Email`: johndoe3@gmail.com
  - `Password`: tEst@us5e#hd
  - `API_key`: K9yW8cGnE3qTfR7xV2sZ6bN1mJ4jL5p

---

# SECTION 2

- ##### FOR THE EXAMPLE REQUETS BELLOW, NB:=
- The `studentnum` field is not being tested nor used on the API, It us just here for `fun/vibes`.
- You may use the `API_keys` on the `database` to make requests to the REST API. They are included in `SECTION 1`
- ##### Example 1: POST Request by User 1:

  ```json
  {
    "studentnum":"u12345678",
    "type":"GetAllCars",
    "limit":2,
    "apikey":"a9198b68355f78830054c31a39916b7f",
    "search":{
        "make":"BMW",
        "body_type":"Coupe"
    },
    "fuzzy": true,
    "sort":"id_trim",
    "order": "ASC",
    "return":[
        "id_trim","max_speed_km_per_h","body_type","engine_type","transmission","image"
    ]
  }
  ```
- ##### Response form API

  ```json
  {
    "status": "success",
    "timestamp": 1680911562,
    "data": [
        {
            "id_trim": "4417",
            "max_speed_km_per_h": "250",
            "body_type": "Coupe",
            "engine_type": "Gasoline",
            "transmission": "Manual",
            "image": "https://wheatley.cs.up.ac.za/api/images/models/bmw_1m.jpg",
            "image_brand": "https://wheatley.cs.up.ac.za/api/images/brands/bmw.png"
        },
        {
            "id_trim": "4464",
            "max_speed_km_per_h": "250",
            "body_type": "Coupe",
            "engine_type": "Gasoline",
            "transmission": "Automatic",
            "image": "https://wheatley.cs.up.ac.za/api/images/models/bmw_2 series.jpg",
            "image_brand": "https://wheatley.cs.up.ac.za/api/images/brands/bmw.png"
        }
    ]
  }
  ```
- ##### Example 2: POST Request by User 2:

  ```json
  {
    "limit":2,
    "apikey":"K9yW8cGnE3qTfR7xV2sZ6bN1mJ4jL5p",
    "search":{
        "make":"BMW",
        "body_type":"Coupe"
    },
    "fuzzy": true,
    "sort":"id_trim",
    "order": "ASC",
    "return":[
        "id_trim","max_speed_km_per_h","body_type","engine_type","transmission","image"
    ]
  }
  ```
- ##### Response form API

  ```json
  {
    "status": "error",
    "timestamp": 1680912205,
    "data": "Error. Post parameters are Missing"
  }
  ```
- ### Fuzzy Search Example 1: POST Request by User 1:

  ```json
  {
    "studentnum":"u12345678",
    "type":"GetAllCars",
    "limit":2,
    "apikey":"a9198b68355f78830054c31a39916b7f",
    "search":{
        "make":"BMW",
        "body_type":"Coub"
    },
    "fuzzy": true,
    "sort":"id_trim",
    "order": "ASC",
    "return":[
        "id_trim","max_speed_km_per_h","body_type","engine_type","transmission","image"
    ]
  }
  ```
- ##### Response form API

  ```json
  {
    "status": "success",
    "timestamp": 1680959125,
    "data": [
        {
            "id_trim": "404",
            "max_speed_km_per_h": "250",
            "body_type": "Coupe",
            "engine_type": "Gasoline",
            "transmission": "Automatic",
            "image": "https://wheatley.cs.up.ac.za/api/images/models/alfa romeo_4c.jpg",
            "image_brand": "https://wheatley.cs.up.ac.za/api/images/brands/alfa-romeo.png"
        },
        {
            "id_trim": "762",
            "max_speed_km_per_h": "250",
            "body_type": "Coupe",
            "engine_type": "Gasoline",
            "transmission": "Automatic",
            "image": "https://wheatley.cs.up.ac.za/api/images/models/alpine_a110.jpg",
            "image_brand": "https://wheatley.cs.up.ac.za/api/images/brands/alpine.png"
        }
    ]
  }
  ```

---

## Basic Setup Before Running/Interpreting the Codes

- Import the `cars` table using the carsdb database dumb.
- Import the `users` table using the usersdb database dumb, or alternatively
- Create another table called `users` with the following fields: "id", "name", "surname", "email", "password", "API_key", "salt".
- The `id` field should be `Automatically` generated, Using `AUTO_INCREMENT=1`
- #### If You aren't Running the codes on wheatley:

  - At least Have Xampp installed
  - Copy the souce code to the httdoc directory
  - Run `Apache` and `MySQL` server
  - url:  `"http://localhost/path/to/code/login.php"`
  - method: `POST` - (HTTP method)
- #### else

  - url: `"wheatley.cs.up.ac.za/uXXXXXXXX/api.php"`
  - method: `POST` - (HTTP method)

---

## How the Sign Up and Login Works:

- A User must have an account to view the Cars for practical 3, and all the other page.
- If a `user` doesn't have an account they can only access the `signup`, `login` and `launch` pages.
- So the `user` will have to `create an account` and `login`.
- When a `user` submits the signup form, the `'required'` from HTML will make sure all fields are filled,
- Then `JavaScript` will be loaded, And it will do signup validation on the `client side`.
- Thereafter, If `javascript` is done, the form will be sent to `validate-signup.php` via `POST`.
- This is to make sure the request is secured, Then `PHP` will do the validation on the `server side`.
- Once all the validation is done, the user will be added to the 'users' database table, meaning they will have an account with `Jerman Otto`.
- `Sign Up Instructions:`
  - All Fields SHOULD not be `Empty`
  - The `NAME` and `SURNAME` fields SHOULD contain only Characters
  - The `EMAIL` SHOULD contain `@gmail.com` or `@tuks.co.za`, and AT LEAST a Character on the LEFT.
  - Make sure the EMAIL doesn't contain `Illegal Characters`
  - Make sure the PASSWORD is at least `8 Characters` long and contains a `Number`, Contains a `Special Character`, `Uppercase` and `Lowercase` letters.
  - Make sure the PASSWORD doesn't contain Illegal Characters
  - The PASSWORD and CONFIRM PASSWORD SHOULD `match`
  - ##### This Is Implemented to make sure the Password is strong and it cannot be guessed or generated easily by Attackers using `Brute Force Attacks` and stuff.

---

## How My Encryption Algorithm Works

- Generate a `RANDOM` int, SALT value between `[2000000000, 2147483646]`.
- Encrypt PASSWORD using the random number as the `salt` with `sha256` and `hash_pbkdf2` method, `hash_pbkdf2("sha256", p, s, i, b)`;
- Using 1000 iterations for the hash_pbkdf2 method, and a HASH length of 32 BYTES, So that it can fit well into a column of this `size` => `VARCHAR(128)`.
- Finally i `Concatenate` the `SALT` and `HASH` and the encode the resulting string to base 64, using `base64_encode()`.

---

## API Key

- The API key is a random string of `length=32`.
- It Contains these `AlphaNumeric` Characters: `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
- The Key is then Displayed to the User using a <p> tag in every file right after the Heading.

---

---
