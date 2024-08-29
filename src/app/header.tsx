import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export function Header() {
  return (
    <div className="border-b">
      <div className="container mx-auto justify-between flex p-4 bg-gray-50">
        AgoFiledrive
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-2">
            <OrganizationSwitcher />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
