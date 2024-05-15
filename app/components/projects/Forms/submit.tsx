import { useFormStatus } from "react-dom";


export default function Submit() {
    const status = useFormStatus();
    return <button disabled={status.pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"> {status.pending ? "Saving..." : "Save as draft"}</button>
}
