import React, { useEffect, useState } from "react";
import "./Shortcuts.css";
import { GrAdd } from "react-icons/gr";
import ShortcutBox from "../ShortcutBox/ShortcutBox";
import useLinks from "../../Hook/ContextHooks/useLinks";

export default function Shortcuts({ showModal }) {
  const { links, setLinks } = useLinks();

  useEffect(() => {
    let oldData = JSON.parse(localStorage.getItem("IgnitionLinks"));
    oldData && setLinks(oldData);
  }, []);

  return (
    <div className="shortcuts_contain">
      {links &&
        links.map((each) => {
          return <ShortcutBox each={each} key={each.id} />;
        })}
      <div
        className="shortcut"
        onClick={() => {
          showModal(true);
        }}
      >
        <div className="content_box">
          <GrAdd />
        </div>
        <p className="shortcut_title">Add New</p>
      </div>
    </div>
  );
}
