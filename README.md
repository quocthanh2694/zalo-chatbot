## Zalo chatbot app tutoria demo
Tutotial how to make chatbot with zalo

### Step 1
At root project run `npm install`

### Step 2
- Register OA **STORE** Zalo account at [RegisterOfficalAccount](https://oa.zalo.me/manage/oa?option=create)
- Setting for OA [Account Manage OA Account](https://developers.zalo.me/oa/openapi/manage/oas). 
-- Enable **Registration of 3rd Party** feature. And choose **Edit**.
-- Setting webhook in category "Server Settings" below the section  "Developer information" put **URL Callback** : `[Link address you deployed]/webhook`
- After that, put your **oaid** and **secretkey** in index.js file at this code: 
```sh
var zaConfig = {
  oaid: 'your oaid', // oaid here
  secretkey: 'your secret key' // secretkey here
}
```
### Step 3
- This below code in index.js just for test send message to an user if you have an userId.
- You can comment this code if you don't want to test send message or you don't have userId `var userId = 'user id'; // just for test`.
```sh
 ZOAClient.api('sendmessage/text', 'POST', { uid: userId, message: 'Test message!' + date }, function (response) {
    console.log(response);
  });
```
### Step 4
- run `npm start`
- open web at `127.0.0.1:3000` and you will see "Hello world" on you screen

## Step 5
- Deploy to server: you can choose any server to deploy your nodejs project.
- After deployed you will have `ip address` or `link` and put to `[Link address you deployed]/webhook` in **Step 2**.

## Enjoy.

## Reference: [Zalo For Developer](developers.zalo.me)

