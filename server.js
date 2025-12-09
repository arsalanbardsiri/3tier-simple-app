const express = require('express');
const app = express();
const port = 3000;

// Route for /users/12
app.get('/users/12', (req, res) => {
    const user = {
        id: 12,
        firstName: "John",
        lastName: "Smith",
        address: {
            streetAddress: "21 2nd Street",
            city: "New York",
            state: "NY",
            postalCode: 10021
        },
        phoneNumbers: ["212 555-1234", "646 555-4567"]
    };

    res.json(user);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
