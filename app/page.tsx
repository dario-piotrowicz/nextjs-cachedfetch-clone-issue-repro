export const runtime = 'edge';

export default async function Home() {

  const darthVader = ((await (await fetch('https://swapi.dev/api/people/4')).json()) as { name: string }).name;

  return (
    <main>
      <div>
        <p>
          {darthVader}
        </p>
      </div>
    </main>
  );
}
