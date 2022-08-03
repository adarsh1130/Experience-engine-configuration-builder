import { Check } from "baseui/icon";
import { DURATION } from "baseui/snackbar";
import { deleteConfig } from "../../../../../../firebase/deleteConfig";
export const handleSelect = (
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
) => {
  {
    if (item.label == "View") {
      setIsOpen(true);
    }
    if (item.label == "Copy Config") {
      navigator.clipboard.writeText(val);
      enqueue(
        {
          message: "Your Config has been copied to clipboard!",
          startEnhancer: ({ size }) => <Check size={size} />,
        },
        DURATION.short
      );
    }
    if (item.label == "Edit") {
      setModalContent(config);
      setIsAdd(false);
      openModal(true);
    }
    if (item.label == "Modify & Apply") {
      setCloneModalOpen(true);
    }
    if (item.label == "Delete") {
      deleteConfig(config.id);
      enqueue(
        {
          message: `${config.name} Deleted Sucessfully`,
          startEnhancer: ({ size }) => <Check size={size} />,
        },
        DURATION.short
      );
      setTimeout(fetchFilteredConfigs, 2000);
    }
  }
};
