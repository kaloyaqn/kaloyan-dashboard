import jwt from 'jsonwebtoken';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Retrieve token from cookies
      const token = req.cookies.token;

      // Verify the JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // If token is valid, user is logged in
      if (decoded) {
        return res.status(200).json({ loggedIn: true });
      } else {
        // Redirect to login page
        res.redirect('/'); //
        return res.status(200).json({ loggedIn: false });
      }
    } catch (error) {
      // If error occurred, user is not logged in
      // Redirect to login page
      res.redirect('/login');      
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};