import Profile from "@/components/profile/profile";
import MenuOnlyLayout from "@/layouts/menu-only-layout";
import { ReactElement } from "react";

export default function ProfilePage() {
  return <Profile />;
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MenuOnlyLayout>
      {page}
    </MenuOnlyLayout>
  )
}
