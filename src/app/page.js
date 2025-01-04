'use client'

import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-screen gap-16 sm:p-20]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <RegistrationForm/>
      </main>
    </div>
  );
}
