
// Sequelize query function wrapper to handle try-catch and response return
async function makeQueryWithCatch(res, query){
  try {
    // Await query call
    const rows = await query;
  
    // Return queried rows
    res.status(200).json(rows);
  }
  // Return error on error
  catch (error){
    res.status(500).json(error);
  } 
}

module.exports = { makeQueryWithCatch }