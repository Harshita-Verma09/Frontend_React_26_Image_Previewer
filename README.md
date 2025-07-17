# File Upload Preview Component

This is a React component that allows users to upload an image and preview it before submission.

## Features

-   Allows users to select an image file from their device.
-   Displays a preview of the selected image.
-   Cleans up object URLs to prevent memory leaks.
-   Uses Tailwind CSS for styling.
-   Provides a "Submit" button to simulate image submission.

## Prerequisites


-   Node.js and npm (Node Package Manager) installed on your machine.
-   React.js installed.
-   Tailwind CSS installed and configured in your project.

## Installation

1.  Clone the repository or copy the `FileUploadPreview.js` component into your React project.

2.  If you don't have Tailwind CSS set up, install and configure it:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Follow the Tailwind CSS documentation to configure your `tailwind.config.js` and `postcss.config.js`.

3.  Ensure your `index.css` or the file where you include your global styles includes the Tailwind directives:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

1.  Import the `FileUploadPreview` component into your React application:

    ```javascript
    import FileUploadPreview from "./FileUploadPreview";
    ```

2.  Use the component in your JSX:

    ```javascript
    function App() {
      return (
        <div>
          <FileUploadPreview />
        </div>
      );
    }

    export default App;
    ```

3.  Run your React application.

    ```bash
    npm start
    ```

4.  The component will display an input field for selecting an image and a "Submit" button.

5.  When an image is selected, it will be displayed in a circular preview.

6.  Clicking the "Submit" button will display an alert message.

## File Structure

-   `FileUploadPreview.js`: The React component for file upload and preview.

## Dependencies

-   `react`: React library.
-   `tailwindcss`: CSS framework for styling.

## Functionality

-   `useState` is used to manage the `image` state, which holds the object URL of the selected image.
-   `handleFileChange` function is triggered when a file is selected. It creates an object URL from the selected file and sets the `image` state.
-   `useEffect` is used to clean up the object URL when the component unmounts or the `image` state changes, preventing memory leaks.
-   Tailwind CSS classes are used to style the component.

## Notes

-   The "Submit" button currently only displays an alert message. You can modify the `onClick` handler to implement actual image submission logic.
-   The component accepts only image files (`accept="image/*"`).
-   The image preview is displayed in a circular frame. You can customize the styling using Tailwind CSS classes.
-   Make sure your project has tailwind configured correctly.
