const Layout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="h-full bg-[#111827] flex items-center justify-center">
        {children}
      </main>
    );
  }
   
  export default Layout;