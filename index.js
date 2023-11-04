const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const port = 3000;


app.get("/createTextFile", (req, res) => {
  const currentTime = new Date().toLocaleString()
  const currentDateTime = new Date().toISOString().replace(/[-T:]/g, "").split(".")[0]
  const fileName = `${currentDateTime.slice(0,8)}-${currentDateTime.slice(8)}.txt`
  const fileContent = `Current Timestamp: ${currentTime}`
  const filePath = path.join(__dirname, "textFiles", fileName)

 
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error("Error creating the text file:", err)
      res.status(500).send("Error creating the text file")
    } else {
      console.log(`Text file created: ${filePath}`)
      res.status(200).send(`Text file created: ${filePath}`)
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
