exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userBoard = (req, res) => {
    // find all Customer information from 
    res.status(200).send("User Content.");
};
  
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

exports.superadminBoard = (req, res) => {
    res.status(200).send("SuperAdmin Content.");
};