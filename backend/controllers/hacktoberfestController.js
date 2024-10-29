const axios = require('axios');

exports.getContributions = async (req, res) => {
  const { username } = req.params;
  try {
    const response = await axios.get(
      `https://gohacktober-backend.onrender.com/api/hacktoberfest-contributions?username=${username}`
    );

    // Return the contributions data to the frontend
    res.json({ success: true, contributions: response.data });
  } catch (error) {
    console.error('Error fetching contributions:', error);
    res.status(500).json({ success: false, error: 'Error fetching contributions' });
  }
};
