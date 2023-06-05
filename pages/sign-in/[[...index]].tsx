import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="vh-100 overflow-y flex justify-center align-center">
      <SignIn />
    </div>
  )
}