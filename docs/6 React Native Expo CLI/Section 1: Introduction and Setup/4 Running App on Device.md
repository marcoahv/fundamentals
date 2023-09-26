---
sidebar_position: 4
---

# Running the App on a Device

- Now that we have learned how to generate a new Expo project and gained an understanding of the project's different files and folders, it's time to run our application.

- There are several methods available for running the app on different devices:

  - iOS device

  - Android device

  - iOS simulator

  - Android emulator

- `We will focus on running the app on a real device.`

- I will be demonstrating the process on an iPhone, but I will also provide instructions for running the app on an Android device.

### Steps to Run the App on a Real Device

1. Navigate to the project folder and run the command `npm start` .
   - This will generate a QR code which we will use shortly.
2. Download the Expo Go app on your device.
   - You can find it on the App Store for iPhones or the Play Store for Android devices.
3. `Ensure that both your computer and the mobile device are connected to the same Wi-Fi network.`

4. On your iPhone, open the Camera app and scan the QR code displayed in the terminal.
   - `If you have an Android device, use the QR code scanner within the Expo Go app.`
5. After a few seconds, you should see the Hello World app running on your device.
   - The device screen may be mirrored on your computer screen.
6. `To test the app`, go back to `app.js` and change the text to "Hello World".
   - Save the file, and you will notice the change reflected on your device almost instantly.
