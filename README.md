# CSVParser

The program parses the CSV file and then validates the data in accordance with the config.ts file.
All .ts,.txt и csv files are in the src directory

To run validation, enter in cli: 
tsc src/app.ts | node src/app.js

Validation result:

Output of invalid data to the console (also lso invalid data is written to InvalidData.txt)

![Result in console](https://github.com/ShimanchikIra/CSVParser/blob/master/resultImg/resultCSVParser.PNG)

Output of valid data to the ValidData.txt

![Result in txt file (successfull)](https://github.com/ShimanchikIra/CSVParser/blob/master/resultImg/CSVParserResultTxt.PNG)
 
 
Running unit tests:

npm run test
npm run testWithCoverage


