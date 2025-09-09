const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://myuser:mypassword@cluster0.abcde.mongodb.net/myappdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ Error:", err));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from MongoDB-backed API!" });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on port ${PORT}`));

