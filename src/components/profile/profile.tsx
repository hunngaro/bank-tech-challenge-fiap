"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import iluProfile from "@/assets/ilu-profile.svg";
import BoxInside from "@/ui/BoxInside";
import { useAppSelector } from "@/lib/hooks";

export default function Profile() {
  const user = useAppSelector((state) => state.auth.user);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (user?.id) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  return (
    <BoxInside title="Minha conta">
      <div className="lg:flex lg:flex-row-reverse gap-8 justify-between z-10 relative">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="profile__input flex flex-col gap-2 mb-4 relative">
              <label className="font-bold" htmlFor="name">
                Nome
              </label>
              <input
                className="p-4 pr-10 appearance-none rounded-lg border-my-green outline-none border-2"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="profile__input flex flex-col gap-2 mb-4 relative">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                className="p-4 pr-10 rounded-lg border-my-green outline-none border-2"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="profile__input flex flex-col gap-2 mb-4 relative md:w-3/5">
              <label className="font-bold" htmlFor="password">
                Senha
              </label>
              <input
                className="p-4 pr-10 rounded-lg border-my-green outline-none border-2"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="text-white font-bold bg-my-red hover:bg-black transition-all py-4 w-full md:w-3/5 rounded-lg mt-2 mb-8 lg:mb-0"
              type="submit"
            >
              Salvar alterações
            </button>
          </form>
        </div>

        <Image src={iluProfile} priority alt="Ilustracao" width={446} />
      </div>
      <style jsx>{`
        .profile__input::before {
          content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgxMjUgMi42ODc1TDEwLjU5MzggMy45MDYyNUw4LjA5Mzc1IDEuNDA2MjVMOS4zMTI1IDAuMTg3NUM5LjQzNzUgMC4wNjI1IDkuNTkzNzUgMCA5Ljc4MTI1IDBDOS45Njg3NSAwIDEwLjEyNSAwLjA2MjUgMTAuMjUgMC4xODc1TDExLjgxMjUgMS43NUMxMS45Mzc1IDEuODc1IDEyIDIuMDMxMjUgMTIgMi4yMTg3NUMxMiAyLjQwNjI1IDExLjkzNzUgMi41NjI1IDExLjgxMjUgMi42ODc1Wk0wIDkuNUw3LjM3NSAyLjEyNUw5Ljg3NSA0LjYyNUwyLjUgMTJIMFY5LjVaIiBmaWxsPSIjNDQ0NDQ0Ii8+Cjwvc3ZnPgo=);
          position: absolute;
          bottom: 18px;
          right: 20px;
          z-index: 100;
        }
      `}</style>
    </BoxInside>
  );
}
