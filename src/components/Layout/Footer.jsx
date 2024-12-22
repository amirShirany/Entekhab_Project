function Footer() {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
      <div>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;