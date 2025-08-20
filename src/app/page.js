import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Script
            src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"
            strategy="afterInteractive"
          />

          <gen-search-widget
            configId="3cdcaeab-1ad1-464d-80f3-768e91b75bc6"
            location="eu"
            triggerId="searchWidgetTrigger"
          ></gen-search-widget>

          <input
            className="border border-gray-300 rounded-md p-2"
            placeholder="Search here"
            id="searchWidgetTrigger"
          />
        </div>
      </main>
    </div>
  );
}
