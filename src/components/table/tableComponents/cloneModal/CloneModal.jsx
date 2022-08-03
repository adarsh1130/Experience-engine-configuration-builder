import { Modal, ModalBody } from "baseui/modal";
import {
  DURATION,
  SnackbarProvider,
  useSnackbar,
  PLACEMENT,
} from "baseui/snackbar";
import { Check } from "baseui/icon";
import { useStyletron } from "baseui";
import { Button, SIZE, KIND } from "baseui/button";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  COPY_BUTTON_OVERRIDES,
  MODAL_OVERRIDES,
  CANCEL_BUTTON_OVERRIDES,
} from "./utils/constants";
import { handleCopy } from "./utils/handleCopy";
import { CloseButton } from "./components/closeButton/CloseButton";

export const CloneModal = ({
  setCloneModalOpen,
  cloneModalOpen,
  cloneModalVal,
  config,
}) => {
  const [css, theme] = useStyletron();
  const [copyVal, setCopyVal] = useState(cloneModalVal);
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
      component: () => <CloseButton setCloneModalOpen={setCloneModalOpen} />,
    },
  };

  const CopyButton = () => {
    const { enqueue } = useSnackbar();
    return (
      <Button
        overrides={COPY_BUTTON_OVERRIDES}
        onClick={() => handleCopy(enqueue, DURATION, Check, copyVal)}
        size={SIZE.compact}
      >
        Copy to Clipboard
      </Button>
    );
  };

  return (
    <Modal
      onClose={() => {
        setCloneModalOpen(false);
      }}
      isOpen={cloneModalOpen}
      overrides={MODAL_OVERRIDES}
    >
      <div
        className={css({
          margin: "16px 24px",
          ...theme.typography.LabelLarge,
        })}
      >
        {config.name}
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
          <Editor
            height="60vh"
            width="52vw"
            defaultLanguage="json"
            defaultValue=""
            theme="vs-dark"
            value={cloneModalVal}
            onChange={(value) => {
              setCopyVal(value);
            }}
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
        <SnackbarProvider
          placement={PLACEMENT.bottom}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                backgroundColor: $theme.colors.positive,
              }),
            },
            PlacementContainer: {
              style: {
                zIndex: "5",
              },
            },
          }}
        >
          <Button
            onClick={() => setCloneModalOpen(false)}
            overrides={CANCEL_BUTTON_OVERRIDES}
            kind={KIND.secondary}
            size={SIZE.compact}
          >
            Cancel
          </Button>
          <CopyButton />
        </SnackbarProvider>
      </div>
    </Modal>
  );
};
