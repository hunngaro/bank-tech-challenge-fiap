import { setUser, User } from "@/features/auth/auth-slice";
import { useAppDispatch } from "@/app/hooks";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

interface Props {
  children: ReactNode;
}

export function AuthWrapper({ children }: Props) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storageUser = Cookies.get("user");
    if (storageUser) {
      const user: User = JSON.parse(storageUser);
      dispatch(setUser({ user }));
      const customPathname =
        pathname === "/" ? "/dashboard" : (pathname as string);
      router.push(customPathname);
    } else {
      router.push("/");
    }
  }, [pathname, router, dispatch]);

  return children;
}
