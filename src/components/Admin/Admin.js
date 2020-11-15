import React, { useEffect, useState } from "react";
import { AddMore, Submit } from "../styled components/button";
import "./Admin.css";

import CancelIcon from "@material-ui/icons/Cancel";

function Admin() {
  const [formKey, setFormKey] = useState([]);
  const [successMessage, setSuccessMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = () => {
    let time = Date.now();

    setFormKey([
      ...formKey,
      { value: { title: "", img: "", category: "" }, id: time },
    ]);
  };

  useEffect(() => {
    let time = Date.now();
    setFormKey([
      ...formKey,
      { value: { title: "", img: "", category: "" }, id: time },
    ]);
  }, []);

  const handleRemove = (id) => {
    setFormKey(formKey.filter((form) => form.id !== id));
  };

  const handleValue = (e, id, type) => {
    // let value;
    // let img;
    // let ID;

    // if(id === "img") {
    //   console.log(e.target);
    //   img = e.target;

    // }else {
    //   value = e.target.value;
    //   ID = id;
    // }
    // setFormValue([...formValue, {id: ID, title: value, image: img}])

    let index = formKey.findIndex((form) => form.id === id);
    console.log(index);
    console.log(formKey);
    if (type === "title") {
      let newForm = formKey;
      newForm[index].value.title = e.target.value;
      setFormKey(newForm);
    } else if (type === "img") {
      let newForm = formKey;
      newForm[index].value.img = e.target;
      setFormKey(newForm);
    } else {
      let newForm = formKey;
      newForm[index].value.category = e.target.value;
      setFormKey(newForm);
    }
  };

  const onSubmit = () => {
    setIsLoading(true);
    let bedRoomData = new FormData();
    let livingRoomData = new FormData();
    let diningRoomData = new FormData();
    let officeData = new FormData();
    let kidData = new FormData();
    let nurseryData = new FormData();
    let formatedData = [bedRoomData, livingRoomData, diningRoomData, officeData, kidData, nurseryData];
    // if(formKey[0].value.img && formKey[0].value.title) {
    //   formatedData.append("title", formKey[0].value.title);
    //   formatedData.append("photo", formKey[0].value.img.files[0]);
    // }else {
    //   console.log("No")
    // }
    // console.log(formatedData.getAll("photo"))

    formKey.map((form) => {
      if (form.value.img && form.value.title && form.value.category) {
        switch (form.value.category) {
          case "bed-room":
            bedRoomData.append("title", form.value.title);
            bedRoomData.append("photo", form.value.img.files[0]);
            bedRoomData.append("category", form.value.category);
            break;
          case "living-room":
            livingRoomData.append("title", form.value.title);
            livingRoomData.append("photo", form.value.img.files[0]);
            livingRoomData.append("category", form.value.category);
            break;
          case "dining-room":
            diningRoomData.append("title", form.value.title);
            diningRoomData.append("photo", form.value.img.files[0]);
            diningRoomData.append("category", form.value.category);
            break;
          case "office":
            officeData.append("title", form.value.title);
            officeData.append("photo", form.value.img.files[0]);
            officeData.append("category", form.value.category);
            break;
          case "kids":
            kidData.append("title", form.value.title);
            kidData.append("photo", form.value.img.files[0]);
            kidData.append("category", form.value.category);
            break;
          case "nursery":
            nurseryData.append("title", form.value.title);
            nurseryData.append("photo", form.value.img.files[0]);
            nurseryData.append("category", form.value.category);
            break;
          default:
            alert("Invalid");
            break;  
        }
      } else {
        console.log("No");
      }
    });
    // console.log(formatedData[0].getAll("category")[0]);

    for(let i = 0; i < formatedData.length; i++) {
      if(formatedData[i].getAll("photo").length > 0 ) {
            fetch(`http://localhost:4001/category?type=${formatedData[i].getAll("category")[0]}`, {
              method: "POST",
              body: formatedData[i],
            }).then((response) => {
              if (response.ok) {
                setSuccessMessage([...successMessage, `${formatedData[i].getAll("category")[0]} successfully uploaded`]);
                console.log(response)
              }else {
                console.log("failed")
              }
            });
      }
    }

    // fetch("http://localhost:4001/category?type=bed-room", {
    //   method: "POST",
    //   body: formatedData,
    // }).then((response) => {
    //   if (response.ok) {
    //     console.log("OKAY");
    //   }
    // });
  };

  return (
    <div className={`admin ${isLoading ? "admin--loading": ""}`}>
      {formKey.map((form) => (
        <form className="admin__form" key={form.id}>
          <label> Title/Info</label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Give a title or information about the image"
            className="admin__input"
            onChange={(e) => handleValue(e, form.id, "title")}
          />
          <br />
          <select
            name="category"
            onChange={(e) => handleValue(e, form.id, "category")}
          >
            <option value="">Choose a category</option>
            <option value="bed-room">Bed Room</option>
            <option value="living-room">Living Room</option>
            <option value="dining-room">Dining Room</option>
            <option value="office">Office</option>
            <option value="kids">Kid's Room</option>
            <option value="nursery">Nursery</option>
          </select>
          <br />
          <br />
          <input
            type="file"
            name="photo"
            className="admin__file"
            onChange={(e) => handleValue(e, form.id, "img")}
          />
          <CancelIcon
            className="admin__remove"
            onClick={() => handleRemove(form.id)}
          />
          {/* <button onClick={() => addDone(newInput, newImg)}> Done </button>   */}
        </form>
      ))}

      <div className="admin__more">
        <AddMore className="admin__addButton" onClick={handleAdd}>
          {" "}
          Add more...{" "}
        </AddMore>
        <Submit onClick={onSubmit}> Submit </Submit>
      </div>
      <div className="admin__loader" style={isLoading ? {display: "block"} : {display: "none"}}>
        <img src="./img/loader.gif" alt="loader" />
        <p>sda</p>
      </div>
    </div>
  );
}

export default Admin;
