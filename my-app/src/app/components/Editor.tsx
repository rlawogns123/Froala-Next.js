import React from "react";

import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/languages/ko.js";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const options = {
  placeholderText: "내용을 입력하세요",
  toolbarButtons: {
    moreText: {
      buttons: [
        "paragraphFormat",
        "fontSize",
        "textColor",
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
        "clearFormatting",
      ],
      buttonsVisible: 7,
    },
    moreParagraph: {
      buttons: [
        "alignLeft",
        "alignCenter",
        "alignRight",
        "formatOL",
        "formatUL",
        "indent",
        "outdent",
      ],
      buttonsVisible: 7,
    },
    moreMisc: {
      buttons: [
        "insertImage",
        "insertVideo",
        "insertLink",
        "insertHR",
        "specialCharacters",
        "emoticons",
        "selectAll",
        "clearFormatting",
      ],
      buttonsVisible: 8,
    },
    moreRich: {
      buttons: ["undo", "redo"],
      align: "right",
    },
  },
  charCounterCount: true,
  language: "ko",
};

const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div>
      <FroalaEditorComponent
        tag="textarea"
        model={value}
        onModelChange={onChange}
        config={options}
      />
    </div>
  );
};

export default Editor;
