import React from "react";

function EmbededFacebook() {
  return (
    <div className="">
      <div className="hidden sticky top-20 left-0 lg:flex justify-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100049209576020&tabs=timeline&width=320&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=659893245421209"
          width="320"
          height="500"
          // style="border:none;overflow:hidden"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="top-20 left-0 flex justify-center lg:hidden">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100049209576020&tabs=timeline&width=768&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=659893245421209"
          width="768"
          height="500"
          // style="border:none;overflow:hidden"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          className="w-700"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default EmbededFacebook;
