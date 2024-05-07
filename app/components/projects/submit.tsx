import { useFormStatus } from "react-dom";


export default function Submit() {
    const status = useFormStatus();
    return <button disabled={status.pending}> {status.pending ? "Submitting..." : "Submit"}</button>
}
