'use client';
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Home from "@/components/home";
import { AbilityContext } from "@/userAccess/can";
import ability from "@/userAccess/ability";

export default function HomePage() {
  return (
    <AbilityContext.Provider value={ability}>
      <Home />
    </AbilityContext.Provider>
  );
}
