import ConnectButton from "@/auth/wagmi/components/connectButton";
import { cookies, headers } from "next/headers";
import Link from "next/link";


const Header = async () => {
    // const token = cookies().get('token')
    const resp = cookies().get('wagmi.store')?.value
    const isConnected = JSON.parse(resp!);
    // const response = await fetch("http://localhost:3000/auth", { headers: headers() });
    // //    await fetch(`https://api.neftik.online/auth`, {
    // //         method: "GET",
    // //         headers: {
    // //             'Authorization': `Bearer ${token?.value}`,
    // //         },
    // //         next: { revalidate: 1 },
    // //     });
    // const data = await response.json();

    return (
        <header className="bg-blue-500 text-white text-lg p-4 flex justify-between items-center">
            <Link href='/'>Header Content</Link>
            <Link href='/projects'>PROJECTS</Link>

            {isConnected.state.current && <Link href='/private'>Private lounge</Link>}
            <ConnectButton />
        </header>
    );
};

export default Header;
