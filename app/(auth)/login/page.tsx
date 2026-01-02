import { LoginForm } from "@/app/(auth)/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/image1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 w-full px-4 flex justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
