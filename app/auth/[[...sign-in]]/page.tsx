import {SignIn} from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="container mx-auto flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6  h-screen">
            <SignIn />
        </div>
    )
}