export default function Home(props) {
  console.log('props', props)
  return (
    <main>
      <h1>
        {JSON.stringify(props, null, 2)}
      </h1>
    </main>
  );
}
