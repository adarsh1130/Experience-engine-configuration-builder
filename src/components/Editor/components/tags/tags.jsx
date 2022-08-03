import { useStyletron } from "baseui";
import { Select } from "baseui/select";
import { SIZE } from "baseui/input";
import { useEffect } from "react";
import { tagValues } from "./utils/tagValues";
import { allTags } from "./utils/allTags";
import fetchTags from "../../../../../firebase/fetchTags";
import { Tag_Overrides } from "./utils/constants";
export const Tags = ({ Options, tag, setTag, setOptions, content }) => {
  const addTag = (params) => {
    setTag(params.value);
  };
  useEffect(() => {
    allTags(setOptions, fetchTags);
    setTag(tagValues(content));
  }, []);
  const [css, theme] = useStyletron();
  return (
    <Select
      value={tag}
      onChange={(params) => addTag(params)}
      options={Options}
      multi={true}
      filterOutSelected={true}
      creatable={true}
      size={SIZE.compact}
      placeholder="Select Tags"
      overrides={Tag_Overrides}
    />
  );
};
