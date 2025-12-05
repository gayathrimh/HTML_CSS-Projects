### EMI Calculator 
This is simple html,javascript web page that enables us to calculate the EMI based on the input values of Principal Amount, Rate of Interest and the Loan Term. This project has 2 different files:
1. 3a_noslider.html - This file represents the basic structure of EMI Calculator without the use of slider.
2. 3b_slider.html - This file represents the basic structure of EMI Calculator with the use of slider.

### Technologies used
- HTML: Markup structure
- CSS: Provides styling
- Javascript: Provides logic

### Prerequisites
- Live server extension should be enable

### Steps
1. Create a subfolder called Assignment3 in HTML_CSS PROJECTS
2. Create a file 3a_noslider.html and add following code:
    ```
    <!DOCTYPE html>
     <html>
      <head>
        <title>
            Loan Calculator
        </title>
      </head>
      <body>
        <h1>EMI Loan Calculator</h1>
        <label for="loan amount">Loan Amount</label>
        <input type="text" id="loan amount" name="loan amount"><br>
        <label for="rate of interest">Rate of Interest</label>
        <input type="text" id="rate of interest" name="rate of interest"><br>
        <label for="loan term" id="loan term">Loan Term</label>
        <input type="text" id="loan term" name="loan term"><br>
        <button type="button" onclick="alert('calculate')">Calculate</button>
        <button type="button" onclick="alert('clear')">Clear</button>
      </body>
    </html>
    ```
