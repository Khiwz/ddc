import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

function SocialShare({ url }) {
  return (
    <div className="mt-10 flex flex-row">
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon size={32} />
      </FacebookMessengerShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <LineShareButton url={url}>
        <LineIcon size={32} />
      </LineShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={32} />
      </EmailShareButton>
    </div>
  );
}

export default SocialShare;
