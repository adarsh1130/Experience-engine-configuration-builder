import { StatefulMenu } from "baseui/menu";
import { useSnackbar, DURATION } from "baseui/snackbar";
import { useState } from "react";
import { MENU_OVERRIDES } from "./utils/constants";
import { handleSelect } from "./utils/helpers";

export const ActionMenu = ({
  setIsOpen,
  val,
  setModalContent,
  setIsAdd,
  openModal,
  setCloneModalOpen,
  config,
  canEdit,
  fetchFilteredConfigs,
}) => {
  const { enqueue } = useSnackbar();
  const [menuOptions, setMenuOptions] = useState([]);

  if (canEdit && menuOptions.length < 4) {
    setMenuOptions([
      { label: "View" },
      { label: "Copy Config" },
      { label: "Modify & Apply" },
      { label: "Edit" },
      { label: "Delete" },
    ]);
  }
  if (!canEdit && (menuOptions.length > 3 || !menuOptions.length)) {
    setMenuOptions([
      { label: "View" },
      { label: "Copy Config" },
      { label: "Modify & Apply" },
    ]);
  }

  return (
    <StatefulMenu
      overrides={MENU_OVERRIDES}
      items={menuOptions}
      onItemSelect={({ item }) =>
        handleSelect(
          item,
          setIsOpen,
          val,
          enqueue,
          setModalContent,
          setIsAdd,
          openModal,
          setCloneModalOpen,
          config,
          fetchFilteredConfigs
        )
      }
    />
  );
};
