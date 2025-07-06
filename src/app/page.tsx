import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function Home() {
  const tests = await prisma.test.findMany();
  const addeduser = await prisma.test.create({
    data: {
      name: "Test Name",
    },
  });

  console.log("Added User:", addeduser);
  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
    </>
  );
}
