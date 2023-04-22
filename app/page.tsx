import getBaseURL from "@/lib/utils/baseurl";

export default async function Home() {
  console.log("====================================");
  console.log(process.env);
  console.log("====================================");
  console.log(getBaseURL());
  console.log("====================================");
  return (
    <main>
      <h1>Hello World Student From York</h1>
    </main>
  );
}
