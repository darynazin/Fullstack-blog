const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="fixed bottom-0 left-0 w-full p-6 bg-[#D9C5A8] text-white text-sm"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Personal Diary. All Rights Reserved.</p>
        </div>

        <div>
          <a href="#top" className="hover:underline hover:text-cyan-400">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
