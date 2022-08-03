import { Button } from "baseui/button";
import { KIND } from "baseui/button";
import { SIZE } from "baseui/button";
import { useState } from "react";
import { MODAL_OVERRIDES } from "../../table/tableComponents/cloneModal/utils/constants";
import { CANCEL_BUTTON_OVERRIDES } from "../../table/tableComponents/cloneModal/utils/constants";
import { CloseButton } from "../../table/tableComponents/cloneModal/components/closeButton/CloseButton";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  ROLE,
} from "baseui/modal";
import { useStyletron } from "baseui";

import { DiffEditor } from "@monaco-editor/react";

export const Compare = ({ newdata, olddata, setOpenModal, openModal }) => {
  const [css, theme] = useStyletron();
  const MODAL_OVERRIDES = {
    Root: {
      style: {
        zIndex: "3",
      },
    },
    Dialog: {
      style: {
        minHeight: "60vh",
        overflow: "scroll",
        width: "55vw",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      },
    },
    Close: {
      component: () => <CloseButton setCloneModalOpen={setOpenModal} />,
    },
  };

  return (
    <>
      <Modal
        onClose={() => {
          setOpenModal(false);
        }}
        isOpen={openModal}
        overrides={MODAL_OVERRIDES}
      >
        <div
          className={css({
            margin: "16px 24px",
            ...theme.typography.LabelLarge,
          })}
        >
          {"Compare Changes"}
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px 12px",
          })}
        >
          <div
            className={css({
              borderRadius: "8px",
              padding: "2px",
              backgroundColor: theme.colors.primaryA,
              display: "flex",
            })}
          >
            <DiffEditor
              height="60vh"
              width="51.5vw"
              theme="vs-dark"
              language="json"
              original={olddata}
              modified={newdata}
            />
          </div>
        </div>
        <div
          className={css({
            margin: "16px 24px ",
            display: "flex",
            justifyContent: "flex-end",
          })}
        >
          <Button
            onClick={() => setOpenModal(false)}
            overrides={CANCEL_BUTTON_OVERRIDES}
            kind={KIND.secondary}
            size={SIZE.compact}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
};
