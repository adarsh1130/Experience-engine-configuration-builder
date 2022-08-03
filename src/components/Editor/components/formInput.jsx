import { InputFieldLabel } from "./inputFieldLabel/inputFieldLabel";
import { InputFields } from "./inputFields/inputFields";
import { useStyletron } from "baseui";
import { useRef } from "react";
import { useEffect } from "react";
export const FormInput = ({
  err,
  label,
  currentContent,
  Change,
  name,
  first,
  count,
}) => {
  const [css, theme] = useStyletron();
  const scrollToElement = (testRef) => testRef.current.scrollIntoView();
  const reference = useRef(null);
  useEffect(() => {
    if (first == label) {
      scrollToElement(reference);
    }
  }, [count]);

  return (
    <div
      ref={reference}
      className={css({
        display: "flex-column",
        marginBottom: "6px",
      })}
    >
      <InputFieldLabel label={label} />
      <div>
        <InputFields
          err={err}
          label={label}
          currentContent={currentContent}
          Change={Change}
          name={name}
        />
      </div>
    </div>
  );
};
