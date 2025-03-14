import Header from "../component/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <Header/>
            {children}
            <footer></footer>
        </>
    );
  }