import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
import useLinks from "../../Hook/ContextHooks/useLinks";
import Reorder from "../Reorder/Reorder";
import { v4 as uuidv4 } from "uuid";

export default function Modal({ showModal }) {
  const [thumb, setThumb] = useState("");
  const { links, setLinks } = useLinks();
  const titleRef = useRef();
  const linkRef = useRef();

  const BrokenImage =
    "https://images.prismic.io/ionicframeworkcom/ede26d00-bbd9-4ea8-974a-69fe9203b39e_ionic-io-appflow-why-appflow-different-1%402x.png?auto=compress,format";

  const handleSubmit = (e) => {
    e.preventDefault();
    let newEntry = {
      id: uuidv4(),
      title: titleRef.current.value.trim(),
      thumb,
      link: linkRef.current.value.trim(),
    };
    setLinks((prev) => [...prev, newEntry]);
    localStorage.setItem("IgnitionLinks", JSON.stringify([...links, newEntry]));
    showModal(false);
  };

  const handleBrokenImage = (e) => {
    e.currentTarget.src = BrokenImage;
  };

  return (
    <div
      className="modal"
      onClick={() => {
        showModal(false);
      }}
    >
      <div
        className="modal_card"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Reorder />

        <form className="add_form" onSubmit={handleSubmit}>
          {
            <img
              src={thumb}
              alt=""
              className="thumb_viewer"
              onError={handleBrokenImage}
            />
          }
          <input
            type="text"
            className="form_input tb"
            placeholder="Title"
            ref={titleRef}
          />
          <input
            type="text"
            className="form_input tb"
            placeholder="Thumbnail"
            onChange={(e) => {
              setThumb(e.target.value.trim());
            }}
          />
          <input
            type="text"
            className="form_input tb"
            placeholder="Link"
            ref={linkRef}
          />
          <input type="submit" value="Add" className="form_input btn" />
        </form>
      </div>
    </div>
  );
}
