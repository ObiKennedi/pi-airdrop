import Walletheader from "../component/wallet-header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Walletheader/>
            {children}
        </>
    );
  }