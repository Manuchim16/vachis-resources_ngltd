const pool = require("./db");
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to MySQL successfully!");
        const [rows] = await connection.query(
            "SELECT DATABASE() AS database_name"
        );
        
        console.log(rows);

        connection.release();
    } catch (error) {
        console.error("Connection failed:", error.message);
    } finally {
        await pool.end();
    }
}
testConnection();