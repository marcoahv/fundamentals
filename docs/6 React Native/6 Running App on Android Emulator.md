---
sidebar_position: 6
---

# Running the App on an Android Emulator

- In this video, we will explore how to run our application on an Android emulator.

### Steps to Run the App on an Android Emulator

1. Visit `developer.android.com/studio` and download Android Studio.

   - It is available for Windows, Mac OS, and Linux.

2. Install Android Studio.

   - Launch the setup Wizard and click "Next" on the welcome screen.

   - Choose the standard setup type and click "Next".

   - Proceed through the setup by selecting the desired color theme and accepting the terms.

   - Finally, click "Finish" on the final review screen.

   - The installation process may take a few minutes.

3. Once Android Studio is installed, you should see a different welcome screen.

   - Click on "More Actions" and select "Virtual Device Manager".

   - By default, there will be a Pixel 3 device available. However, you can create a new device if you wish to test on different devices.

   - Click on the "Create Device" button to create a new virtual device.

   - Choose a device that you wish to test on. For example, select the Pixel 4 device where the Play Store icon is displayed.

   - Select the Android API level. For example, select the latest API level (API 34).

   - Provide a name for your virtual device (e.g., "Code Evolution Test") and click "Finish" on the verify configuration screen.

   - This will create a Pixel 4 virtual device in Android Studio.

4. Run the device by clicking on the play button.

5. With the Android emulator running in the background, return to VS Code.

   - Press "A" to run our application on the opened device.

   - This will install Expo Go on the virtual device and launch your application.

   - Within a few seconds, you will see the Expo app running on the virtual device.

6. Try changing the text in `app.js` to "Hello from Android".

   - You will notice the text reflecting right away.

### Conclusion and Next Steps

- These are the different methods for running an Expo app on your physical device, an iOS simulator, or an Android emulator.

- Throughout the series, we will primarily focus on running our app on the iOS simulator and Android emulator.

- However, if you prefer, you can also run it on your own physical device.

- In the next section, let's take a look at the core components React Native offers to build native mobile applications.

- If you're enjoying the content, please leave a like and subscribe to the channel. I'll see you in the next video.
