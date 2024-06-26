import Link from "next/link";
import { Button } from "../components/ui/button";

export const metadata = {
  title: "Next Template | Home",
  description: "Generated by create next app by Sahin Alam",
};

export default function Home() {
  return (
    <div
      style={{
        height: "500px",
        width: "500px",
      }}
    >
      <h1>Home Page</h1>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
