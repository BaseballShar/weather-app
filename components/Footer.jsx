export default function Footer() {
  const space = " ";
  return (
    <footer className="sm:flex sm:justify-around bg-blue-200 py-2 text-lg font-mono text-center">
      <p>
        Email:{space}
        <a className="footer-link" href="mailto:workingcth@gmail.com">
          workingcth@gmail.com
        </a>
      </p>
      <p>
        Github:{space}
        <a className="footer-link" href="https://github.com/BaseballShar/">
          BaseballShar
        </a>
      </p>
    </footer>
  );
}
