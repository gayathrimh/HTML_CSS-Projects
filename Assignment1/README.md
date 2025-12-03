### Calendar 2026
This is simple html web page that displays calendar for the year 2026 This project has 12 different files corresponding to each one.

### Technologies used
-HTML:Markup structure
-CSS:Provide styling

### Prerequisites
-Live server extension should be enable

### Steps
1. Create a folder called HTML_CSS PROJECTS
2. Create subfolder called Assignment1
3. Create file in Assignment called 01.html
4. Add following code in 01.html
    ```
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Calendar 2026</title>
            </head>
           <body>
             <div>
                 <h1>January 2026</h1>
                 <table>
                  <tr>
                     <th>Sun</th>
                     <th>Mon</th>
                     <th>Tue</th>
                     <th>Wed</th>
                     <th>Thu</th>
                     <th>Fri</th>
                     <th>Sat</th>
                 </tr>
                 <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                 </tr>
                 <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                 </tr>
                 <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                 </tr>
                 <tr>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
               </tr>
           </table>
    </div>
    </body>
    </html>
     ```
5. Add corresponding files for February 2026 to December 2026 (02.html-12.html)
6. Copy code from Step 4 and add it to all new files created 
7. Edit the table contents as per the Calendar of 2026
8. Add Previous and Next to each of the html files. The code is as follows:
    ```
        <div>
        <a>Previous</a>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a>Next</a>
        </div>
    ```
    **
    The above piece of code should be added between </div>  of the table and </body>
    **

9. Linking all the pages from 1 to 12. We need to add href attribute for <a> tag as follows:
    ```
    <div>
        <a>Previous</a>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="02.html">Next</a>
    </div>
    ```

10. Repeat the linking of pages 2-12.
    - 02.html file should have 01.html for previous and 03.html for next
    - 03.html file should have 02.html for previous and 04.html for next
    - 04.html file should have 03.html for previous and 05.html for next
    - 05.html file should have 04.html for previous and 06.html for next
    - 06.html file should have 05.html for previous and 07.html for next
    - 07.html file should have 06.html for previous and 08.html for next
    - 08.html file should have 07.html for previous and 09.html for next
    - 09.html file should have 08.html for previous and 10.html for next
    - 10.html file should have 09.html for previous and 11.html for next
    - 11.html file should have 10.html for previous and 12.html for next
    - 12.html file should have 11.html for previous