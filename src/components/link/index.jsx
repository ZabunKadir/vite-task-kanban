const LinkComp = ({ children, href, rel, target }) => {
  return (
    <a
      href={href}
      target={target}
      ref={rel}
      className=" font-medium hover:underline hover:text-gray-400"
    >
      {children}
    </a>
  );
};

export default LinkComp;
