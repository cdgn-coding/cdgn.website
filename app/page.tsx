export default function Home() {
  return (
    <>
      <section>
        <span className="block text-2xl font-bold text-gray-900">
          Hola, soy Carlos David
        </span>
        <span className="block text-2xl font-bold text-gray-600">
          Un ingeniero de software en Buenos Aires, Argentina.
        </span>
      </section>
      <section className="flex flex-col">
        <section className="flex flex-row">
          <div className="text-gray-600">2021 - 2023</div>
          <div className="flex flex-col flex-grow ml-6">
            <div className="text-gray-900">Pomelo</div>
            <div className="text-gray-900">Lead Software Engineer</div>
            <div className="text-gray-900">Breve descripcion</div>
          </div>
        </section>
      </section>
    </>
  );
}
