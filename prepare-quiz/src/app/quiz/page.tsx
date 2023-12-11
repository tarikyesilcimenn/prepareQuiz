"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Divider } from "antd";
import { Canvas } from "../components/Canvas/page";
import DraggableComponent from "../components/Draggable";

const Quiz = () => {
  const [showModal, setShowModal] = useState<boolean>();
  const [selectedLayout, setSelectedLayout] = useState<string>("");

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className={showModal === true ? "blur-sm" : ""}>
      <div className="flex justify-center items-center bg-white h-[74px] text-black">
        <h1>LOGO</h1>
      </div>
      <div className="flex justify-center my-5">
        <Canvas width={300} height={400} />
      </div>
      <DraggableComponent />

      {showModal && (
        <Modal open={showModal} footer={false} closable={false}>
          <p className="text-xl">
            Hello teacher, Please select your quiz layout 😇
          </p>
          <div className="flex justify-center items-center gap-10">
            <img
              onClick={() => setSelectedLayout("single")}
              src="https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg"
              width="100"
              height="200"
              className={
                selectedLayout === "single" ? "border border-green-400" : ""
              }
            />
            <img
              onClick={() => setSelectedLayout("double")}
              src="https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg"
              width="100"
              height="200"
              className={
                selectedLayout === "double" ? "border border-green-400" : ""
              }
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setShowModal(false)}
              disabled={selectedLayout.length === 0}
            >
              Select
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Quiz;
