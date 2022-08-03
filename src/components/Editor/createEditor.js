import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { useStyletron } from "baseui";
import { useState } from "react";
import { FormControl } from "baseui/form-control";
import AppContext from "../../AppContext";
import { useContext } from "react";
import { useRef } from "react";
import { Button, KIND, SIZE } from "baseui/button";
import { useCallback } from "react";
import {
  SnackbarProvider,
  useSnackbar,
  DURATION,
  PLACEMENT,
} from "baseui/snackbar";
import { OptionalInputFieldLabel } from "./components/optionalInputFieldLabel/optionalInputFieldLabel";
import { InputFieldLabel } from "./components/inputFieldLabel/inputFieldLabel";
import closeIcon from "./assets/closeIcon.png";
import { useEffect } from "react";
import addConfig from "../../../firebase/addConfig";
import updateConfig from "../../../firebase/updateConfig";
import Editor from "@monaco-editor/react";
import { Description } from "./components/description/description";
import { Fotter } from "./components/footer/footer";
import { Tags } from "./components/tags/tags";
import { InputFields } from "./components/inputFields/inputFields";
import {
  ValidationErrors,
  ValidateJson,
  AllFieldValidation,
} from "./utils/validationErrors";
import { add, update } from "./utils/databaseEvents";
import { initialData, setheading, setbutton } from "./utils/dataInitialise";
import { setData } from "./utils/setData";
import { change } from "./utils/change";
import { AddElementsForm } from "./utils/fieldChange";
import { submit } from "./utils/submit";
import { Escape } from "./components/escape";
import { Form_Control_Overrides } from "./utils/constants";
import { FormInput } from "./components/formInput";
import { Compare } from "./components/comapre";

const Child = ({
  openEditModal,
  setOpenEditModal,
  listContent,
  isAdd,
  fetchConfigs,
  IsFine,
}) => {
  const [css, theme] = useStyletron();
  const close = () => {
    setOpenEditModal(false);
  };
  const heading = setheading(isAdd, listContent);
  const button = setbutton(isAdd);
  const content = AddElementsForm(listContent, isAdd);
  const tempContent = initialData(content);
  const [currentContent, setCurrentContent] = useState(tempContent);
  const [description, setDescription] = useState(content["Description"]);
  const [name, setName] = useState(content["Name"]);
  const [disable, setDisable] = useState(false);
  const [Options, setOptions] = useState([]);
  const [tag, setTag] = useState("");
  const [err, setErr] = useState({ id: "" });
  const context = useContext(AppContext);
  const Config = useRef(null);
  const [first, setFirst] = useState("");
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [config, setConfig] = useState(
    JSON.stringify(content["Config"], null, 4)
  );
  const scrollToElement = (testRef) => testRef.current.scrollIntoView();
  const { enqueue } = useSnackbar();

  const Change = (e) => {
    change(
      e,
      setName,
      setDescription,
      tempContent,
      currentContent,
      setCurrentContent
    );
  };

  const Error = (array) => {
    const str = ValidationErrors(setErr, array);
    if (str == "Config") scrollToElement(Config);
    setCount(count + 1);
    setFirst(str);
  };

  const val = currentContent["Config"];
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const handleEditorPrettify = useCallback(() => {
    editorRef.current?.getAction("editor.action.formatDocument").run();
    if (editorRef.current != null) {
      currentContent["Config"] = editorRef.current.getValue();
    }
  }, []);

  if (editorRef.current != null) {
    if (editorRef.current.getValue() != "") {
      val = editorRef.current.getValue();
    } else {
      val = currentContent["Config"];
    }
  }

  const compare = () => {
    setOpenModal(true);
    setConfig(editorRef.current.getValue());
  };

  const Submit = () => {
    submit(
      tempContent,
      currentContent,
      isAdd,
      name,
      description,
      editorRef.current.getValue(),
      context,
      tag,
      Error
    );
    val = editorRef.current.getValue();
  };

  const showSnackbar = (isFine, str) => {
    if (str == "unavailable") str = "Check Your Internet Connection";
    if (isFine) {
      enqueue({
        message: "Successfully " + button + "d " + content["Name"],
      });
      setDisable(false);
      setTimeout(close, 1000);
      fetchConfigs();
    } else {
      enqueue({
        message: str,
      });
      setDisable(false);
    }
  };
  useEffect(() => {
    if (Object.keys(err).length == 0) {
      setDisable(true);
      if (isAdd) add(addConfig, IsFine, showSnackbar, currentContent);
      else update(updateConfig, IsFine, showSnackbar, currentContent);
    }
  }, [err]);

  useEffect(() => {
    const str = "";
    if (editorRef.current != null) str = editorRef.current.getValue();
    else str = currentContent["Config"];
    if (ValidateJson(str).length == 0) {
      const newConfig = setData(currentContent, str);
      if (editorRef.current != null) editorRef.current.setValue(newConfig);
    }
  }, [currentContent]);
  return (
    <>
      <div
        className={css({
          display: "grid",
          height: "94vh",
          backgroundColor: theme.colors.mono400,
          position: "absolute",
          top: "6vh",
        })}
      >
        <div
          className={css({
            display: "flex",
            overflowY: "scroll",
          })}
        >
          <div
            className={css({
              display: "flex",
              justifyContent: "center",
              width: "96%",
            })}
          >
            <div
              className={css({
                marginTop: "6vh",
                width: "70%",
                marginLeft: "18%",
                marginRight: "12%",
              })}
            >
              <div
                className={css({
                  backgroundColor: theme.colors.backgroundPrimary,

                  overflowY: "auto",
                  width: "100%",
                  borderRadius: "8px",
                })}
              >
                <div
                  className={css({
                    margin: "50px",
                  })}
                >
                  <h5
                    className={css({
                      marginBottom: "20px",
                      fontSize: "x-large",
                      wordBreak: "break-all",
                    })}
                  >
                    {heading}
                  </h5>
                  <FlexGrid flexGridColumnCount={1} flexGridRowGap="6px">
                    <FlexGridItem>
                      <FormInput
                        err={err}
                        label={"Name"}
                        currentContent={currentContent}
                        Change={Change}
                        name={name}
                        first={first}
                        count={count}
                      />
                    </FlexGridItem>

                    <FlexGridItem>
                      <OptionalInputFieldLabel label={"Description"} />
                      <FormControl>
                        <Description
                          change={Change}
                          description={description}
                        />
                      </FormControl>
                    </FlexGridItem>

                    <FlexGridItem>
                      <FlexGrid
                        flexGridColumnCount={2}
                        flexGridColumnGap="10px"
                      >
                        <FlexGridItem>
                          <FormInput
                            err={err}
                            label={"Group"}
                            currentContent={currentContent}
                            Change={Change}
                            name={name}
                            first={first}
                            count={count}
                          />
                        </FlexGridItem>
                        <FlexGridItem>
                          <FormInput
                            err={err}
                            label={"Type"}
                            currentContent={currentContent}
                            Change={Change}
                            name={name}
                            first={first}
                            count={count}
                          />
                        </FlexGridItem>
                      </FlexGrid>
                    </FlexGridItem>
                    <FlexGridItem>
                      <FlexGrid
                        flexGridColumnCount={2}
                        flexGridColumnGap="10px"
                      >
                        <FlexGridItem>
                          <FormInput
                            err={err}
                            label={"Module"}
                            currentContent={currentContent}
                            Change={Change}
                            name={name}
                            first={first}
                            count={count}
                          />
                        </FlexGridItem>
                        <FlexGridItem>
                          <div>
                            <OptionalInputFieldLabel label={"Tags"} />
                            <FormControl
                              error={err["Tag"]}
                              overrides={{
                                ControlContainer: {
                                  style: ({ $theme }) => ({
                                    paddingBottom: "0px",
                                  }),
                                },
                              }}
                            >
                              <Tags
                                Options={Options}
                                tag={tag}
                                setTag={setTag}
                                setOptions={setOptions}
                                content={content}
                              />
                            </FormControl>
                          </div>
                        </FlexGridItem>
                      </FlexGrid>
                    </FlexGridItem>
                    <FlexGridItem>
                      <div ref={Config}>
                        <OptionalInputFieldLabel label={"Configuration"} />
                        <FormControl
                          error={err["Config"]}
                          overrides={Form_Control_Overrides}
                        >
                          <div
                            className={css({
                              height: "500px",

                              backgroundColor: theme.colors.black,
                              overflowY: "scroll",
                              borderRadius: "8px",
                              outline: err["Config"]
                                ? `solid 1px ${theme.colors.negative300}`
                                : "none",
                            })}
                          >
                            <Editor
                              defaultLanguage="json"
                              theme="vs-dark"
                              onChange={handleEditorPrettify}
                              onMount={handleEditorDidMount}
                              value={val}
                            ></Editor>
                          </div>
                        </FormControl>
                      </div>
                      <Button
                        onClick={compare}
                        kind={KIND.secondary}
                        size={SIZE.compact}
                        marginTop="1px"
                        overrides={{
                          Root: {
                            style: {
                              borderTopLeftRadius: theme.borders.radius300,
                              borderTopRightRadius: theme.borders.radius300,
                              borderBottomLeftRadius: theme.borders.radius300,
                              borderBottomRightRadius: theme.borders.radius300,
                              // boxShadow: theme.lighting.shadow400,
                            },
                          },
                        }}
                      >
                        Compare
                      </Button>
                      <Compare
                        newdata={config}
                        olddata={JSON.stringify(content["Config"], null, 4)}
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                      />
                    </FlexGridItem>
                  </FlexGrid>
                </div>
              </div>
              <div
                className={css({
                  backgroundColor: theme.colors.mono400,
                  height: "6vh",
                })}
              ></div>
            </div>
          </div>
          <Escape close={close} />
        </div>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: "8vh",
            position: "sticky",
            zIndex: "2",
            bottom: 0,
            backgroundColor: theme.colors.backgroundPrimary,
            borderTop: `solid 1px ${theme.colors.mono500}`,
          })}
        >
          <Fotter
            close={close}
            disable={disable}
            button={button}
            Submit={Submit}
          />
        </div>
      </div>
    </>
  );
};

export const CreateEditor = ({
  openEditModal,
  setOpenEditModal,
  listContent,
  isAdd,
  fetchConfigs,
}) => {
  const [css, theme] = useStyletron();
  const [isFine, setIsFine] = useState(false);
  const IsFine = (val) => {
    setIsFine(val);
  };
  return (
    <SnackbarProvider
      placement={PLACEMENT.bottom}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            backgroundColor: isFine
              ? `${theme.colors.positive}`
              : `${theme.colors.negative}`,
          }),
        },
        Message: {
          style: {
            wordBreak: "break-all",
          },
        },
        PlacementContainer: {
          style: {
            zIndex: "5",
          },
        },
      }}
    >
      <Child
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        listContent={listContent}
        isAdd={isAdd}
        fetchConfigs={fetchConfigs}
        IsFine={IsFine}
      />
    </SnackbarProvider>
  );
};
