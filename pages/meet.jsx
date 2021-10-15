import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Meet() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://meet.google.com/cio-havg-hse");
  });

  return <p>Redirecting...</p>
}
