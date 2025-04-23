import Head from 'next/head';
import Image from 'next/image';
import ScrollSpySidebar from '../components/ScrollSpySidebar';
import useScrollSpy from '../components/useScrollSpy';

export default function NeoflixPage() {
  /* ─────────────────────────  content definition  ──────────────────────── */
  const sections = [
    {
      id: 'time-sensitive',
      title: 'Time-sensitive',
      image: '/hero.jpg',
      body: `Everything we do in neonatal care is measured in seconds. ...`,
    },
    {
      id: 'like-a-dance',
      title: 'Like a dance',
      image: '/dance.jpg',
      body: `Great teams move with the rhythm of an orchestra. ...`,
    },
    {
      id: 'but-this-comes-at-a-cost',
      title: 'But this comes at a cost',
      image: '/cost.jpg',
      body: `The pressure to perform individual tasks with precision can
      inadvertently diminish the importance of **team cohesion**. When members
      become overly absorbed ...`,
    },
    {
      id: 'sharpening-skills',
      title: 'Sharpening skills',
      image: '/skills.jpg',
      body: `Video reflection exposes blind spots and cements best-practice. ...`,
    },
    {
      id: 'strengthening-team-dynamics',
      title: 'Strengthening team dynamics',
      image: '/team.jpg',
      body: `Through shared reflection we cultivate psychological safety ...`,
    },
    {
      id: 'broadening-perspectives',
      title: 'Broadening perspectives',
      image: '/perspectives.jpg',
      body: `We invite cross-disciplinary voices to break the echo-chamber ...`,
    },
  ];

  /* ────────────────────────  active section tracking  ────────────────────── */
  const activeId = useScrollSpy(sections.map((s) => s.id).concat(['contact']));

  /* ───────────────────────────────  render  ─────────────────────────────── */
  return (
    <>
      <Head>
        <title>Neoflix | Record · Reflect · Refine</title>
      </Head>

      <div className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-sky-800 to-teal-700">
        {/* content container */}
        <div className="mx-auto flex max-w-6xl gap-10 px-6 py-20">
          <ScrollSpySidebar sections={sections} activeId={activeId} />

          <main className="flex-1 space-y-32">
            {sections.map(({ id, title, image, body }) => (
              <section
                key={id}
                id={id}
                className="scroll-mt-32 rounded-xl bg-white/60 p-10 backdrop-blur-md"
              >
                <h2 className="mb-6 text-3xl font-bold text-slate-900">
                  {title}
                </h2>

                {/* optional illustrative image */}
                {image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={title}
                      width={1600}
                      height={900}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                )}

                <p className="prose max-w-none text-slate-700">{body}</p>
              </section>
            ))}

            {/* contact section */}
            <section
              id="contact"
              className="scroll-mt-32 rounded-xl bg-white/60 p-10 backdrop-blur-md"
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Contact</h2>

              <p className="mb-4 text-slate-700">
                Want to collaborate or learn more? Drop us a line.
              </p>

              <form
                action="https://formspree.io/f/your-id"
                method="POST"
                className="grid gap-4 md:grid-cols-2"
              >
                <input
                  required
                  name="name"
                  placeholder="Name"
                  className="rounded border border-slate-300 p-3"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded border border-slate-300 p-3"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  className="md:col-span-2 rounded border border-slate-300 p-3"
                  rows={5}
                />
                <button
                  type="submit"
                  className="md:col-span-2 rounded bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
                >
                  Send
                </button>
              </form>
            </section>

            {/* FAQ placeholder */}
            <section
              id="faq"
              className="scroll-mt-32 rounded-xl bg-white/60 p-10 backdrop-blur-md"
            >
              <h2 className="mb-6 text-3xl font-bold text-slate-900">FAQ</h2>
              <p className="text-slate-700">
                Coming soon — answers to your most common questions.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
