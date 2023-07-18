---
sidebar_position: 5
---

# Running the App on an iOS Simulator

- In the previous video, we learned how to run our Expo app on a physical device. Now, let's explore how to run the app on an iOS simulator.

- `Please note that running iOS simulators is only possible on a Mac and not on Windows or Linux systems`.

### Steps to Run the App on an iOS Simulator

1. Navigate to the project folder in the terminal and execute the command `npm start` .

2. Download Xcode from the App Store and grant the necessary permissions it requests.

   - Note: Xcode may already be downloaded if you have a Mac.

3. In the terminal, find out the shortcut for opening the iOS simulator. It is `I` , so press `I` on your keyboard.

   - Within a few seconds, the iPhone simulator should open and prompt you to open the app in Expo Go.

4. Grant the necessary permissions and you will see the Expo app running on the simulator.

5. Try changing the text to "Hello iOS Simulator" in `app.js` .

   - Save the file and you will see the change reflecting in the simulator.

6. By default, the iPhone SE (third generation) simulator is open. If you prefer to use a different device, go to File > Open Simulator and select a device (e.g., iPhone 14 Pro S).

7. Go back to VS Code, with focus in the terminal, and press `I` once again.

   - This will open the application in Expo Go on the selected device, and you will have your app up and running.

### Next Steps

- Join me in the next video where we will learn how to run the application on an Android emulator.
