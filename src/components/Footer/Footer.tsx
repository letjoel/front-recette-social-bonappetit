import iconMail from "../../assets/iconemail.svg";
import iconShare from "../../assets/iconshare.svg";
import iconTwitter from "../../assets/icontwitter.svg";
import iconInstagram from "../../assets/iconinstagram.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="hidden md:flex flex-col fixed bottom-0 justify-center items-center h-32 backdrop-blur-sm w-full box-border">
      <p>© Bon Appétit Social App</p>
      <ul className="flex flex-row my-2">
        <li>Contact Us </li>&nbsp;-&nbsp;<li>Privacy Policy </li>&nbsp;-&nbsp;
        <li>Terms of Use</li>
      </ul>
      <div className="flex flex-row gap-3 mt-1">
        <img className="cursor-pointer" src={iconMail} alt="Mail" />
        <img className="cursor-pointer" src={iconShare} alt="Share" />
        <img className="cursor-pointer" src={iconInstagram} alt="Instagram" />
        <img className="cursor-pointer" src={iconTwitter} alt="Twitter" />
      </div>
    </footer>
  );
};

export default Footer;
