import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      <main>
        <section></section>
        <section>
          <Link href="/">
            <Button variant="default">Back to Homepage</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
