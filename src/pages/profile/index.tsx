import { AuthWrapper } from "@/components/auth-wrapper/auth-wrapper";
import Profile from "@/components/profile/profile";
import MenuOnlyLayout from "@/layouts/menu-only-layout";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

export default function ProfilePage() {
  return <Profile />;
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MenuOnlyLayout>
      <AuthWrapper>{page}</AuthWrapper>
    </MenuOnlyLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = context.req.cookies;
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
