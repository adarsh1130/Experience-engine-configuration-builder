import { useStyletron } from "baseui";
import { Button, KIND, SIZE } from "baseui/button";
import { useState } from "react";
import { Modal, ModalBody, ROLE } from "baseui/modal";
import InputField from "./inputFields/InputField";

import updateCollection from "../../../../../../firebase/updateCollection";
// import updateCollection from "../../../../../../firebase/updateCollection";
import IconsSettings from "./iconButton/IconsSettings";
import emailChecker from "./utils/emailChecker";
// import { fetchAllEditUsers } from "./utils/fetchAllEditUsers";
import { fetchAllEditUsers } from "./utils/fetchAllEditUsers";

const ProfileSettings = () => {
  const [css, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  const [valueEdit, setValueEdit] = useState("");
  const [tagsEdit, setTagsEdit] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <Modal
        onClose={() => setIsOpen(false)}
        closeable
        isOpen={isOpen}
        animate
        autoFocus
        overrides={{
          Root: {
            style: {
              zIndex: "3",
            },
          },
          Dialog: {
            style: {
              width: "610px",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
              height: "auto",
              flexDirection: "column",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            },
          },
          Close: {
            style: {
              width: "30px",
              height: "30px",
            },
          },
        }}
        role={ROLE.dialog}
      >
        <div
          className={css({
            marginTop: "15px",
            marginLeft: "24px",
            ...theme.typography.LabelLarge,
          })}
        >
          Update Permissions
        </div>
        <ModalBody>
          <div style={{ flex: "1 1 0" }}>
            <div
              className={css({
                marginBottom: "2px",
                marginTop: "10px",
                marginLeft: "0px",
                fontSize: "16px",
                color: "black",
              })}
            >
              Enter Email IDs
            </div>
            <InputField
              value={valueEdit}
              setValue={setValueEdit}
              tags={tagsEdit}
              setTags={setTagsEdit}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          </div>
        </ModalBody>
        <div
          className={css({
            margin: "0px 24px 10px ",
            display: "flex",
            justifyContent: "flex-end",
          })}
        >
          <Button
            onClick={() => {
              setValueEdit("");
              setIsOpen(false);
            }}
            size={SIZE.compact}
            kind="secondary"
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderTopLeftRadius: $theme.borders.radius300,
                  borderTopRightRadius: $theme.borders.radius300,
                  borderBottomLeftRadius: $theme.borders.radius300,
                  borderBottomRightRadius: $theme.borders.radius300,
                  marginRight: "15px",
                }),
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (
                !valueEdit.length ||
                emailChecker(valueEdit, setErrorMessage)
              ) {
                if (valueEdit.length) tagsEdit.push(valueEdit);
                updateCollection("editPermission", tagsEdit);
                setValueEdit("");
                setIsOpen(false);
              }
            }}
            size={SIZE.compact}
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderTopLeftRadius: $theme.borders.radius300,
                  borderTopRightRadius: $theme.borders.radius300,
                  borderBottomLeftRadius: $theme.borders.radius300,
                  borderBottomRightRadius: $theme.borders.radius300,
                }),
              },
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
      <div
        className={css({
          marginRight: "20px",
          cursor: "pointer",
        })}
        onClick={() => {
          fetchAllEditUsers("editPermission", setTagsEdit);
          setIsOpen(true);
        }}
      >
        <IconsSettings />
      </div>
    </div>
  );
};
export default ProfileSettings;
