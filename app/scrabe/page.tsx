// // // // // 'use client';

// // // // // import { Fingerprint } from 'lucide-react';

// // // // // export default function LoginPage() {
// // // // //   return (
// // // // //     <main className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden">
// // // // //       {/* Background Glow */}
// // // // //       <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

// // // // //       <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
// // // // //         <div className="flex w-full max-w-6xl items-center justify-between gap-12">

// // // // //           {/* LEFT TEXT */}
// // // // //           <div className="hidden md:block max-w-md text-white">
// // // // //             <h1 className="text-4xl font-bold tracking-wide">
// // // // //               WELCOME BACK !
// // // // //             </h1>
// // // // //             <p className="mt-4 text-sm text-white/70">
// // // // //               To keep contacted with us, please <br />
// // // // //               login with your personal information.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* LOGIN CARD */}
// // // // //           <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl text-white shadow-xl">
// // // // //             <div className="space-y-6">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="E-mail or Phone Number"
// // // // //                 className="w-full bg-transparent border-b border-white/40 px-1 py-2 text-sm outline-none placeholder:text-white/60 focus:border-white"
// // // // //               />

// // // // //               <input
// // // // //                 type="password"
// // // // //                 placeholder="Password"
// // // // //                 className="w-full bg-transparent border-b border-white/40 px-1 py-2 text-sm outline-none placeholder:text-white/60 focus:border-white"
// // // // //               />

// // // // //               <div className="flex gap-4 pt-4">
// // // // //                 <button className="flex-1 rounded-full bg-white/20 py-2 text-sm font-medium hover:bg-white/30 transition">
// // // // //                   Sign in
// // // // //                 </button>
// // // // //                 <button className="flex-1 rounded-full bg-white/10 py-2 text-sm font-medium hover:bg-white/20 transition">
// // // // //                   Sign up
// // // // //                 </button>
// // // // //               </div>

// // // // //               <div className="flex flex-col items-center gap-3 pt-6">
// // // // //                 <button className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs hover:bg-white/20 transition">
// // // // //                   <Fingerprint size={16} />
// // // // //                   Use touch ID
// // // // //                 </button>

// // // // //                 <label className="flex items-center gap-2 text-xs text-white/70">
// // // // //                   <input type="checkbox" className="accent-white" />
// // // // //                   Remember me
// // // // //                 </label>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* LOGOUT CONFIRM CARD */}
// // // // //           <div className="hidden lg:block w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl text-white shadow-xl">
// // // // //             <h2 className="text-xl font-semibold">
// // // // //               ARE YOU SURE ?
// // // // //             </h2>
// // // // //             <p className="mt-3 text-sm text-white/70">
// // // // //               This is your last time to log out. <br />
// // // // //               Once you do, you can not come back later.
// // // // //             </p>

// // // // //             <div className="mt-6 flex gap-4">
// // // // //               <button className="flex-1 rounded-full bg-red-600/80 py-2 text-sm font-medium hover:bg-red-600 transition">
// // // // //                 LOG OUT
// // // // //               </button>
// // // // //               <button className="flex-1 rounded-full bg-emerald-600/80 py-2 text-sm font-medium hover:bg-emerald-600 transition">
// // // // //                 CANCEL
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }

// // // // 'use client';

// // // // import { Fingerprint } from 'lucide-react';

// // // // export default function LoginPage() {
// // // //   return (
// // // //     <main className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden">
// // // //       {/* Background Glow */}
// // // //       <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

// // // //       <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
// // // //         <div className="flex w-full max-w-6xl items-center justify-between gap-12">

// // // //           {/* LEFT TEXT */}
// // // //           <div className="hidden md:block max-w-md text-white">
// // // //             <h1 className="text-4xl font-bold tracking-wide">
// // // //               WELCOME BACK !
// // // //             </h1>
// // // //             <p className="mt-4 text-sm text-white/70">
// // // //               To keep contacted with us, please <br />
// // // //               login with your personal information.
// // // //             </p>
// // // //           </div>

// // // //           {/* LOGIN CARD */}
// // // //           <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl text-white shadow-xl">
// // // //             <div className="space-y-6">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="E-mail or Phone Number"
// // // //                 className="w-full bg-transparent border-b border-white/40 px-1 py-2 text-sm outline-none placeholder:text-white/60 focus:border-white"
// // // //               />

// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Password"
// // // //                 className="w-full bg-transparent border-b border-white/40 px-1 py-2 text-sm outline-none placeholder:text-white/60 focus:border-white"
// // // //               />

// // // //               <div className="flex gap-4 pt-4">
// // // //                 <button className="flex-1 rounded-full bg-white/20 py-2 text-sm font-medium hover:bg-white/30 transition">
// // // //                   Sign in
// // // //                 </button>
// // // //                 <button className="flex-1 rounded-full bg-white/10 py-2 text-sm font-medium hover:bg-white/20 transition">
// // // //                   Sign up
// // // //                 </button>
// // // //               </div>

// // // //               <div className="flex flex-col items-center gap-3 pt-6">
// // // //                 <button className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-xs hover:bg-white/20 transition">
// // // //                   <Fingerprint size={16} />
// // // //                   Use touch ID
// // // //                 </button>

// // // //                 <label className="flex items-center gap-2 text-xs text-white/70">
// // // //                   <input type="checkbox" className="accent-white" />
// // // //                   Remember me
// // // //                 </label>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* LOGOUT CONFIRM CARD */}
// // // //           <div className="hidden lg:block w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl text-white shadow-xl">
// // // //             <h2 className="text-xl font-semibold">
// // // //               ARE YOU SURE ?
// // // //             </h2>
// // // //             <p className="mt-3 text-sm text-white/70">
// // // //               This is your last time to log out. <br />
// // // //               Once you do, you can not come back later.
// // // //             </p>

// // // //             <div className="mt-6 flex gap-4">
// // // //               <button className="flex-1 rounded-full bg-red-600/80 py-2 text-sm font-medium hover:bg-red-600 transition">
// // // //                 LOG OUT
// // // //               </button>
// // // //               <button className="flex-1 rounded-full bg-emerald-600/80 py-2 text-sm font-medium hover:bg-emerald-600 transition">
// // // //                 CANCEL
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // 'use client';

// // // import Image from 'next/image';
// // // import { Fingerprint } from 'lucide-react';

// // // export default function LoginPage() {
// // //   return (
// // //     <main className="relative min-h-screen overflow-hidden bg-[#050B1A] text-white">

// // //       <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
// // //         <div className="flex w-full max-w-[1200px] items-center justify-between gap-14">

// // //           {/* LEFT TEXT */}
// // //           <div className="max-w-[360px]">
// // //             <h1 className="text-[36px] font-semibold tracking-wide">
// // //               WELCOME BACK !
// // //             </h1>
// // //             <p className="mt-4 text-[14px] leading-6 text-white/70">
// // //               To keep contacted with us, please <br />
// // //               login with your personal information.
// // //             </p>
// // //           </div>

// // //           {/* LOGIN CARD */}
// // //           <div className="w-[360px] rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-[18px] p">
// // //             <div className="space-y-6">
// // //               <input
// // //                 type="text"
// // //                 placeholder="E-mail or Phone Number"
// // //                 className="w-full bg-transparent border-b border-white/40 py-2 text-[14px] placeholder:text-white/60 focus:outline-none focus:border-white"
// // //               />

// // //               <input
// // //                 type="password"
// // //                 placeholder="Password"
// // //                 className="w-full bg-transparent border-b border-white/40 py-2 text-[14px] placeholder:text-white/60 focus:outline-none focus:border-white"
// // //               />

// // //               <div className="mt-6 flex gap-4">
// // //                 <button className="flex-1 rounded-full bg-white/20 py-2 text-[13px] font-medium hover:bg-white/30 transition">
// // //                   Sign in
// // //                 </button>
// // //                 <button className="flex-1 rounded-full bg-white/10 py-2 text-[13px] font-medium hover:bg-white/20 transition">
// // //                   Sign up
// // //                 </button>
// // //               </div>

// // //               <div className="mt-8 flex flex-col items-center gap-4">
// // //                 <button className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-[12px] hover:bg-white/20 transition">
// // //                   <Fingerprint size={16} />
// // //                   Use touch ID
// // //                 </button>

// // //                 <label className="flex items-center gap-2 text-[12px] text-white/70">
// // //                   <input type="checkbox" className="accent-white" />
// // //                   Remember me
// // //                 </label>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* LOGOUT CONFIRM CARD */}
// // //           <div className="w-[360px] rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-[18px] px-8 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
// // //             <h2 className="text-[20px] font-semibold">
// // //               ARE YOU SURE ?
// // //             </h2>
// // //             <p className="mt-4 text-[14px] leading-6 text-white/70">
// // //               This is your last time to log out. <br />
// // //               Once you do, you can not come back later.
// // //             </p>

// // //             <div className="mt-8 flex gap-4">
// // //               <button className="flex-1 rounded-full bg-[#7A1F2B] py-2 text-[13px] font-medium hover:bg-[#8C2432] transition">
// // //                 LOG OUT
// // //               </button>
// // //               <button className="flex-1 rounded-full bg-[#1E7F64] py-2 text-[13px] font-medium hover:bg-[#239B78] transition">
// // //                 CANCEL
// // //               </button>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // import React from 'react';
// // import { Fingerprint } from 'lucide-react';

// // const LoginPage = () => {
// //   return (
// //     <div className="min-h-screen w-full bg-[#050a18] bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center p-4 font-sans text-white">
// //       {/* Overlay to darken background */}
// //       <div className="absolute inset-0 bg-black/40 z-0"></div>

// //       <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center max-w-6xl w-full justify-around">

// //         {/* Left Section: Welcome Text */}
// //         <div className="max-w-xs text-left">
// //           <h1 className="text-4xl font-bold tracking-wider mb-4">WELCOME BACK !</h1>
// //           <p className="text-gray-300 leading-relaxed">
// //             To keep contacted with us, please login with your personal information.
// //           </p>
// //         </div>

// //         {/* Middle Section: Login Card */}
// //         <div className="w-full max-w-sm backdrop-blur-md bg-white/10 border border-white/20 rounded-[40px] p-10 shadow-2xl">
// //           <form className="space-y-8">
// //             <div className="space-y-2">
// //               <label className="block text-sm text-center text-gray-200">E-mail or Phone Number</label>
// //               <input
// //                 type="text"
// //                 className="w-full bg-transparent border-b border-white/50 py-2 outline-none focus:border-white transition-colors text-center"
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <label className="block text-sm text-center text-gray-200">Password</label>
// //               <input
// //                 type="password"
// //                 className="w-full bg-transparent border-b border-white/50 py-2 outline-none focus:border-white transition-colors text-center"
// //               />
// //             </div>

// //             <div className="flex gap-4 pt-4">
// //               <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-full transition-all border border-white/10">
// //                 Sign in
// //               </button>
// //               <button className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-full transition-all border border-white/10">
// //                 Sign up
// //               </button>
// //             </div>

// //             <div className="flex flex-col items-center gap-4 pt-2">
// //               <Fingerprint size={48} className="text-gray-300 opacity-80" strokeWidth={1.5} />
// //               <button type="button" className="bg-white/10 px-6 py-1.5 rounded-full text-sm hover:bg-white/20 transition-all border border-white/5">
// //                 Use touch ID
// //               </button>
// //             </div>

// //             <div className="flex items-center justify-center gap-2 pt-2">
// //               <input type="checkbox" id="remember" className="rounded-full bg-white/20 border-none" />
// //               <label htmlFor="remember" className="text-xs text-gray-400">Remember me</label>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Right Section: Logout Card */}
// //         <div className="w-full max-w-sm backdrop-blur-md bg-white/10 border border-white/20 rounded-[40px] p-10 shadow-2xl flex flex-col items-center text-center">
// //           <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">Are you sure ?</h2>
// //           <p className="text-gray-300 mb-12 text-sm leading-relaxed">
// //             This is your last time to log out.<br />
// //             Once you do, you can not<br />
// //             come back later.
// //           </p>

// //           <div className="w-full space-y-4 px-4">
// //             <button className="w-full bg-red-900/60 hover:bg-red-800/80 text-white font-bold py-3 rounded-full transition-all uppercase tracking-tighter">
// //               Log out
// //             </button>
// //             <button className="w-full bg-emerald-800/60 hover:bg-emerald-700/80 text-white font-bold py-3 rounded-full transition-all uppercase tracking-tighter">
// //               Cancel
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// import React from 'react';
// import { Fingerprint } from 'lucide-react';

// const GlassLoginPage = () => {
//   return (
//     <div className="min-h-screen w-full bg-[#020617] bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center flex items-center justify-center p-6 font-sans text-white">
//       {/* Dark tint overlay to make the white text pop */}
//       <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

//       <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center max-w-7xl w-full justify-center">

//         {/* Left Section */}
//         <div className="max-w-xs text-left hidden lg:block">
//           <h1 className="text-5xl font-extrabold tracking-tighter mb-6">WELCOME <br/> BACK !</h1>
//           <p className="text-gray-300 text-lg font-light leading-relaxed opacity-80">
//             To keep contacted with us, please login with your personal information.
//           </p>
//         </div>

//         {/* Login Card - High Transparency */}
//         <div className="w-full max-w-sm backdrop-blur-xl bg-white/[0.03] border border-white/20 rounded-[45px] p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
//           <form className="space-y-10">
//             <div className="space-y-1">
//               <label className="block text-xs uppercase tracking-[0.2em] text-center text-gray-400">E-mail or Phone Number</label>
//               <input
//                 type="text"
//                 className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-white transition-all text-center text-lg"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-xs uppercase tracking-[0.2em] text-center text-gray-400">Password</label>
//               <input
//                 type="password"
//                 className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-white transition-all text-center text-lg"
//               />
//             </div>

//             <div className="flex gap-4">
//               <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-full transition-all border border-white/10 text-sm font-medium">
//                 Sign in
//               </button>
//               <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-full transition-all border border-white/10 text-sm font-medium">
//                 Sign up
//               </button>
//             </div>

//             <div className="flex flex-col items-center gap-4">
//               <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
//                 <Fingerprint size={40} className="text-white/70" strokeWidth={1} />
//               </div>
//               <button type="button" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
//                 Use touch ID
//               </button>
//             </div>

//             <div className="flex items-center justify-center gap-3">
//               <input type="checkbox" id="rem" className="w-4 h-4 rounded-full border-white/30 bg-transparent checked:bg-white/40 cursor-pointer" />
//               <label htmlFor="rem" className="text-xs text-gray-400 cursor-pointer">Remember me</label>
//             </div>
//           </form>
//         </div>

//         {/* Logout Card - High Transparency */}
//         <div className="w-full max-w-sm backdrop-blur-2xl bg-white/[0.02] border border-white/20 rounded-[45px] p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col items-center text-center">
//           <h2 className="text-2xl font-bold mb-8 tracking-[0.15em] text-white">ARE YOU SURE ?</h2>
//           <p className="text-gray-300 mb-12 text-sm font-light leading-7">
//             This is your last time to log out.<br />
//             Once you do, you can not<br />
//             come back later.
//           </p>

//           <div className="w-full space-y-4 px-2">
//             <button className="w-full bg-red-500/20 hover:bg-red-500/40 text-red-100 border border-red-500/30 font-semibold py-4 rounded-2xl transition-all uppercase text-xs tracking-widest">
//               Log out
//             </button>
//             <button className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-100 border border-emerald-500/30 font-semibold py-4 rounded-2xl transition-all uppercase text-xs tracking-widest">
//               Cancel
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GlassLoginPage;

import React from "react";
// import { Fingerprint } from 'lucide-react';

const MidnightGlassPage = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 overflow-hidden font-sans text-white">
      {/* Background Image: Midnight with Crescent Moon */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/463416797/photo/full-moon-over-sea.jpg?s=612x612&w=0&k=20&c=yRQvzsQcbqPZWvvJDnDelLWjM-KnvNdMCqbmr6rcIdI=')`,
        }}
      />

      {/* Moonlight Glow Effect (Soft radial gradient behind cards) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center max-w-7xl w-full justify-center">
        {/* Left Section: Typography */}
        <div className="max-w-xs text-left hidden lg:block">
          <h1 className="text-5xl font-bold tracking-tighter mb-4 leading-tight">
            WELCOME <br /> BACK !
          </h1>
          <p className="text-blue-100/60 text-lg font-light leading-relaxed">
            To keep contacted with us, please login with your personal
            information.
          </p>
        </div>

        {/* Card 1: Login (Pure Glass) */}
        <div className="w-full max-w-[380px] backdrop-blur-xl bg-white/[0.09] border border-white/10 rounded-[40px] p-10 shadow-2xl relative overflow-hidden group">
          {/* Subtle inner sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <form className="relative z-10 space-y-8">
            <div className="space-y-1">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-center text-blue-100/50">
                E-mail or Phone Number
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-blue-300/50 transition-all text-center text-lg font-light"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-center text-blue-100/50">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-transparent border-b border-white/20 py-2 outline-none focus:border-blue-300/50 transition-all text-center text-lg font-light"
              />
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-white/5 hover:bg-white/10 py-2.5 rounded-full transition-all border border-white/10 text-xs tracking-widest uppercase">
                Sign in
              </button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 py-2.5 rounded-full transition-all border border-white/10 text-xs tracking-widest uppercase">
                Sign up
              </button>
            </div>

            <div className="flex flex-col items-center gap-4 py-2">
              {/* <Fingerprint size={50} className="text-white/40 group-hover:text-blue-200/60 transition-colors" strokeWidth={1} /> */}
              <button
                type="button"
                className="text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
              >
                Use touch ID
              </button>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-blue-300/50 rounded-full" />
              </div>
              <label className="text-[11px] text-blue-100/40 tracking-wide">
                Remember me
              </label>
            </div>
          </form>
        </div>

        {/* Card 2: Logout (Pure Glass) */}
        <div className="w-full max-w-[380px] backdrop-blur-2xl bg-white/[0.01] border border-white/10 rounded-[40px] p-10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />

          <h2 className="text-2xl font-semibold mb-8 tracking-[0.2em] text-white/90 relative z-10">
            ARE YOU SURE ?
          </h2>

          <p className="text-blue-100/60 mb-12 text-sm font-light leading-relaxed relative z-10">
            This is your last time to log out.
            <br />
            Once you do, you can not
            <br />
            come back later.
          </p>

          <div className="w-full space-y-4 px-4 relative z-10">
            <button className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-200/80 border border-red-500/20 font-light py-4 rounded-2xl transition-all uppercase text-[10px] tracking-[0.3em]">
              Log out
            </button>
            <button className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200/80 border border-emerald-500/20 font-light py-4 rounded-2xl transition-all uppercase text-[10px] tracking-[0.3em]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidnightGlassPage;
