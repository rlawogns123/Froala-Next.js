"use client";

import { useForm, Controller } from "react-hook-form";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/languages/ko.js";
import Editor from "./components/Editor";

export interface FormData {
  title: string;
  content: string;
}

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("title", { required: "제목을 입력해주세요" })}
      />
      {errors.title?.message}
      <Controller
        name="content"
        rules={{ required: "내용을 입력해주세요" }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Editor
            value={getValues("content") || ""}
            onChange={(value) => setValue("content", value)}
          />
        )}
      />
      {errors.content?.message}
      <button type="submit">작성</button>
    </form>
  );
}
