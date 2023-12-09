const express = require('express');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/subscribe', (req, res) => {
  // Process the subscription data
  const email = req.body.email;

  // Create an Excel sheet or add to an existing one
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([{ Email: email }]);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Subscribers');
  const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });

  // Save or send the Excel file as needed
  // For simplicity, let's just send it as a response in this example
  res.setHeader('Content-Disposition', 'attachment; filename=subscribers.xlsx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.send(excelBuffer);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
