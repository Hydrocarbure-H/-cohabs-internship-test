const app = require('./app');
const { port } = require('./config/dotenv');

// Start the app
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});