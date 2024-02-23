import NavBar from "./NavBar";
import Chatbot from "./components/Chatbot";

export default async function Home() {
  return (
    <>
      <NavBar />
      <Chatbot />
    </>
  );
}

export const dynamic = "force-dynamic";
