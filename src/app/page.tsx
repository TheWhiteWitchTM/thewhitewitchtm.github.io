import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Image
          src="/logo.jpg"
          alt="TheWhiteWitchTM Logo"
          width={128}   
          height={128}
        />

        🧙‍♀️𝕿𝖍𝖊 𝖂𝖍𝖎𝖙𝖊 𝖂𝖎𝖙𝖈𝖍™✨
        <br/>
        @TheWhiteWitchTM
        <p>
          Something, something Blog! Eventually...
        </p>
      </main>
    </div>
  );
}
