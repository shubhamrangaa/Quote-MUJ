import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../styles/Create.module.scss";
import Select from "react-select";

const SubmissionForm = () => {
  const options = [
    { value: "news", label: "News" },
    { value: "Sports", label: "Sports" },
    { value: "Events", label: "Events" },
    { value: "Research", label: "Research" },
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
    return flag;
  };
  const submitHandler = () => {
    if (checkContent()) {
		fetch("https://quote-muj.herokuapp.com/api/blogs/new",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				...content
			})
		})
		.then(res=>res.json()
			.then(response=>{
				console.log(response)
			})
			.catch(err=>{
				console.log(err)
			})
		)
    //   axios
    //     .post("https://quote-muj.herokuapp.com/api/blogs/new", {
    //       ...content,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    } else {
      console.log("invalid pass");
    }
  };
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setContent] = useState({
    heading: "",
    author: "",
    caption: "",
    categories: [],
    article_data: "",
    likes: 2,
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
              article_data: editor.getData(),
            });
            console.log(editor.getData());
          }}
        />
      ) : (
        <p>Editor loading</p>
      )}
      <button className={styles.submitbtn} onClick={submitHandler}>
        Submit
      </button>
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
