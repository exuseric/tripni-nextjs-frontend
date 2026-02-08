import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="w-full h-full min-h-96 bg-surface-container flex-center-col">
                <h1 className="text-3xl font-bold text-primary">Trace Your Tracks Across the 254</h1>
                <p>Plan, Log, and Share Your Kenyan Odyssey</p>
                <Link href="/auth/sign-in" className="btn-filled mt-4">Begin your journey</Link>
            </header>

            <section className="py-container-block">
                <header className="container flex-center-col">
                    <h2 className="text-center font-bold text-2xl max-w-prose">Whether you’re chasing the Great Migration across the Mara, navigating the vibrant streets of
                        Nairobi, or discovering hidden gems in the Rift Valley, our platform is your digital
                        compass.</h2>
                </header>
            </section>
        </>
    );
}