import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../styles/Create.module.scss";
import Select from "react-select";
import Dropzone from "react-dropzone";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SubmissionForm = () => {
  const apiURL = process.env.SERVER_URL || "https://quote-muj.herokuapp.com";
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState({
    type: "",
    message: "",
  });
  const [files, setFiles] = useState(null);
  const options = [
    { value: "News", label: "News" },
    { value: "Sports", label: "Sports" },
    { value: "Events", label: "Events" },
    { value: "Research", label: "Research" },
    { value: "Academics", label: "Academics" },
    { value: "Leadership", label: "Leadership" },
    { value: "Placements", label: "Placements" },
    { value: "Accreditation", label: "Accreditation" },
  ];
  const handleChange = (e) => {
    setContent({
      ...content,
      categories: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };
  const checkContent = () => {
    let flag = true;
    Object.keys(content).forEach((key) => {
      if (content[key].length === 0) {
        flag = false;
      }
    });
    if (
      !/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g.test(
        content["video"]
      )
    ) {
      flag = false;
    }
    return flag;
  };
  const submitHandler = () => {
    if (checkContent()) {
      setLoading(true);
      let imageURL = "";
      if (files) {
        // image upload handler
        const fData = new FormData();
        fData.append("file", files[0]);
        fData.append("upload_preset", "i6tj3zd3");
        axios({
          method: "post",
          url: "https://api.cloudinary.com/v1_1/quote-muj/image/upload",
          data: fData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
            console.log(res.data);
            imageURL = res.data.secure_url;
            axios
              .post(`${apiURL}/api/blogs/new`, {
                ...content,
                images: imageURL,
              })
              .then((res) => {
                setResultText({
                  type: "success",
                  message: "Successfully Posted Article",
                });
                console.log(res);
              })
              .catch((err) => {
                setResultText({
                  type: "error",
                  message:
                    "Some error occurred while posting article. Please contact administrator.",
                });
                console.log(err);
              })
              .finally(() => {
                setLoading(false);
              });
          })
          .catch((err) => {
            setResultText({
              type: "error",
              message:
                "Some error occurred while posting article. Please contact administrator.",
            });
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        axios
          .post(`${apiURL}/api/blogs/new`, {
            ...content,
            images: imageURL,
          })
          .then((res) => {
            console.log(res);
            setResultText({
              type: "success",
              message: "Successfully Posted Article",
            });
          })
          .catch((err) => {
            setResultText({
              type: "error",
              message:
                "Some error occurred while posting article. Please contact administrator.",
            });
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
      // main POST handler
    } else {
      console.log("invalid pass");
      setLoading(false);
    }
  };
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setContent] = useState({
    heading: "",
    author: "",
    caption: "",
    categories: [],
    article_data: {},
    likes: 0,
    video: "",
  });
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <div className={styles.submissioncontainer}>
      <h1 className={styles.heading}>Create a blog</h1>
      <input
        className={styles.inputbox}
        placeholder="Heading"
        value={content.heading}
        type="text"
        onChange={(event) => {
          setContent({
            ...content,
            heading: event.target.value,
          });
        }}
      />
      <input
        className={styles.inputbox}
        placeholder="Author"
        value={content.author}
        type="text"
        onChange={(event) => {
          setContent({
            ...content,
            author: event.target.value,
          });
        }}
      />
      <input
        className={styles.inputbox}
        placeholder="Caption"
        value={content.caption}
        type="text"
        onChange={(event) => {
          setContent({
            ...content,
            caption: event.target.value,
          });
        }}
      />
      <Select
        placeholder={<p>Categories</p>}
        value={options.filter((obj) => content.categories.includes(obj.value))}
        isMulti
        options={options}
        className={styles.multiselect}
        classNamePrefix="select"
        onChange={handleChange}
      />
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data="<p>Type your article here</p>"
          onChange={(event, editor) => {
            setContent({
              ...content,
              article_data: { data: editor.getData() },
            });
          }}
        />
      ) : (
        <p>Editor loading</p>
      )}
      <Dropzone
        onDrop={(files) => {
          setFiles(files);
        }}
        accept="image/jpeg, image/png"
        maxSize={30720000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? styles.accept
            : isDragReject
            ? styles.reject
            : "";

          return (
            <div
              {...getRootProps({
                className: `${styles.dropzone} ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <span className={styles.label}>{isDragActive ? "📂" : "📁"}</span>
              <p className={styles.text}>
                {isDragActive
                  ? `Drop your files here`
                  : `Drag & drop or click to select image (jpg/png)`}
              </p>
            </div>
          );
        }}
      </Dropzone>
      {files && (
        <p className={styles.selectedText}>
          Selected File : {files[files.length - 1].name}
        </p>
      )}
      <input
        className={styles.inputbox}
        placeholder="Video URL"
        value={content.video}
        type="text"
        onChange={(event) => {
          setContent({
            ...content,
            video: event.target.value,
          });
        }}
      />
      <button
        className={`${loading && styles.loading} ${styles.submitbtn}`}
        onClick={submitHandler}
      >
        {loading ? `Loading...` : `Submit`}
      </button>
      <p
        className={
          resultText &&
          (resultText.type === "success"
            ? styles.successText
            : styles.errorText)
        }
      >
        {resultText.message && resultText.message}
      </p>
    </div>
  );
};
const create = () => {
  const isLoggedIn = true;
  return (
    <div className={styles.container}>
      {isLoggedIn ? <SubmissionForm /> : <div>Not Logged In</div>}
    </div>
  );
};

export default create;
