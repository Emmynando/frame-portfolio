import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={classes.footer} id="footer">
        <div>
          <ul>
            <li>
              <a href="https://t.me/ChukwuemekaDev" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://github.com/emmynando" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>COPYRIGHT &copy; 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
