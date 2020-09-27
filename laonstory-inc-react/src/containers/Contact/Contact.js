import React from "react";

import Wrap from "../../components/Wrap/Wrap";
import Footer from "../../components/Footer/Footer";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MediaLink from "../../components/MediaLink/MediaLink";
import Media from "../../components/Media/Media";

const Contact = () => {
  return (
    <Wrap>
      <ContactInfo />
      <Media>
        <Footer />
      </Media>
      <MediaLink />
    </Wrap>
  );
};

export default Contact;
