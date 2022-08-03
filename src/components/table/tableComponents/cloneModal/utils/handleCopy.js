export const handleCopy = (enqueue, DURATION, Check, copyVal) => {
  enqueue(
    {
      message: "Your Config has been copied to clipboard!",
      startEnhancer: ({ size }) => <Check size={size} />,
    },
    DURATION.short
  );
  navigator.clipboard.writeText(copyVal);
};
