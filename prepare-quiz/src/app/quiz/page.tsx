"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Divider, Input, Form } from "antd";
import { useSelector, useDispatch } from "react-redux"
import { Canvas } from "../components/Canvas/page";
import Navbar from "../components/Navbar/page"
import { RootState } from "@/redux/store";
import { showQuestionModal } from "@/redux/features/questionsSlice";
const Quiz = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState<boolean>();
  const [selectedLayout, setSelectedLayout] = useState<string>("");
  const isShowQuestionModal = useSelector((state: RootState) => state.questionReducer.showQuestion)



  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    // console.log(isShowQuestionModal, 'tarık')
  }, [isShowQuestionModal])

  return (
    <div className={showModal === true ? "blur-sm" : ""}>
      <Navbar />
      <div className="flex justify-center my-5">
        <Canvas width={300} />
      </div>

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

      {isShowQuestionModal && (
        <Modal open={isShowQuestionModal} footer={false} closable={true}>
          <div className="flex flex-col">
            <div>
              <p className="text-xl text-green-500">Please enter your questions</p>
            </div>
            <div>
              <Form>
                
              </Form>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => dispatch(showQuestionModal(false))}
              >
                Add
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Quiz;
