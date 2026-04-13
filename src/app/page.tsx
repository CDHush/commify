import { createClient } from "../../lib/supabase";

export default async function Home() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <main>
      <h1>Commify</h1>
      <p>{session ? "Logged in" : "Not logged in"}</p>
    </main>
  );
}