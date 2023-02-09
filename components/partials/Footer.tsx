import React from "react";

interface FooterItemProps {
  Icon: React.ComponentType<any>;
  href: string;
}

const Footer = () => {
  return <div>Footer</div>;
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink {...props}>
      <a className="hover:text-primary-300 transition duration-300">
        {props.children}
      </a>
    </NextLink>
  );
};

const ContactItem: React.FC<FooterItemProps> = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon className="w-6 h-6 hover:text-primary-500 transition duration-300" />
    </a>
  );
};

export default Footer;
