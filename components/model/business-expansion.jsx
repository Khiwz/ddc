import { Collapse, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import EffectCoverflowComponent from "./effect-coverflow";
import ModalImage from "./modal-show-image";
import SectionHeader from "./section-header";

function BusinessExpansion({ expanded, data }) {
  const [imageSelected, setImageSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="text-neutral-700">
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <SectionHeader title={data?.title} description="" color="" />
        <div className="mb-20">
          {data?.description?.map((item, index) => (
            <div key={index}>
              {item.indicator === "title" ? (
                <p className="text-xl font-bold mt-5">{item.desc}</p>
              ) : item.indicator === "sub" ? (
                <div>
                  {item.desc.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <BsChevronDoubleRight className="text-web-yellow w-3 h-3" />
                      <p className="flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-4">{item.desc}</div>
              )}
            </div>
          ))}
        </div>

        <div>
          {data?.listItem?.map((item, index) => (
            <div key={index} className="mb-28">
              <div className="flex w-full mb-10">
                <div className="flex-1">
                  <p className="text-3xl font-bold">{item.name}</p>
                  {item?.itemDetail?.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <BsChevronDoubleRight className="text-web-yellow w-3 h-3" />
                      <p className="flex-1">{detail}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="flex-1">
                  <img
                    src={imageSelected}
                    alt=""
                    className="w-full object-cover"
                  />
                </div> */}
              </div>
              <EffectCoverflowComponent
                images={item.images}
                setImageSelected={setImageSelected}
                handleOpenModal={handleOpenModal}
              />

              {item?.video && (
                <div className="mt-20">
                  <iframe
                    width="100%"
                    height="625"
                    src={item.video.src}
                    title={item.video.title}
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    // allowfullscreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </Collapse>

      <ModalImage
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        image={imageSelected}
      />
    </div>
  );
}

export default BusinessExpansion;
