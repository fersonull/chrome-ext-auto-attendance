# PMFTCI Auto-Attendance Extension

This is a simple browser extension that automates the login and attendance process for the PMFTCI College website.

## How it Works

1.  **Auto-Login:** When you visit the login page, the extension automatically fills in your credentials (`email@gmail.com` / `bagon123`) and clicks the login button.
2.  **Auto-Attend:** After login, the script runs on the "My Subjects" page. It continuously checks for a button with the text "Available".
3.  **Auto-Click:** As soon as an "Available" button appears, the script clicks it to mark your attendance and then stops running.

---

## Installation

This extension is not on the Chrome Web Store and must be installed manually.

### On PC/Laptop (Chrome, Edge, Brave)

You must load the extension as an "unpacked" folder.

1.  **Download the ZIP:** Get the `.zip` file of this project onto your computer.
2.  **Unzip the File:** Right-click the `.zip` file and select "Extract All..." or "Unzip". This will create a new **folder** (e.g., `my-extension-folder`).
3.  **Open Browser:** Open Chrome or a similar browser (like Edge, Brave, or Opera).
4.  **Go to Extensions:** Type `chrome://extensions` in your address bar and press **Enter**.
5.  **Enable Developer Mode:** In the top-right corner, turn on the **"Developer mode"** toggle.
6.  **Load the Extension:**
    * Click the **"Load unpacked"** button that appeared on the top-left.
    * A file dialog will open. Select the **folder** you just unzipped (e.g., `my-extension-folder`). **Do not** select the `.zip` file itself.
7.  The extension is now installed. You should see its icon in your toolbar.

### On Android

You cannot use the standard Chrome browser. You must use a browser that supports Chrome extensions, like **Kiwi Browser**.

1.  **Install Kiwi:** Go to the Google Play Store and install **Kiwi Browser**.
2.  **Download the ZIP:** Download the extension's `.zip` file directly to your phone.
3.  **Open Kiwi:** Launch the Kiwi Browser.
4.  **Go to Extensions:** Tap the three-dot menu (⋮) in the top-right, then select **"Extensions"**.
5.  **Enable Developer Mode:** Toggle the **"Developer mode"** switch on.
6.  **Install from ZIP:**
    * Tap the **"+ (from .zip / .crx / .user.js)"** button.
    * Your phone's file manager will open. Find and select the `.zip` file you downloaded.
7.  The extension will be installed and is now active in Kiwi.

### On iOS (Experimental)

You cannot use Chrome or Safari. You must use a browser that attempts to support desktop extensions, like **Orion Browser**.

**Disclaimer:** Support for Chrome extensions on iOS is limited. This may not work perfectly.

1.  **Install Orion:** Go to the Apple App Store and install **Orion Browser**.
2.  **Download the ZIP:** Download the extension's `.zip` file to your phone (it will save to your "Files" app).
3.  **Open Orion:** Launch the Orion Browser.
4.  **Enable Extensions:** Tap the three-dot menu (⋯) in the bottom-right and go to **"Settings"**.
    * Select **"Extensions"**.
    * Make sure the "Chrome" toggle is **on**.
5.  **Install from File:**
    * Tap the three-dot menu (⋯) again.
    * Select **"Install Extension"**.
    * Your "Files" app will open. Find and select the `.zip` file.
6.  The extension will *try* to install. If successful, it will be active.
