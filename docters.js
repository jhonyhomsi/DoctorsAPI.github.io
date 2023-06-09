const express = require('express');
const XLSX = require('xlsx');
const app = express();
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {


app.use(express.urlencoded({ extended: true }));

// Requiring the module
const reader = require('xlsx')

// Reading our test file
const file = reader.readFile('doctors.xlsx')

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
	data.push(res)
})
}

// Printing data
console.log(data)
  res.json(data);
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
})