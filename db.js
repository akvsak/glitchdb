import postgres from "postgres";

const sql = postgres(
  `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?options=project%3D${process.env.ENDPOINT_ID}`,
  { ssl: "require" }
);


async function letsCheck() {
  const products = await sql`select version()`;
  console.log(products);
}

export { sql, letsCheck };