import React from "react";

export default function ShortcutBox({ each }) {
  return (
    <div className="shortcut" onClick={() => window.open(each.link, "_blank")}>
      <div className="content_box">
        <img src={each.thumb} alt="" />
      </div>
      <p className="shortcut_title">{each.title}</p>
    </div>
  );
}
