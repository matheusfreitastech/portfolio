type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {children}
    </div>
  );
}

export default Layout;