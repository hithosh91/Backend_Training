const express = require("express");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, world!\n");
// });
const app = express();

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// fs.readFile("Hello.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data, "dataa");
// });

// // Creating a new directory
// fs.mkdir("Hithosh.txt", { recursive: true }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Directory has been created!");
// });

// const content = "Some content!";

// fs.writeFile("Hithosh.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// fs.writeFile("HIthosh/Hithosh.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// const data = "This is a streamed response.";
// res.writeHead(200, { "Content-Type": "text/plain" });

// // Send data in chunks
// for (let i = 0; i < data.length; i += 10) {
//   const chunk = data.slice(i, i + 10);
//   res.write(chunk);
// }

// res.end();

// server.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });*/
// /*
// const fs = require("fs");

// // Create a readable stream
// const readableStream = fs.createReadStream("Hello.txt", {
//   encoding: "utf8",
//   highWaterMark: 2024, // 16KB chunk size
// });

// // Handle the 'data' event
// readableStream.on("data", (chunk) => {
//   console.log("Received chunk:", chunk);
// });

// // Handle the 'end' event
// readableStream.on("end", () => {
//   console.log("Finished reading file.");
// });

// // Handle the 'error' event
// readableStream.on("error", (err) => {
//   console.error("Error reading file:", err);
// });

// const fs = require('fs');

// // Define the path to your file
// const filePath = 'example.txt';

// // Read the file asynchronously
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//     console.log('File content:', data);
// });

// const express = require("express");
// const fs = require("fs");
// let newData;
// let data = fs.readFile("Hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   newData = data;
//   console.log(newData);
// });

// const app = express();
// app.get("/home", (req, res) => {
//   res.send(newData);
// });
// app.listen(3000, () => {
//   console.log("server is running");
// });
// */
// // path module

// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// /*const directoryPath = path.join(__dirname, "Notes");
// console.log(directoryPath);
// app.get("/files", (req, res) => {
//   // Replace 'your-directory' with the actual directory name

//   fs.readdir(directoryPath, (err, files) => {
//     /*  if (err) {
//       return res.status(500).send("Unable to scan directory: " + err);
//     }
//     res.send(files);
//   });
// */

// app.get("/files", (req, res) => {
//   const filename = req.params.filename;
//   console.log(filename, "filename");
//   const filePath = path.join(directoryPath, filename);
//   console.log(filePath, "filepath");

//   fs.readdir(directoryPath, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Unable to read file: " + err);
//     }
//     res.send(data);
//     console.log(data, "First");
//   });
// });
// app.listen(5000, () => {
//   console.log("server is runing");
// });

// //how to pass data from one file to and write anoter
// let newdata;
// let data = fs.readFile("Hello.txt", "utf8", (erro, data) => {
//   if (erro) {
//     console.log("error");
//   } else {
//     console.log("data succesfully add");
//     newdata = data;
//     console.log(newdata);
//   }
// });

// console.log(newdata);

// fs.writeFile("example.txt", "newdata", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// });

// //get method send data in chunks:

// //how to pass data send
// app.get("/stream", (req, res) => {
//   fs.readFile("Hello.txt", (err, data) => {
//     res.send(data);
//   });
// });

// app.get("/streams", (req, res) => {
//   const directoryPath = path.join(__dirname, "Notes");
//   const filePath = path.join(directoryPath, "Data.txt");
//   console.log(filePath, "filePath");
//   const stream = fs.createReadStream(`${filePath}`, "utf8");
//   stream.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   stream.on("end", () => res.end());
// });

// //streams

// const readstream = fs.createReadStream("example.txt");

// readstream.on("data", (chunk) => {
//   console.log(".....................");
//   console.log(chunk);
// });
// readstream.on("open", () => {
//   console.log("Stream opened...");
// });

// readstream.on("end", () => {
//   console.log("Stream Closed...");
// });

// //get method send data in chunks:

// // Function to demonstrate reading from a file and writing to another file using streams
// function readFileAndWriteToFile() {
//   try {
//     // Create a readable stream from the source file
//     const readableStream = fs.createReadStream("Notes/Data..txt");

//     // Create a writable stream to the destination file
//     const writableStream = fs.createWriteStream("Notes/First.txt");

//     // Pipe the readable stream to the writable stream
//     // This automatically handles the data in chunks
//     readableStream.pipe(writableStream);

//     // Listen for the 'finish' event to know when the data transfer is complete
//     writableStream.on("end", () => {
//       console.log("Data has been  sent");
//     });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// // Call the function to start the operation
// readFileAndWriteToFile();

///buffer
// Creating a buffer
const buffer = Buffer.alloc(10); // Creates a buffer of 10 bytes, filled with zeros
const bufferFromData = Buffer.from("Hitsoh Kota"); // Creates a buffer from a string

// Writing to a buffer
buffer.write("Hello");

// Reading from a buffer
const str = buffer.toString("utf8", 0, 10); // 'Hello'
const strs = bufferFromData.toString("utf8", 0, 5);
console.log(strs, "bufferFromData");
console.log(str, "str");
// Buffer concatenation
const buffer1 = Buffer.from("Hello");
const buffer2 = Buffer.from("World");
const combinedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(combinedBuffer.toString()); // 'HelloWorld
