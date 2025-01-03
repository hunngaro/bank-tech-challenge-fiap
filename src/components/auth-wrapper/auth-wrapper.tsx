import { setUser, User } from "@/features/auth/auth-slice";
import { useAppDispatch } from "@/app/hooks";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

export function AuthWrapper({ children }: Props) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem("@bytebank:user");
    const user: User = JSON.parse(storageUser!);
    if (user && user.id) {
      dispatch(setUser({ user }))
      const customPathname = pathname === "/" ? "/dashboard" : pathname;
      router.push(customPathname);
    } else {
      router.push("/");
    }
    setLoading(false);
  }, [pathname, router, dispatch]);

  if (loading) {
    return null;
  }

  return children;
}
