"use client";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Technology from "@/components/Technology/Technology";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";


export default function Home() {
  return (
    <main>
      <WelcomeHeader></WelcomeHeader>
      <About></About>
      <Technology></Technology>
      <Projects></Projects>
    </main>
  );
}
