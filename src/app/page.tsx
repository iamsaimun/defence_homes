import { ClientForm } from "@/components/form";

export default function Home() {
  return (
    <>
      <main className=" min-h-svh content-center bg-gray-900">
        <section className="max-w-sm m-auto pb-10">
          <h1 className="font-black text-5xl text-white">
            Real State Selling Share
          </h1>
          <h2 className="text-lg text-white">Defence Homes</h2>
        </section>
        <section>
          <ClientForm />
        </section>
      </main>
    </>
  );
}
