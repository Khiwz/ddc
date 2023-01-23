import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { FiMaximize } from "react-icons/fi";
import ModalImage from "./modal-show-image";

export default function DDCImageList() {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const selectedImageHandler = (img) => {
    setSelectedImage(img);
    setOpenModal(true);
  };

  return (
    <ImageList sx={{ width: "100%" }}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div">December</ListSubheader> */}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                onClick={() => selectedImageHandler(item.img)}
              >
                <FiMaximize />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}

      <ModalImage
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        image={selectedImage}
      />
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/gallery/image-1.jpg",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "/images/gallery/image-2.jpg",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "/images/gallery/image-3.jpg",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "/images/gallery/image-4.jpg",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "/images/gallery/image-5.jpg",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "/images/gallery/image-6.jpg",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "/images/gallery/image-7.jpg",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "/images/gallery/image-8.jpg",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "/images/gallery/image-9.jpg",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "/images/gallery/image-10.jpg",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "/images/gallery/image-11.jpg",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "/images/gallery/image-12.jpg",
    title: "Bike",
    author: "@southside_customs",
  },
];
