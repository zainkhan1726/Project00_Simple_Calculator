### Project Description: CLI-Based Simple Calculator

#### Overview

The CLI-Based Simple Calculator is a command-line interface application built using TypeScript and Node.js. This project allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division directly from their terminal. The calculator is designed to be simple and user-friendly, making it an excellent example of how to create CLI applications with TypeScript and Node.js.

#### Features

- **Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **User-Friendly Interface**: Easy-to-navigate text-based menu for selecting operations.
- **Type Safety**: Leveraging TypeScript for enhanced type safety and better development experience.
- **Modular Design**: Clear separation of logic and user interface components.


#### Implementation Details

- **TypeScript**: Provides type safety and modern JavaScript features.
- **Node.js**: Runtime environment for executing JavaScript code outside the browser.
- **npm**: Package manager used to manage dependencies and scripts.

#### How It Works

1. **User Interaction**: The user interacts with the calculator via the terminal, selecting operations from a menu.
2. **Input Handling**: The program prompts the user to enter two numbers.
3. **Perform Calculation**: Depending on the user's choice, the calculator performs the selected operation using methods defined in the `Calculator` class.
4. **Output Result**: The result of the operation is displayed, and the user can choose to perform another calculation.

#### Installation and Usage

1. **Clone the Repository**:

    ```cmd
    git clone https://github.com/zainkhan1726/Project00_Simple_Calculator.git
    ```

2. **Install Dependencies**:

    ```sh
    npm i zain-khan-179-simple-calculator
    ```

3. **Run the Calculator using npx tool**:

    ```sh
    npx zain-khan-179-simple-calculator
    ```

#### Example Interaction

```
Simple Calculator CLI
======================
? Enter first number 5
? Enter second number 10
? select one of the opereator to perform operation Addition
15
? Enter to continue or  q to exit.
```


#### Conclusion

The CLI-Based Simple Calculator project demonstrates how to build a functional command-line application using TypeScript and Node.js. It highlights the use of TypeScript for type safety and modular code organization, making it a great starting point for developers looking to create CLI tools or learn TypeScript and Node.js.