const fs = require("fs");

const fileName = "test.txt";

// CREATE
console.log("Creating file...");

fs.writeFile(fileName, "Hello Node.js", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File Created");

    // READ
    console.log("Reading file...");

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log(data);

        // UPDATE
        console.log("Updating file...");

        fs.appendFile(fileName, "\nLearning FS Module", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File Updated");

            // READ AGAIN
            fs.readFile(fileName, "utf8", (err, data) => {

                if (err) {
                    console.log("Error reading file:", err);
                    return;
                }

                console.log(data);

                // DELETE
                console.log("Deleting file...");

                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});